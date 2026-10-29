// BigDrop Kenya - UI polish: compare, dark mode, share, back-to-top, quick view, announcement, skeletons

const COMPARE_KEY = 'bd_compare';

function getCompareList() {
  try { return JSON.parse(localStorage.getItem(COMPARE_KEY) || '[]'); } catch { return []; }
}
function saveCompareList(list) {
  localStorage.setItem(COMPARE_KEY, JSON.stringify(list.slice(0, 3)));
  updateCompareBar();
}
function toggleCompare(productId) {
  let list = getCompareList();
  const i = list.indexOf(productId);
  if (i >= 0) {
    list.splice(i, 1);
    if (typeof showToast === 'function') showToast('Removed from compare', 'info');
  } else {
    if (list.length >= 3) {
      if (typeof showToast === 'function') showToast('Compare up to 3 products only', 'error');
      return false;
    }
    list.push(productId);
    if (typeof showToast === 'function') showToast('Added to compare', 'success');
  }
  saveCompareList(list);
  return true;
}
function isInCompare(productId) {
  return getCompareList().includes(productId);
}
function updateCompareBar() {
  let bar = document.getElementById('compare-bar');
  const list = getCompareList();
  if (!list.length) {
    if (bar) bar.remove();
    return;
  }
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'compare-bar';
    document.body.appendChild(bar);
  }
  const base = (location.pathname.indexOf('/vendor/') >= 0 || location.pathname.indexOf('/admin/') >= 0) ? '../' : '';
  bar.innerHTML = '<span>Compare (' + list.length + '/3)</span>' +
    '<a href="' + base + 'compare.html" class="btn btn-sm btn-accent">View comparison</a>' +
    '<button type="button" class="btn btn-sm btn-outline" onclick="saveCompareList([]); location.reload();">Clear</button>';
}

function shareProduct(title, url) {
  const u = url || location.href;
  const text = title || document.title;
  if (navigator.share) {
    navigator.share({ title: text, url: u }).catch(function() {});
    return;
  }
  const wa = 'https://wa.me/?text=' + encodeURIComponent(text + ' ' + u);
  const menu = document.createElement('div');
  menu.className = 'share-menu';
  menu.innerHTML = '<button type="button" onclick="navigator.clipboard.writeText(\'' + u.replace(/'/g, "\\'") + '\').then(function(){if(typeof showToast===\'function\')showToast(\'Link copied!\',\'success\');this.closest(\'.share-menu\').remove();}.bind(this))">Copy link</button>' +
    '<a href="' + wa + '" target="_blank" rel="noopener">WhatsApp</a>' +
    '<button type="button" onclick="this.closest(\'.share-menu\').remove()">Close</button>';
  document.body.appendChild(menu);
  setTimeout(function() {
    document.addEventListener('click', function handler(e) {
      if (!menu.contains(e.target)) { menu.remove(); document.removeEventListener('click', handler); }
    });
  }, 100);
}

function openQuickView(productId) {
  const p = typeof getProductById === 'function' ? getProductById(productId) : null;
  if (!p) return;
  let modal = document.getElementById('quick-view-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quick-view-modal';
    modal.className = 'qv-overlay';
    document.body.appendChild(modal);
  }
  const base = (location.pathname.indexOf('/vendor/') >= 0 || location.pathname.indexOf('/admin/') >= 0) ? '../' : '';
  const price = typeof formatPrice === 'function' ? formatPrice(p.price) : p.price;
  modal.innerHTML =
    '<div class="qv-panel">' +
      '<button type="button" class="qv-close" onclick="closeQuickView()">&times;</button>' +
      '<div class="qv-grid">' +
        '<img src="' + (p.image || '') + '" alt="">' +
        '<div>' +
          '<h2>' + p.title + '</h2>' +
          '<p class="qv-price">' + price + (p.oldPrice ? ' <s>' + formatPrice(p.oldPrice) + '</s>' : '') + '</p>' +
          '<p class="qv-rating">★ ' + (p.rating || 4) + ' (' + (p.reviews || 0) + ')</p>' +
          '<p class="qv-desc">' + (p.description || '').substring(0, 160) + '…</p>' +
          '<div class="qv-actions">' +
            '<button type="button" class="btn btn-accent" onclick="addToCart(\'' + p.id + '\'); if(typeof showToast===\'function\')showToast(\'Added to cart!\',\'success\'); if(typeof openMiniCart===\'function\')openMiniCart();">Add to Cart</button>' +
            '<a class="btn btn-outline" href="' + base + 'product.html?id=' + p.id + '">Full details</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  modal.classList.add('open');
  modal.onclick = function(e) { if (e.target === modal) closeQuickView(); };
}
function closeQuickView() {
  const m = document.getElementById('quick-view-modal');
  if (m) m.classList.remove('open');
}

function initDarkMode() {
  const saved = localStorage.getItem('bd_dark');
  if (saved === '1') document.documentElement.classList.add('dark-mode');
  let btn = document.getElementById('dark-toggle');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'dark-toggle';
    btn.type = 'button';
    btn.title = 'Toggle dark mode';
    btn.innerHTML = document.documentElement.classList.contains('dark-mode') ? '☀️' : '🌙';
    btn.onclick = function() {
      document.documentElement.classList.toggle('dark-mode');
      const on = document.documentElement.classList.contains('dark-mode');
      localStorage.setItem('bd_dark', on ? '1' : '0');
      btn.innerHTML = on ? '☀️' : '🌙';
    };
    document.body.appendChild(btn);
  }
}

