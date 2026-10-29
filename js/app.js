// BigDrop KE - Shared UI Logic

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  updateAuthUI();
});

function updateAuthUI() {
  const user = getCurrentUser();
  const authLinks = document.getElementById('auth-links');
  if (!authLinks) return;

  if (user) {
    let dashboardLink = '';
    if (user.role === 'admin') {
      dashboardLink = '<a href="admin/dashboard.html">Admin Dashboard</a>';
    } else if (user.role === 'vendor') {
      dashboardLink = '<a href="vendor/dashboard.html">Vendor Dashboard</a>';
    }
    authLinks.innerHTML = '<span>Hi, ' + (user.name || user.shopName || 'User') + '</span> ' + dashboardLink + ' <a href="account.html">Account</a> <a href="orders.html">Orders</a> <a href="wishlist.html">♡ Wishlist</a> <button onclick="handleLogout()">Logout</button>';
  } else {
    authLinks.innerHTML = '<a href="login.html">Login</a> <a href="wishlist.html">♡ Wishlist</a> <a href="vendor/register.html">Sell on BigDrop</a>';
  }
}

function handleLogout() {
  logout();
  window.location.href = 'shop.html';
}

function renderProductCard(product) {
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const imgSrc = product.image && product.image.startsWith('http')
    ? product.image
    : 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=400&h=400&fit=crop';

  const inSubfolder = window.location.pathname.includes('/vendor/') || window.location.pathname.includes('/admin/');
  const base = inSubfolder ? '../' : '';
  const productUrl = base + 'product.html?id=' + product.id;
  const wished = typeof isInWishlist === 'function' && isInWishlist(product.id);

  return (
    '<div class="product-card" style="cursor:pointer;" onclick="if(!event.target.closest(\'.add-cart-btn\') && !event.target.closest(\'.wishlist-btn\')) location.href=\'' + productUrl + '\'">' +
      '<div class="product-img">' + (product.stock > 0 && product.stock <= 5 ? '<span class="stock-badge">Only ' + product.stock + ' left</span>' : '') +
        '<img src="' + imgSrc + '" alt="' + product.title + '" loading="lazy" onerror="this.src=\'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=400&h=400&fit=crop\'">' +
        (discount > 0 ? '<span class="discount-badge">-' + discount + '%</span>' : '') +
        (product.reviews > 100 ? '<span class="badge-bestseller">Best Seller</span>' : (product.rating >= 4.5 ? '<span class="badge-choice">BigDrop\'s Choice</span>' : '')) +
        '<button class="wishlist-btn ' + (wished ? 'active' : '') + '" onclick="event.stopPropagation(); toggleWish(\'' + product.id + '\', this)" title="Add to wishlist">' +
          (wished ? '♥' : '♡') +
        '</button>' +
      '</div>' +
      '<div class="product-info">' +
        '<div class="product-title">' + product.title + '</div>' +
        '<div><span class="product-price">' + formatPrice(product.price) + '</span>' +
        (product.oldPrice ? '<span class="product-old-price">' + formatPrice(product.oldPrice) + '</span>' : '') + '</div>' +
        '<div class="product-rating">★ ' + (product.rating || 4.0) + ' (' + (product.reviews || 0) + ')</div>' +
        '<button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(\'' + product.id + '\'); showToast(\'Added to cart!\', \'success\'); if(typeof openMiniCart===\'function\') openMiniCart();">Add to Cart</button>' +
        '<div class="card-actions" onclick="event.stopPropagation();">' +
          '<button type="button" onclick="openQuickView(\'' + product.id + '\')">Quick view</button>' +
          '<button type="button" onclick="toggleCompare(\'' + product.id + '\'); this.textContent=isInCompare(\'' + product.id + '\')?\'✓ Compare\':\'Compare\';">' + (typeof isInCompare==='function' && isInCompare(product.id) ? '✓ Compare' : 'Compare') + '</button>' +
          '<button type="button" onclick="shareProduct(\'' + product.title.replace(/'/g, "\\'") + '\', location.origin + location.pathname.replace(/[^/]*$/, \'\') + \'product.html?id=\' + \'' + product.id + '\')">Share</button>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

function toggleWish(productId, btn) {
  const added = toggleWishlist(productId);
  btn.classList.toggle('active', added);
  btn.textContent = added ? '♥' : '♡';
  showToast(added ? 'Added to wishlist' : 'Removed from wishlist', 'info');
}

function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!products.length) {
    container.innerHTML = '<div class="empty-state" style="grid-column: 1 / -1;"><div class="icon">📦</div><p>No products found.</p></div>';
    return;
  }
  container.innerHTML = products.map(renderProductCard).join('');
}

function handleSearch(e) {
  e.preventDefault();
  const q = document.getElementById('search-input') ? document.getElementById('search-input').value.trim().toLowerCase() : '';
  if (!q) {
    window.location.href = 'shop.html';
    return;
  }
  window.location.href = 'shop.html?search=' + encodeURIComponent(q);
}
