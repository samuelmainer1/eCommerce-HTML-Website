(function() {
  function basePath() {
    var path = location.pathname.replace(/\\/g, '/');
    if (path.indexOf('/vendor/') >= 0 || path.indexOf('/admin/') >= 0) return '../';
    return '';
  }
  var base = basePath();
  var settings = (typeof getSettings === 'function') ? getSettings() : { phone: '+254 722 359 298', email: 'orders@bigdrop.co.ke', address: 'NextGen Mall, 3rd Floor, Suite 39/40\nMombasa Road, Nairobi' };

  const footerHtml = `
  <footer class="footer">
    <div class="footer-grid">
      <div>
        <h4>About BigDrop</h4>
        <ul>
          <li><a href="${base}about.html">About Us</a></li>
          <li><a href="${base}careers.html">Careers</a></li>
          <li><a href="${base}blog.html">News & Blog</a></li>
          <li><a href="${base}black-friday.html">Black Friday</a></li>
          <li><a href="${base}help.html">Help Center</a></li>
          <li><a href="${base}contact.html">Contact Us</a></li>
        </ul>
        <div class="social-links">
          <a href="#" title="Facebook">f</a>
          <a href="#" title="Twitter">𝕏</a>
          <a href="#" title="Instagram">IG</a>
          <a href="#" title="WhatsApp">W</a>
        </div>
      </div>
      <div>
        <h4>Customer Service</h4>
        <ul>
          <li><a href="${base}returns.html">Returns & Refunds</a></li>
          <li><a href="${base}delivery.html">Delivery Info</a></li>
          <li><a href="${base}support.html">Support</a></li>
          <li><a href="${base}orders.html">My Orders</a></li>
          <li><a href="${base}track.html">Track by Number</a></li>
          <li><a href="${base}wishlist.html">Wishlist</a></li>
          <li><a href="${base}deals.html">Deals</a></li>
          <li><a href="${base}brands.html">Brands</a></li>
        </ul>
      </div>
      <div>
        <h4>Legal</h4>
        <ul>
          <li><a href="${base}terms.html">Terms and Conditions</a></li>
          <li><a href="${base}privacy.html">Privacy Notice</a></li>
          <li><a href="${base}cookies.html">Cookies Notice</a></li>
          <li><a href="${base}buyer-protection.html">Buyer Protection</a></li>
          <li><a href="${base}payment-methods.html">Payment Methods</a></li>
        </ul>
        <h4 style="margin-top:18px;">Make Money</h4>
        <ul>
          <li><a href="${base}vendor/register.html">Sell on BigDrop</a></li>
          <li><a href="${base}vendor/login.html">Vendor Login</a></li>
                  </ul>
      </div>
      <div>
        <h4>Stay Connected</h4>
        <p style="font-size:0.9rem;margin-bottom:8px;">Get deals & updates</p>
        <form class="newsletter-form" onsubmit="event.preventDefault(); var em=this.querySelector('input[type=email]').value; try { var list=JSON.parse(localStorage.getItem('bd_newsletter')||'[]'); list.push({email:em, date:new Date().toLocaleDateString()}); localStorage.setItem('bd_newsletter', JSON.stringify(list)); } catch(e){} if(typeof showToast==='function') showToast('Subscribed! Thank you.', 'success'); this.reset();">
          <input type="email" placeholder="Your email" required>
          <button type="submit">Join</button>
        </form>
        <p style="font-size:0.85rem;margin-top:14px;">Pay with: M-Pesa · Card · Airtel Money</p>
        <div class="pay-protection" style="margin-top:14px;">
          <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
            <span class="pay-badge">🛡 Buyer Protection</span>
            <span class="pay-badge">🔒 Secure Pay</span>
            <span class="pay-badge">M-Pesa</span>
            <span class="pay-badge">VISA</span>
            <span class="pay-badge">Mastercard</span>
          </div>
        </div>
        <p style="font-size:0.8rem;margin-top:12px;color:#aaa;">${(settings.address||'NextGen Mall').replace(/\n/g,'<br>')}<br>${settings.phone||'+254 722 359 298'}<br>${settings.email||'orders@bigdrop.co.ke'}</p>
      </div>
    </div>
    <div class="footer-bottom">&copy; 2026 BigDrop Kenya | Powered by Globeflight Kenya | All rights reserved.</div>
  </footer>`;
  const target = document.getElementById('site-footer');
  if (target) target.innerHTML = footerHtml;
  if (!document.querySelector('script[src*="cookies.js"]')) {
    var s = document.createElement('script');
    s.src = base + 'js/cookies.js';
    var p = document.createElement('script');
    p.src = base + 'js/polish.js';
    document.body.appendChild(p);
    document.body.appendChild(s);
  }
})();
