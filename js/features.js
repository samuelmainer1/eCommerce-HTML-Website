// BigDrop Kenya - Recently Viewed, Orders, Mini Cart, Tracking

const FEAT_KEYS = {
  recent: 'bd_recently_viewed',
  orders: 'bd_orders',
  saveLater: 'bd_save_later'
};

function getRecent() {
  try { return JSON.parse(localStorage.getItem(FEAT_KEYS.recent) || '[]'); } catch { return []; }
}
function addRecent(productId) {
  let list = getRecent().filter(id => id !== productId);
  list.unshift(productId);
  list = list.slice(0, 8);
  localStorage.setItem(FEAT_KEYS.recent, JSON.stringify(list));
}
function getRecentProducts() {
  return getRecent().map(id => getProductById(id)).filter(p => p && p.status === 'approved');
}

function getOrders() {
  try { return JSON.parse(localStorage.getItem(FEAT_KEYS.orders) || '[]'); } catch { return []; }
}
function saveOrders(orders) {
  localStorage.setItem(FEAT_KEYS.orders, JSON.stringify(orders));
}
function saveOrder(order) {
  const orders = getOrders();
  orders.unshift(order);
  saveOrders(orders);
}
function getOrderById(id) {
  return getOrders().find(o => o.id === id || o.trackingNumber === id);
}
function updateOrderStatus(orderId, status, trackingNumber) {
  const orders = getOrders();
  const idx = orders.findIndex(o => o.id === orderId);
  if (idx === -1) return false;
  orders[idx].status = status;
  if (trackingNumber) orders[idx].trackingNumber = trackingNumber;
  orders[idx].updatedAt = new Date().toISOString();
  orders[idx].hasInvoice = true;
  if (String(status).toLowerCase() === 'delivered') {
    orders[idx].hasReceipt = true;
    orders[idx].receiptAt = new Date().toLocaleString('en-KE');
    orders[idx].paidAndDelivered = true;
  }
  if (!orders[idx].history) orders[idx].history = [];
  orders[idx].history.push({ status, at: new Date().toLocaleString('en-KE'), by: 'admin' });
  saveOrders(orders);
  return true;
}

// Orders visible to a vendor (only items they sold)
function getOrdersForVendor(vendorId) {
  return getOrders().map(order => {
    const vendorItems = (order.items || []).filter(item => {
      const p = getProductById(item.productId);
      return p && p.vendorId === vendorId;
    });
    if (!vendorItems.length) return null;
    const vendorTotal = vendorItems.reduce((s, i) => {
      const p = getProductById(i.productId);
      return s + (p ? p.price * i.qty : 0);
    }, 0);
    return { ...order, items: vendorItems, vendorTotal };
  }).filter(Boolean);
}

// Sales stats for vendor
function getVendorSalesStats(vendorId) {
  const orders = getOrdersForVendor(vendorId);
  let revenue = 0, units = 0;
  const byProduct = {};
  orders.forEach(o => {
    (o.items || []).forEach(i => {
      const p = getProductById(i.productId);
      if (!p) return;
      revenue += p.price * i.qty;
      units += i.qty;
      if (!byProduct[p.id]) byProduct[p.id] = { title: p.title, units: 0, revenue: 0 };
      byProduct[p.id].units += i.qty;
      byProduct[p.id].revenue += p.price * i.qty;
    });
  });
  return { revenue, units, orderCount: orders.length, byProduct: Object.values(byProduct) };
}

// Admin sales overview
function getAdminSalesStats() {
  const orders = getOrders();
  let revenue = 0, units = 0;
  orders.forEach(o => {
    revenue += o.total || 0;
    (o.items || []).forEach(i => { units += i.qty || 0; });
  });
  return { revenue, units, orderCount: orders.length };
}