function initBackToTop() {
  let btn = document.getElementById('back-to-top');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.type = 'button';
    btn.title = 'Back to top';
    btn.innerHTML = '↑';
    btn.onclick = function() { window.scrollTo({ top: 0, behavior: 'smooth' }); };
    document.body.appendChild(btn);
  }
  window.addEventListener('scroll', function() {
    btn.classList.toggle('show', window.scrollY > 400);
  });
}

function initAnnouncementBar() {
  if (document.getElementById('announce-bar')) return;
  if (location.pathname.indexOf('/admin/') >= 0 || location.pathname.indexOf('/vendor/') >= 0) return;
  const bar = document.createElement('div');
  bar.id = 'announce-bar';
  var ann = 'Free delivery on selected orders · Use code BIGDROP10 for 10% off · Pay with M-Pesa';
  var annOn = true;
  try {
    if (typeof getSettings === 'function') {
      var st = getSettings();
      if (st.announce) ann = st.announce;
      if (st.announceOn === false) annOn = false;
    } else {
      ann = localStorage.getItem('bd_announce') || ann;
    }
  } catch (e) {}
  if (!annOn) return;
  bar.innerHTML = '<div class="announce-inner">' +
    '<span>🚚 ' + ann + '</span>' +
    '<button type="button" aria-label="Close" onclick="this.closest(\'#announce-bar\').remove()">&times;</button>' +
    '</div>';
  function placeBar() {
    var header = document.querySelector('.header');
    if (header && header.parentNode) header.parentNode.insertBefore(bar, header);
    else document.body.insertBefore(bar, document.body.firstChild);
  }
  placeBar();
  // Header may inject slightly later
  setTimeout(placeBar, 50);
  setTimeout(placeBar, 200);
}

function showSkeletons(containerId, count) {
  const el = document.getElementById(containerId);
  if (!el) return;
  count = count || 5;
  let html = '';
  for (let i = 0; i < count; i++) {
    html += '<div class="product-card skeleton-card"><div class="skel skel-img"></div><div class="skel skel-line"></div><div class="skel skel-line short"></div><div class="skel skel-btn"></div></div>';
  }
  el.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
  initDarkMode();
  initBackToTop();
  initAnnouncementBar();
  updateCompareBar();
});
