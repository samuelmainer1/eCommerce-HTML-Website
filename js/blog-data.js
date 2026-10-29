const BLOG_POSTS = [
  {
    id: 'b1',
    title: 'BigDrop expands same-week delivery in Nairobi',
    date: '21 Aug 2026',
    category: 'Logistics',
    excerpt: 'More logistics partners mean many Nairobi orders now arrive within 1–3 days.',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=450&fit=crop',
    body: `<p>We are working with more logistics partners so many Nairobi orders arrive within 1–3 days. Upcountry delivery remains 2–5 business days depending on location.</p>
    <p>Customers can track every order with the tracking number issued at checkout. Our goal is simple: fewer delays and clearer communication from order to doorstep.</p>
    <p>If you are outside Nairobi, you still get reliable delivery — we are expanding coverage town by town through trusted partners.</p>`
  },
  {
    id: 'b2',
    title: 'How to sell on BigDrop: a quick guide for new vendors',
    date: '15 Aug 2026',
    category: 'Sellers',
    excerpt: 'Register, post clear photos, wait for approval, then start receiving orders.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
    body: `<p>Register as a vendor, post clear product photos and descriptions, wait for admin approval, then start receiving orders.</p>
    <p><strong>Tips that work:</strong></p>
    <ul><li>Use real product photos, not screenshots</li><li>Set honest stock levels</li><li>Price competitively for the Kenyan market</li><li>Respond quickly when customers order</li></ul>
    <p>BigDrop handles the storefront; you focus on great products and fulfilment.</p>`
  },
  {
    id: 'b3',
    title: 'Black Friday early preview on BigDrop',
    date: '5 Aug 2026',
    category: 'Deals',
    excerpt: 'Phones, TVs and home appliances will lead our Black Friday deals.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=450&fit=crop',
    body: `<p>Phones, TVs and home appliances will lead our Black Friday deals. Follow the Black Friday page and subscribe to the newsletter so you don’t miss flash sales.</p>
    <p>Last year, early shoppers secured the best stock. We recommend saving items to your wishlist and checking flash sales from morning hours.</p>`
  },
  {
    id: 'b4',
    title: 'Pay on Delivery still available across Kenya',
    date: '28 Jul 2026',
    category: 'Payments',
    excerpt: 'COD remains available on selected orders alongside M-Pesa and cards.',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=450&fit=crop',
    body: `<p>Prefer to pay when your parcel arrives? Cash on Delivery remains available on selected orders and locations, alongside M-Pesa and card payments.</p>
    <p>Buyer Protection still applies: if something is wrong with your order, contact support with your order ID and tracking number.</p>`
  },
  {
    id: 'b5',
    title: '5 tips for buying a smartphone on a budget',
    date: '20 Jul 2026',
    category: 'Guides',
    excerpt: 'Battery, display, camera and warranty — what actually matters under KSh 20,000.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=450&fit=crop',
    body: `<p>Under KSh 20,000 you can still get a solid daily driver. Focus on:</p>
    <ul><li>Battery of 5000mAh or more</li><li>At least 4GB RAM (8GB extended is a plus)</li><li>Clear return policy from the seller</li><li>Warranty of 12 months where possible</li></ul>
    <p>Compare listings on BigDrop, check ratings, and use filters for price and category.</p>`
  },
  {
    id: 'b6',
    title: 'Why verified vendors matter for online shoppers',
    date: '12 Jul 2026',
    category: 'Trust',
    excerpt: 'Every seller on BigDrop goes through approval before products go live.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=450&fit=crop',
    body: `<p>Every seller on BigDrop goes through registration and product approval before items go live on the storefront.</p>
    <p>That does not eliminate every risk, but it raises the bar: fake listings are harder, and admins can act on reports quickly.</p>`
  },
  {
    id: 'b7',
    title: 'Home office essentials under KSh 5,000',
    date: '1 Jul 2026',
    category: 'Guides',
    excerpt: 'Kettles, lamps, organisers and small gadgets that make work-from-home easier.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=450&fit=crop',
    body: `<p>You don’t need a big budget to improve your desk setup. Look for a good desk lamp, cable organisers, a reliable kettle, and a comfortable mouse or keyboard combo.</p>
    <p>Browse the Home and Electronics categories on BigDrop and sort by price to stay within budget.</p>`
  },
  {
    id: 'b8',
    title: 'How order tracking works on BigDrop',
    date: '18 Jun 2026',
    category: 'Logistics',
    excerpt: 'From Ordered to Delivered — what each status means for you.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=450&fit=crop',
    body: `<p>After checkout you receive an Order ID and Tracking Number.</p>
    <ul><li><strong>Ordered</strong> – we received your order</li><li><strong>Processing</strong> – seller is preparing it</li><li><strong>Shipped</strong> – on the way</li><li><strong>Delivered</strong> – completed</li></ul>
    <p>Use the Track Order page anytime with your tracking number.</p>`
  },
  {
    id: 'b9',
    title: 'Meet the team: building e-commerce for Kenya',
    date: '5 Jun 2026',
    category: 'Company',
    excerpt: 'A note from our sales and partnerships team on why BigDrop exists.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop',
    body: `<p>BigDrop Kenya exists to connect buyers and sellers across the country with a simple, trustworthy marketplace.</p>
    <p>From vendor onboarding to customer support, our team focuses on clear prices, genuine products and delivery you can follow.</p>
    <p>Questions? Reach us on info@bigdrop.co.ke or +254 722 359 298.</p>`
  }
];

function getBlogPost(id) {
  return BLOG_POSTS.find(p => p.id === id);
}