function getSaveLater() {
  try { return JSON.parse(localStorage.getItem(FEAT_KEYS.saveLater) || '[]'); } catch { return []; }
}
function toggleSaveLater(productId) {
  let list = getSaveLater();
  const i = list.indexOf(productId);
  if (i === -1) { list.push(productId); localStorage.setItem(FEAT_KEYS.saveLater, JSON.stringify(list)); return true; }
  list.splice(i, 1);
  localStorage.setItem(FEAT_KEYS.saveLater, JSON.stringify(list));
  return false;
}

function openMiniCart() {
  let panel = document.getElementById('mini-cart-panel');
  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'mini-cart-panel';
    panel.className = 'mini-cart-panel';
    document.body.appendChild(panel);
  }
  const cart = getCart();
  let html = '<div class="mini-cart-header"><strong>Cart (' + cart.reduce((s,i)=>s+i.qty,0) + ')</strong><button onclick="closeMiniCart()" style="background:none;border:none;font-size:1.4rem;cursor:pointer;">&times;</button></div>';
  if (!cart.length) {
    html += '<p style="padding:20px;text-align:center;color:#777;">Your cart is empty</p>';
  } else {
    html += '<div class="mini-cart-items">';
    cart.forEach(item => {
      const p = getProductById(item.productId);
      if (!p) return;
      html += '<div class="mini-cart-item"><img src="' + (p.image||'') + '" alt=""><div><div style="font-size:0.85rem;font-weight:600;">' + p.title.substring(0,40) + (p.title.length>40?'...':'') + '</div><div style="color:#f68b1e;font-weight:700;font-size:0.9rem;">' + formatPrice(p.price) + ' × ' + item.qty + '</div></div></div>';
    });
    html += '</div>';
    const sub = cart.reduce((s,i) => { const p = getProductById(i.productId); return s + (p ? p.price * i.qty : 0); }, 0);
    html += '<div class="mini-cart-footer"><div style="display:flex;justify-content:space-between;margin-bottom:12px;"><span>Subtotal</span><strong>' + formatPrice(sub) + '</strong></div><a href="cart.html" class="btn btn-accent" style="display:block;text-align:center;width:100%;">View Cart & Checkout</a></div>';
  }
  panel.innerHTML = html;
  panel.classList.add('open');
  let overlay = document.getElementById('mini-cart-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'mini-cart-overlay';
    overlay.className = 'mini-cart-overlay';
    overlay.onclick = closeMiniCart;
    document.body.appendChild(overlay);
  }
  overlay.classList.add('open');
}
function closeMiniCart() {
  document.getElementById('mini-cart-panel')?.classList.remove('open');
  document.getElementById('mini-cart-overlay')?.classList.remove('open');
}

function getDeliveryEstimate() {
  const d = new Date();
  d.setDate(d.getDate() + 2 + Math.floor(Math.random() * 3));
  return d.toLocaleDateString('en-KE', { weekday: 'short', day: 'numeric', month: 'short' });
}

function getKeyFeatures(product) {
  const map = {
    Phones: ['Dual SIM', 'Long battery life', 'Fast charging support', 'High-resolution camera', '1 year warranty'],
    TVs: ['Smart Android / Google TV', 'Full HD / 4K ready', 'Wi-Fi & Bluetooth', 'Netflix & YouTube apps', '1 year warranty'],
    Electronics: ['Genuine accessories', 'Plug & play', 'Compatible with major brands', 'Durable build', 'Warranty included'],
    Fashion: ['Comfortable fit', 'Quality fabric', 'Easy care', 'Trendy design', 'Multiple sizes available'],
    Home: ['Durable materials', 'Easy to use', 'Energy efficient', 'Space-saving design', 'Warranty available'],
    Food: ['Fresh quality', 'Sealed packaging', 'Trusted brands', 'Great value', 'Fast delivery'],
    Beauty: ['Genuine product', 'Suitable for daily use', 'Dermatologically tested formula', 'Visible results', 'Trusted brand']
  };
  return map[product.category] || ['Quality product', 'Great value', 'Fast delivery', 'Verified seller', 'Customer favourite'];
}

function generateTrackingNumber() {
  return 'BD' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 6).toUpperCase();
}
