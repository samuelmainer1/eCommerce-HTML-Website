(function() {
  if (localStorage.getItem('bd_cookies_accepted')) return;

  const bar = document.createElement('div');
  bar.id = 'cookie-banner';
  bar.innerHTML = `
    <div class="cookie-inner">
      <p>By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.
        <a href="privacy.html">Privacy Policy</a>
      </p>
      <div class="cookie-actions">
        <button type="button" class="btn btn-outline btn-sm" id="cookie-reject">Reject</button>
        <button type="button" class="btn btn-accent btn-sm" id="cookie-accept">Accept All Cookies</button>
      </div>
    </div>
  `;
  document.body.appendChild(bar);

  document.getElementById('cookie-accept').onclick = function() {
    localStorage.setItem('bd_cookies_accepted', 'all');
    bar.remove();
  };
  document.getElementById('cookie-reject').onclick = function() {
    localStorage.setItem('bd_cookies_accepted', 'rejected');
    bar.remove();
  };
})();
