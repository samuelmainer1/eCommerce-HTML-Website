(function () {
  function basePath() {
    var path = (location.pathname || '').replace(/\\/g, '/');
    if (path.indexOf('/vendor/') >= 0 || path.indexOf('/admin/') >= 0) return '../';
    return '';
  }

  function pageFile() {
    var path = (location.pathname || '').replace(/\\/g, '/');
    var parts = path.split('/');
    return (parts[parts.length - 1] || 'index.html').toLowerCase();
  }

  function isMinimalAuthPage() {
    var f = pageFile();
    var path = (location.pathname || '').replace(/\\/g, '/');
    if (path.indexOf('/vendor/register') >= 0 || f === 'register.html') return true;
    if (path.indexOf('/vendor/login') >= 0) return true;
    if (path.indexOf('/admin/login') >= 0) return true;
    return false;
  }

  function getCategoryLinks(base) {
    var defaults = [
      { id: 'Phones', label: 'Phones & Tablets' },
      { id: 'TVs', label: 'TVs & Electronics' },
      { id: 'Fashion', label: 'Fashion' },
      { id: 'Home', label: 'Home & Office' },
      { id: 'Beauty', label: 'Health & Beauty' },
      { id: 'Food', label: 'Food' },
      { id: 'Electronics', label: 'Computing' }
    ];
    var cats = defaults;
    try {
      var saved = JSON.parse(localStorage.getItem('bd_categories') || 'null');
      if (saved && saved.length) {
        cats = saved.map(function (name) {
          if (typeof name === 'string') return { id: name, label: name };
          return name;
        });
      }
    } catch (e) {}
    return cats.map(function (cat) {
      var id = cat.id || cat;
      var label = cat.label || cat.id || cat;
      return '<a href="' + base + 'shop.html?cat=' + encodeURIComponent(id) + '">' + label + '</a>';
    }).join('');
  }

  function getUser() {
    try {
      if (typeof getCurrentUser === 'function') return getCurrentUser();
    } catch (e) {}
    try {
      return JSON.parse(localStorage.getItem('mh_currentUser') || 'null');
    } catch (e2) {
      return null;
    }
  }

  function fillAuth() {
    var el = document.getElementById('auth-links');
    if (!el) return;
    var base = basePath();
    var user = getUser();
    if (user) {
      var dash = '';
      if (user.role === 'admin') dash = '<a href="' + base + 'admin/dashboard.html">Admin</a> ';
      else if (user.role === 'vendor') dash = '<a href="' + base + 'vendor/dashboard.html">Dashboard</a> ';
      el.innerHTML =
        '<span class="auth-hi">Hi, ' + (user.name || user.shopName || 'User') + '</span> ' +
        dash +
        '<a href="' + base + 'account.html">Account</a> ' +
        '<a href="' + base + 'orders.html">Orders</a> ' +
        '<a href="' + base + 'wishlist.html">♡ Wishlist</a> ' +
        '<button type="button" class="btn-link" onclick="headerLogout()">Logout</button>';
    } else {
      el.innerHTML =
        '<a href="#" onclick="openLoginModal(event);return false;">Login</a> ' +
        '<a href="' + base + 'wishlist.html">♡ Wishlist</a> ' +
        '<a href="' + base + 'vendor/register.html">Sell on BigDrop</a>';
    }
  }

  function fillCart() {
    try {
      var cart = [];
      if (typeof getCart === 'function') cart = getCart();
      else cart = JSON.parse(localStorage.getItem('mh_cart') || '[]');
      var n = 0;
      (cart || []).forEach(function (i) { n += (i.qty || 1); });
      document.querySelectorAll('.cart-count').forEach(function (el) {
        el.textContent = n;
      });
    } catch (e) {}
  }

  window.handleHeaderSearch = function (e) {
    e.preventDefault();
    var q = (document.getElementById('search-input') || {}).value || '';
    q = String(q).trim();
    location.href = basePath() + 'shop.html' + (q ? '?search=' + encodeURIComponent(q) : '');
  };

  window.headerLogout = function () {
    try {
      if (typeof logout === 'function') logout();
      else if (typeof handleLogout === 'function') handleLogout();
      else localStorage.removeItem('mh_currentUser');
    } catch (e) {
      localStorage.removeItem('mh_currentUser');
    }
    location.href = basePath() + 'index.html';
  };

  window.openLoginModal = function (e) {
    if (e) e.preventDefault();
    var m = document.getElementById('login-modal');
    if (m) {
      m.classList.add('open');
      return;
    }
    location.href = basePath() + 'login.html';
  };

  window.closeLoginModal = function () {
    var m = document.getElementById('login-modal');
    if (m) m.classList.remove('open');
  };

  window.showSearchSuggest = function (q) {
    var box = document.getElementById('search-suggest');
    if (!box) return;
    q = (q || '').trim().toLowerCase();
    if (q.length < 2) {
      box.classList.remove('open');
      box.innerHTML = '';
      return;
    }
    var products = [];
    try {
      if (typeof getApprovedProducts === 'function') products = getApprovedProducts();
      else {
        products = JSON.parse(localStorage.getItem('mh_products') || '[]').filter(function (p) {
          return p && p.status === 'approved';
        });
      }
    } catch (e) {}
    var hits = products.filter(function (p) {
      return (p.title || '').toLowerCase().indexOf(q) >= 0 || (p.category || '').toLowerCase().indexOf(q) >= 0;
    }).slice(0, 8);
    if (!hits.length) {
      box.classList.remove('open');
      return;
    }
    var base = basePath();
    box.innerHTML = hits.map(function (p) {
      return '<a href="' + base + 'product.html?id=' + p.id + '"><img src="' + (p.image || '') + '" alt=""><span>' + p.title + '</span></a>';
    }).join('');
    box.classList.add('open');
  };

  function buildHeaderHtml(base) {
    var logoSrc = base + 'assets/logo.png';
    var minimal = isMinimalAuthPage();
    var html = '<header class="header">';
    var settings = (typeof getSettings === 'function') ? getSettings() : { phone: '+254 722 359 298', email: 'orders@bigdrop.co.ke', address: 'Nextgen Mall, Nairobi, Kenya' };
    html +=
      '<div class="header-top">' +
        '<div class="ht-left">' +
          '<span class="ht-item">📞 ' + (settings.phone || '+254 722 359 298') + '</span>' +
          '<span class="ht-item">✉️ ' + (settings.email || 'orders@bigdrop.co.ke') + '</span>' +
          '<span class="ht-item">📍 ' + (settings.address || 'Nextgen Mall, Nairobi, Kenya') + '</span>' +
        '</div>' +
        '<div class="ht-right">' +
          '<a href="' + base + 'vendor/register.html">Sell on BigDrop</a>' +
          '<a href="' + base + 'help.html">Help Center</a>' +
        '</div>' +
      '</div>';
    if (!minimal) {
      html +=
        '<div class="header-main">' +
          '<a href="' + base + 'index.html" class="logo">' +
            '<img src="' + logoSrc + '" alt="BigDrop" class="logo-img" onerror="this.style.display=\'none\';this.insertAdjacentHTML(\'afterend\',\'Big<span>Drop</span>\');">' +
          '</a>' +
          '<form class="search-bar" onsubmit="handleHeaderSearch(event)">' +
            '<div class="search-wrap">' +
              '<input type="text" id="search-input" placeholder="Search products, brands and categories..." autocomplete="off" oninput="showSearchSuggest(this.value)">' +
              '<div class="search-suggest" id="search-suggest"></div>' +
            '</div>' +
            '<button type="submit">Search</button>' +
          '</form>' +
          '<div class="header-actions" id="auth-links"></div>' +
          '<div class="header-actions">' +
            '<a href="' + base + 'cart.html" class="cart-link">🛒 Cart <span class="cart-count">0</span></a>' +
          '</div>' +
        '</div>' +
        '<nav class="nav-main">' +
          '<ul>' +
            '<li class="nav-dropdown">' +
              '<a href="' + base + 'shop.html">ALL CATEGORIES ▾</a>' +
              '<div class="nav-dropdown-menu">' + getCategoryLinks(base) + '</div>' +
            '</li>' +
            '<li><a href="' + base + 'shop.html">SHOP</a></li>' +
            '<li><a href="' + base + 'track.html">TRACK</a></li>' +
            '<li><a href="' + base + 'about.html">ABOUT US</a></li>' +
            '<li><a href="' + base + 'blog.html">BLOG</a></li>' +
            '<li><a href="' + base + 'contact.html">CONTACT US</a></li>' +
          '</ul>' +
        '</nav>';
    }
    html += '</header>';
    return html;
  }

  // Inject header
  var base = basePath();
  var target = document.getElementById('site-header');
  if (!target) {
    target = document.createElement('div');
    target.id = 'site-header';
    if (document.body.firstChild) document.body.insertBefore(target, document.body.firstChild);
    else document.body.appendChild(target);
  }
  target.outerHTML = buildHeaderHtml(base);

  if (!isMinimalAuthPage()) {
    fillAuth();
    fillCart();
  }

  // Login modal
  if (!document.getElementById('login-modal') && !isMinimalAuthPage()) {
    var modal = document.createElement('div');
    modal.id = 'login-modal';
    modal.className = 'login-modal';
    modal.innerHTML =
      '<div class="login-modal-panel">' +
        '<button type="button" class="login-modal-close" onclick="closeLoginModal()">&times;</button>' +
        '<h2>Login</h2>' +
        '<p class="login-modal-sub">Welcome back to BigDrop Kenya</p>' +
        '<form id="login-modal-form">' +
          '<div class="form-group"><label>Email</label><input type="email" id="lm-email" required placeholder="you@example.com"></div>' +
          '<div class="form-group"><label>Password</label><input type="password" id="lm-pass" required placeholder="••••••••"></div>' +
          '<button type="submit" class="btn btn-accent" style="width:100%;">Login</button>' +
        '</form>' +
        '<p class="login-modal-foot"><a href="' + base + 'login.html">Full login page</a> · <a href="' + base + 'vendor/register.html">Sell on BigDrop</a></p>' +
      '</div>';
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeLoginModal();
    });
    document.body.appendChild(modal);
    document.getElementById('login-modal-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('lm-email').value.trim();
      var pass = document.getElementById('lm-pass').value;
      var user = null;
      if (typeof login === 'function') user = login(email, pass);
      if (user) {
        closeLoginModal();
        if (typeof showToast === 'function') showToast('Welcome back!', 'success');
        setTimeout(function () { location.reload(); }, 300);
      } else {
        if (typeof showToast === 'function') showToast('Invalid email or password', 'error');
        else alert('Invalid email or password');
      }
    });
  }

  // WhatsApp float - bottom left
  if (!document.querySelector('.wa-float')) {
    var wa = document.createElement('a');
    wa.href = 'https://wa.me/254722359298';
    wa.target = '_blank';
    wa.rel = 'noopener';
    wa.className = 'wa-float';
    wa.title = 'Chat on WhatsApp';
    wa.setAttribute('aria-label', 'WhatsApp');
    wa.innerHTML = '💬';
    document.body.appendChild(wa);
  }

  document.addEventListener('click', function (e) {
    var box = document.getElementById('search-suggest');
    if (box && !e.target.closest('.search-wrap')) box.classList.remove('open');
  });
})();
