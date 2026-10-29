// BigDrop Kenya - Initial Mock Data & Storage Helpers

const STORAGE_KEYS = {
  products: 'mh_products',
  vendors: 'mh_vendors',
  users: 'mh_users',
  cart: 'mh_cart',
  currentUser: 'mh_currentUser',
  orders: 'mh_orders',
  wishlist: 'mh_wishlist'
};

// Default seed data (only used on first load)
// Using high-quality Unsplash images for a professional look
const SEED_PRODUCTS = [
  // ===== PHONES =====
  {
    id: 'p1',
    title: 'Samsung Galaxy A16 4GB/128GB Dual SIM',
    price: 18699,
    oldPrice: 24999,
    category: 'Phones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 128,
    vendorId: 'v1',
    status: 'approved',
    stock: 45,
    description: '6.7" HD+ display, 50MP camera, 5000mAh battery, Dual SIM.'
  },
  {
    id: 'p5',
    title: 'Redmi 15C 8GB Extended / 128GB',
    price: 15330,
    oldPrice: 18999,
    category: 'Phones',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop',
    rating: 4.4,
    reviews: 95,
    vendorId: 'v3',
    status: 'approved',
    stock: 30,
    description: '6.9" large display, 6000mAh battery, dual SIM, great value.'
  },
  {
    id: 'p9',
    title: 'Infinix Smart 20 8GB/128GB',
    price: 16160,
    oldPrice: 17999,
    category: 'Phones',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=400&fit=crop',
    rating: 4.3,
    reviews: 71,
    vendorId: 'v3',
    status: 'pending',
    stock: 25,
    description: '6.67" display, 5200mAh, 4G Dual SIM.'
  },
  {
    id: 'p13',
    title: 'Tecno Spark 50 4GB/128GB',
    price: 18999,
    oldPrice: 21999,
    category: 'Phones',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
    rating: 4.2,
    reviews: 54,
    vendorId: 'v3',
    status: 'approved',
    stock: 38,
    description: '6.78" 120Hz display, 50MP camera, 6700mAh battery.'
  },
  {
    id: 'p14',
    title: 'Oppo A5 6GB/128GB 45W SUPERVOOC',
    price: 22256,
    oldPrice: 25999,
    category: 'Phones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&sat=-20',
    rating: 4.6,
    reviews: 87,
    vendorId: 'v1',
    status: 'approved',
    stock: 22,
    description: '6.67" display, IP65, 6000mAh, fast 45W charging.'
  },
  {
    id: 'p15',
    title: 'Nokia 2720 Flip 4G Feature Phone',
    price: 2471,
    oldPrice: 3500,
    category: 'Phones',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop',
    rating: 4.0,
    reviews: 112,
    vendorId: 'v3',
    status: 'approved',
    stock: 90,
    description: 'Classic flip design, long battery life, 4G dual SIM.'
  },
  {
    id: 'p16',
    title: 'Samsung Galaxy A07 4GB/64GB',
    price: 14360,
    oldPrice: 16999,
    category: 'Phones',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop',
    rating: 4.3,
    reviews: 63,
    vendorId: 'v1',
    status: 'approved',
    stock: 50,
    description: '6.7" display, 5000mAh, reliable everyday phone.'
  },

  // ===== TVs =====
  {
    id: 'p2',
    title: 'Vitron 43" Smart Android QLED TV',
    price: 19599,
    oldPrice: 26999,
    category: 'TVs',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
    rating: 4.3,
    reviews: 89,
    vendorId: 'v1',
    status: 'approved',
    stock: 20,
    description: 'Full HD, Bluetooth, Wi-Fi, Netflix & YouTube ready.'
  },
  {
    id: 'p6',
    title: 'Hisense 55" 4K QLED Smart TV',
    price: 43800,
    oldPrice: 59999,
    category: 'TVs',
    image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 42,
    vendorId: 'v1',
    status: 'approved',
    stock: 12,
    description: 'Vidaa OS, Wi-Fi, stunning 4K picture quality.'
  },
  {
    id: 'p17',
    title: 'Amtec 32" Frameless Android LED Smart TV',
    price: 11299,
    oldPrice: 14999,
    category: 'TVs',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop',
    rating: 4.1,
    reviews: 76,
    vendorId: 'v1',
    status: 'approved',
    stock: 35,
    description: '32 inch, Bluetooth, Netflix, YouTube, wall-mount ready.'
  },
  {
    id: 'p18',
    title: 'TCL 55" 4K HDR Google TV',
    price: 40200,
    oldPrice: 49999,
    category: 'TVs',
    image: 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 38,
    vendorId: 'v1',
    status: 'approved',
    stock: 10,
    description: 'Google TV, Dolby Vision, voice remote, 4K HDR.'
  },
  {
    id: 'p19',
    title: 'Vitron 32" QLED Smart Android TV + Free Gifts',
    price: 13095,
    oldPrice: 17999,
    category: 'TVs',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop&sat=-30',
    rating: 4.2,
    reviews: 91,
    vendorId: 'v1',
    status: 'approved',
    stock: 28,
    description: 'QLED, Bluetooth, Wi-Fi, comes with wall bracket & accessories.'
  },

  // ===== ELECTRONICS / COMPUTING =====
  {
    id: 'p10',
    title: 'Wireless Bluetooth Earbuds Pro',
    price: 395,
    oldPrice: 799,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    rating: 4.2,
    reviews: 188,
    vendorId: 'v2',
    status: 'pending',
    stock: 100,
    description: 'Long battery life, clear sound, comfortable fit.'
  },
  {
    id: 'p11',
    title: 'HP Pavilion 15 Laptop 8GB/512GB SSD',
    price: 52999,
    oldPrice: 64999,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 64,
    vendorId: 'v1',
    status: 'approved',
    stock: 15,
    description: 'Intel Core i5, 15.6" Full HD, Windows 11, fast SSD.'
  },
  {
    id: 'p20',
    title: '20000mAh Dual USB Power Bank Fast Charge',
    price: 670,
    oldPrice: 1299,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f0ffd3a?w=400&h=400&fit=crop',
    rating: 4.4,
    reviews: 210,
    vendorId: 'v3',
    status: 'approved',
    stock: 120,
    description: 'USB-A & USB-C, fast charging, compact design.'
  },
  {
    id: 'p21',
    title: 'Type-C 8-in-1 USB Hub Docking Station',
    price: 921,
    oldPrice: 1800,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop',
    rating: 4.3,
    reviews: 45,
    vendorId: 'v1',
    status: 'approved',
    stock: 55,
    description: 'HDMI, USB 3.0, Ethernet, SD card reader, perfect for laptops.'
  },
  {
    id: 'p22',
    title: 'Wireless Mouse & Keyboard Combo',
    price: 1499,
    oldPrice: 2499,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
    rating: 4.1,
    reviews: 78,
    vendorId: 'v1',
    status: 'approved',
    stock: 40,
    description: 'Quiet keys, long battery life, plug-and-play USB receiver.'
  },
  {
    id: 'p23',
    title: 'External 1TB Portable Hard Drive',
    price: 5499,
    oldPrice: 7999,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 33,
    vendorId: 'v1',
    status: 'approved',
    stock: 25,
    description: 'USB 3.0, compact, reliable storage for backups and media.'
  },

  // ===== FASHION =====
  {
    id: 'p7',
    title: 'Men\'s Soft Cotton Boxers 6-Pack',
    price: 497,
    oldPrice: 750,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop',
    rating: 4.1,
    reviews: 203,
    vendorId: 'v2',
    status: 'approved',
    stock: 200,
    description: 'Comfortable multicolor pack, sizes 28-32.'
  },
  {
    id: 'p12',
    title: 'Women\'s Casual Summer Dress',
    price: 1299,
    oldPrice: 2499,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f0229e56bb?w=400&h=400&fit=crop',
    rating: 4.4,
    reviews: 97,
    vendorId: 'v2',
    status: 'approved',
    stock: 40,
    description: 'Light, breathable fabric, perfect for warm weather.'
  },
  {
    id: 'p24',
    title: 'Men\'s Slim Fit Chino Pants',
    price: 1899,
    oldPrice: 3200,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop',
    rating: 4.3,
    reviews: 56,
    vendorId: 'v2',
    status: 'approved',
    stock: 65,
    description: 'Stretch fabric, multiple colours, office & casual wear.'
  },
  {
    id: 'p25',
    title: 'Unisex Canvas Sneakers',
    price: 1599,
    oldPrice: 2800,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 142,
    vendorId: 'v2',
    status: 'approved',
    stock: 80,
    description: 'Comfortable everyday sneakers, durable sole.'
  },
  {
    id: 'p26',
    title: 'Women\'s Crossbody Handbag',
    price: 2199,
    oldPrice: 3999,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
    rating: 4.4,
    reviews: 67,
    vendorId: 'v2',
    status: 'approved',
    stock: 35,
    description: 'Stylish, spacious, adjustable strap, multiple colours.'
  },
  {
    id: 'p27',
    title: 'Men\'s Formal Leather Belt',
    price: 799,
    oldPrice: 1400,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=400&h=400&fit=crop',
    rating: 4.2,
    reviews: 89,
    vendorId: 'v2',
    status: 'approved',
    stock: 100,
    description: 'Genuine look leather, classic buckle, sizes 30-40.'
  },

  // ===== HOME & OFFICE =====
  {
    id: 'p4',
    title: '2L Stainless Steel Electric Kettle 1500W',
    price: 480,
    oldPrice: 890,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop',
    rating: 4.2,
    reviews: 67,
    vendorId: 'v2',
    status: 'approved',
    stock: 80,
    description: 'Fast boil, auto shut-off, boil-dry protection.'
  },
  {
    id: 'p8',
    title: 'Solar Motion Sensor Flood Light (3 Heads)',
    price: 990,
    oldPrice: 1990,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=400&fit=crop',
    rating: 4.0,
    reviews: 55,
    vendorId: 'v3',
    status: 'approved',
    stock: 60,
    description: 'Outdoor security light with remote control.'
  },
  {
    id: 'p28',
    title: 'Hot & Normal Water Dispenser',
    price: 2399,
    oldPrice: 4500,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400&h=400&fit=crop',
    rating: 4.3,
    reviews: 41,
    vendorId: 'v2',
    status: 'approved',
    stock: 25,
    description: 'Table-top water dispenser, hot & room temperature.'
  },
  {
    id: 'p29',
    title: 'Dry Iron 1000W Non-Stick Soleplate',
    price: 650,
    oldPrice: 1100,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop',
    rating: 4.1,
    reviews: 98,
    vendorId: 'v2',
    status: 'approved',
    stock: 70,
    description: 'Lightweight, temperature control, ideal for everyday ironing.'
  },
  {
    id: 'p30',
    title: '6-Piece Stainless Steel Cookware Set',
    price: 3199,
    oldPrice: 5500,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1584990347449-a8d510a2ad08?w=400&h=400&fit=crop',
    rating: 4.4,
    reviews: 52,
    vendorId: 'v2',
    status: 'approved',
    stock: 30,
    description: 'Pots and pans set with lids, durable stainless steel.'
  },
  {
    id: 'p31',
    title: 'Modern LED TV Stand with Cabinets',
    price: 7299,
    oldPrice: 11999,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 29,
    vendorId: 'v2',
    status: 'approved',
    stock: 12,
    description: 'Stylish TV unit with storage, fits up to 55" TVs.'
  },
  {
    id: 'p32',
    title: 'Rechargeable Digital Bathroom Scale',
    price: 1032,
    oldPrice: 1800,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop',
    rating: 4.3,
    reviews: 74,
    vendorId: 'v2',
    status: 'approved',
    stock: 45,
    description: 'Body fat, BMI, multi-user, smartphone app support.'
  },

  // ===== BEAUTY & HEALTH =====
  {
    id: 'p3',
    title: 'NIVEA UV Sunscreen Face Cream SPF 50 40ml',
    price: 849,
    oldPrice: 1200,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 312,
    vendorId: 'v2',
    status: 'approved',
    stock: 150,
    description: 'Shine control, protects against UV rays.'
  },
  {
    id: 'p33',
    title: 'Vitamin C Brightening Face Serum 30ml',
    price: 1138,
    oldPrice: 1750,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 185,
    vendorId: 'v2',
    status: 'approved',
    stock: 90,
    description: 'Fades dark marks, evens skin tone, with Niacinamide.'
  },
  {
    id: 'p34',
    title: 'Moisturising Body Lotion 400ml',
    price: 650,
    oldPrice: 950,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 220,
    vendorId: 'v2',
    status: 'approved',
    stock: 110,
    description: 'Deep hydration for dry skin, non-greasy formula.'
  },
  {
    id: 'p35',
    title: 'Men\'s Bearded Oil & Grooming Kit',
    price: 1299,
    oldPrice: 2200,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop',
    rating: 4.4,
    reviews: 48,
    vendorId: 'v2',
    status: 'approved',
    stock: 40,
    description: 'Nourishing beard oil, comb and scissors set.'
  },
  {
    id: 'p36',
    title: 'Electric Fabric Lint Remover / Shaver',
    price: 590,
    oldPrice: 1200,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop&sat=-40',
    rating: 4.2,
    reviews: 61,
    vendorId: 'v2',
    status: 'approved',
    stock: 75,
    description: 'Cordless, USB rechargeable, keeps clothes looking new.'
  },

  // ===== FOOD =====
  {
    id: 'p37',
    title: 'Java House Gourmet Coffee Beans 500g',
    category: 'Food',
    price: 1299,
    oldPrice: 1599,
    stock: 80,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop',
    description: 'Freshly roasted gourmet coffee beans. Rich aroma perfect for home brewing.',
    vendorId: 'v1',
    status: 'approved',
    rating: 4.7,
    reviews: 210
  },
  {
    id: 'p38',
    title: 'Tropikal Mango Juice Pack 6x1L',
    category: 'Food',
    price: 899,
    oldPrice: 1100,
    stock: 120,
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d2723622?w=400&h=400&fit=crop',
    description: 'Refreshing pure mango juice. No artificial colours. Ideal for family sharing.',
    vendorId: 'v2',
    status: 'approved',
    rating: 4.5,
    reviews: 156
  },
  {
    id: 'p39',
    title: 'Premium Kenyan Tea Bags 100s',
    category: 'Food',
    price: 450,
    oldPrice: null,
    stock: 200,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop',
    description: 'Classic Kenyan black tea bags. Strong flavour for everyday mornings.',
    vendorId: 'v1',
    status: 'approved',
    rating: 4.6,
    reviews: 340
  },
  {
    id: 'p40',
    title: 'Assorted Biscuits Gift Tin 500g',
    category: 'Food',
    price: 799,
    oldPrice: 999,
    stock: 60,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop',
    description: 'Assorted sweet biscuits in a reusable tin. Great for gifting or tea time.',
    vendorId: 'v2',
    status: 'approved',
    rating: 4.4,
    reviews: 98
  },
  {
    id: 'p41',
    title: 'Organic Honey 500g Squeeze Bottle',
    category: 'Food',
    price: 650,
    oldPrice: 750,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop',
    description: 'Pure natural honey. Perfect for tea, baking or breakfast spreads.',
    vendorId: 'v1',
    status: 'approved',
    rating: 4.8,
    reviews: 275
  },
  {
    id: 'p42',
    title: 'Bluetooth Noise-Cancel Earphones Pro',
    category: 'Electronics',
    price: 3499,
    oldPrice: 4999,
    stock: 45,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    description: 'Wireless earphones with active noise cancellation and long battery life.',
    vendorId: 'v2',
    status: 'approved',
    rating: 4.5,
    reviews: 188
  },
  {
    id: 'p43',
    title: 'CeraVe Moisturising Cream 340g',
    category: 'Beauty',
    price: 1899,
    oldPrice: 2299,
    stock: 55,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
    description: 'CeraVe Moisturising Cream with 3 essential ceramides and hyaluronic acid. Developed with dermatologists for dry skin.',
    vendorId: 'v1',
    status: 'approved',
    rating: 4.8,
    reviews: 420
  },
  {
    id: 'p44',
    title: 'Lubriderm Daily Moisture Lotion 473ml',
    category: 'Beauty',
    price: 1299,
    oldPrice: 1599,
    stock: 70,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=400&h=400&fit=crop',
    description: 'Lubriderm Daily Moisture Lotion. Lightweight, non-greasy formula that hydrates skin all day.',
    vendorId: 'v2',
    status: 'approved',
    rating: 4.6,
    reviews: 185
  },
  {
    id: 'p45',
    title: 'Himalayan Pink Salt Fine 1kg',
    category: 'Food',
    price: 499,
    oldPrice: 650,
    stock: 100,
    image: 'https://images.unsplash.com/photo-1518110925495-5fe2ffc8c3f4?w=400&h=400&fit=crop',
    description: 'Pure Himalayan pink salt. Natural mineral-rich seasoning for cooking and finishing dishes.',
    vendorId: 'v1',
    status: 'approved',
    rating: 4.7,
    reviews: 260
  },
  {
    id: 'p46',
    title: 'Dove Deep Moisture Body Wash 720ml',
    category: 'Beauty',
    price: 799,
    oldPrice: 999,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=400&fit=crop',
    description: 'Dove Deep Moisture Body Wash with Moisture Renew Blend. Gently cleanses and nourishes dry skin.',
    vendorId: 'v2',
    status: 'approved',
    rating: 4.7,
    reviews: 512
  },
  {
    id: 'p47',
    title: 'Dove Sensitive Skin Beauty Bar 6-Pack',
    category: 'Beauty',
    price: 699,
    oldPrice: 850,
    stock: 110,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d223765ee?w=400&h=400&fit=crop',
    description: 'Dove Sensitive Skin Beauty Bar. Hypoallergenic, fragrance-free, 1/4 moisturising cream.',
    vendorId: 'v1',
    status: 'approved',
    rating: 4.8,
    reviews: 390
  },
  {
    id: 'p48',
    title: 'Ziploc Storage Bags Variety Pack',
    category: 'Home',
    price: 899,
    oldPrice: 1100,
    stock: 75,
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=400&fit=crop',
    description: 'Ziploc storage bags variety pack. Durable seal for food storage and organisation at home.',
    vendorId: 'v2',
    status: 'approved',
    rating: 4.5,
    reviews: 145
  },
  {
    id: 'p49',
    title: 'PAM Original No-Stick Cooking Spray 170g',
    category: 'Food',
    price: 549,
    oldPrice: 699,
    stock: 85,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop',
    description: 'PAM Original no-stick cooking spray. For baking, grilling and frying with less oil mess.',
    vendorId: 'v1',
    status: 'approved',
    rating: 4.6,
    reviews: 178
  },
  {
    id: 'p50',
    title: 'Sazon Goya Seasoning 20 Packets',
    category: 'Food',
    price: 399,
    oldPrice: 499,
    stock: 130,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop',
    description: 'Sazon Goya seasoning packets. Classic Latin flavour blend for meats, rice and stews.',
    vendorId: 'v2',
    status: 'approved',
    rating: 4.7,
    reviews: 220
  },
  {
    id: 'p51',
    title: "L'Oréal Paris Revitalift Day Cream 50ml",
    category: 'Beauty',
    price: 2499,
    oldPrice: 2999,
    stock: 40,
    image: 'https://images.unsplash.com/photo-1620916568953-3d5e6f3f0c8a?w=400&h=400&fit=crop',
    description: "L'Oréal Paris Revitalift anti-wrinkle + firming day cream with Pro-Retinol.",
    vendorId: 'v1',
    status: 'approved',
    rating: 4.6,
    reviews: 310
  },
  {
    id: 'p52',
    title: "L'Oréal Paris Age Perfect Golden Age Rosy Cream",
    category: 'Beauty',
    price: 2799,
    oldPrice: 3299,
    stock: 35,
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop',
    description: "L'Oréal Age Perfect Golden Age rosy re-fortifying cream for mature skin.",
    vendorId: 'v2',
    status: 'approved',
    rating: 4.5,
    reviews: 198
  },
  {
    id: 'p53',
    title: 'No7 Protect & Perfect Intense Advanced Serum 30ml',
    category: 'Beauty',
    price: 3199,
    oldPrice: 3799,
    stock: 30,
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop',
    description: 'No7 Protect & Perfect Intense Advanced Serum. Clinically proven anti-ageing serum.',
    vendorId: 'v1',
    status: 'approved',
    rating: 4.7,
    reviews: 265
  },
  {
    id: 'p54',
    title: 'No7 Beautiful Skin Day Cream Normal/Dry 50ml',
    category: 'Beauty',
    price: 1899,
    oldPrice: 2299,
    stock: 42,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop',
    description: 'No7 Beautiful Skin Day Cream for normal to dry skin. Hydrates and smooths daily.',
    vendorId: 'v2',
    status: 'approved',
    rating: 4.4,
    reviews: 152
  },
  {
    id: 'p55', title: 'Tecno Spark 30C 4GB/128GB', category: 'Phones', price: 12999, oldPrice: 14999, stock: 40,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    description: 'Affordable smartphone with large display and long battery life.',
    vendorId: 'v1', status: 'approved', rating: 4.3, reviews: 95
  },
  {
    id: 'p56', title: 'Infinix Hot 40i 4GB/128GB', category: 'Phones', price: 13999, oldPrice: 15999, stock: 35,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
    description: 'Stylish phone with smooth performance for everyday use.',
    vendorId: 'v2', status: 'approved', rating: 4.4, reviews: 112
  },
  {
    id: 'p57', title: 'Samsung Galaxy Tab A9 8.7"', category: 'Phones', price: 18999, oldPrice: 21999, stock: 25,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    description: 'Compact Android tablet for streaming, study and entertainment.',
    vendorId: 'v1', status: 'approved', rating: 4.5, reviews: 78
  },
  {
    id: 'p58', title: 'Hisense 43" Smart LED TV', category: 'TVs', price: 28999, oldPrice: 34999, stock: 20,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
    description: 'Full HD smart TV with built-in apps and clear picture quality.',
    vendorId: 'v2', status: 'approved', rating: 4.4, reviews: 140
  },
  {
    id: 'p59', title: 'TCL 32" HD LED TV', category: 'TVs', price: 16999, oldPrice: 19999, stock: 30,
    image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400&h=400&fit=crop',
    description: 'Compact HD TV ideal for bedrooms and small living rooms.',
    vendorId: 'v1', status: 'approved', rating: 4.2, reviews: 88
  },
  {
    id: 'p60', title: 'Samsung 55" Crystal UHD 4K Smart TV', category: 'TVs', price: 79999, oldPrice: 89999, stock: 12,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop',
    description: 'Immersive 4K Crystal UHD with smart streaming features.',
    vendorId: 'v2', status: 'approved', rating: 4.7, reviews: 210
  },
  {
    id: 'p61', title: 'LG 50" 4K UHD Smart TV', category: 'TVs', price: 64999, oldPrice: 72999, stock: 15,
    image: 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=400&h=400&fit=crop',
    description: 'Vibrant 4K display with webOS smart platform.',
    vendorId: 'v1', status: 'approved', rating: 4.6, reviews: 165
  },
  {
    id: 'p62', title: 'Vitron 24" LED TV', category: 'TVs', price: 9999, oldPrice: 11999, stock: 40,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop&sat=-20',
    description: 'Budget-friendly LED TV for clear everyday viewing.',
    vendorId: 'v2', status: 'approved', rating: 4.1, reviews: 70
  },
  {
    id: 'p63', title: 'HP Wireless Mouse 200', category: 'Electronics', price: 1499, oldPrice: 1999, stock: 80,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
    description: 'Reliable wireless mouse for office and home use.',
    vendorId: 'v1', status: 'approved', rating: 4.3, reviews: 190
  },
  {
    id: 'p64', title: 'Logitech USB Keyboard K120', category: 'Electronics', price: 2499, oldPrice: 2999, stock: 60,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
    description: 'Full-size durable USB keyboard for everyday typing.',
    vendorId: 'v2', status: 'approved', rating: 4.5, reviews: 155
  },
  {
    id: 'p65', title: 'Anker PowerCore 20000mAh Power Bank', category: 'Electronics', price: 4499, oldPrice: 5499, stock: 50,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f0ffd3a?w=400&h=400&fit=crop',
    description: 'High-capacity portable charger for phones and tablets.',
    vendorId: 'v1', status: 'approved', rating: 4.7, reviews: 320
  },
  {
    id: 'p66', title: 'Men Slim Fit Chino Pants', category: 'Fashion', price: 1999, oldPrice: 2499, stock: 45,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop',
    description: 'Comfortable slim-fit chinos for smart casual wear.',
    vendorId: 'v2', status: 'approved', rating: 4.3, reviews: 67
  },
  {
    id: 'p67', title: 'Women Casual Sneakers', category: 'Fashion', price: 2499, oldPrice: 2999, stock: 55,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop',
    description: 'Lightweight casual sneakers for everyday comfort.',
    vendorId: 'v1', status: 'approved', rating: 4.4, reviews: 102
  },
  {
    id: 'p68', title: 'Unisex Classic Cap', category: 'Fashion', price: 799, oldPrice: 999, stock: 100,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop',
    description: 'Adjustable classic cap for sun protection and style.',
    vendorId: 'v2', status: 'approved', rating: 4.2, reviews: 54
  },
  {
    id: 'p69', title: 'Leather Belt for Men', category: 'Fashion', price: 1299, oldPrice: 1599, stock: 70,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=400&h=400&fit=crop',
    description: 'Genuine-look leather belt with durable buckle.',
    vendorId: 'v1', status: 'approved', rating: 4.3, reviews: 81
  },
  {
    id: 'p70', title: 'Electric Kettle 1.7L Stainless Steel', category: 'Home', price: 2199, oldPrice: 2699, stock: 48,
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=400&fit=crop',
    description: 'Fast-boil electric kettle with auto shut-off.',
    vendorId: 'v2', status: 'approved', rating: 4.5, reviews: 175
  },
  {
    id: 'p71', title: 'Maize Flour 2kg Premium', category: 'Food', price: 249, oldPrice: 299, stock: 200,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    description: 'Fine grade maize flour for ugali and baking.',
    vendorId: 'v1', status: 'approved', rating: 4.6, reviews: 410
  },
  {
    id: 'p72', title: 'Cooking Oil 2L Vegetable', category: 'Food', price: 549, oldPrice: 650, stock: 150,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop',
    description: 'Everyday vegetable cooking oil for home kitchens.',
    vendorId: 'v2', status: 'approved', rating: 4.4, reviews: 230
  },
];

const SEED_VENDORS = [
  {
    id: 'v1',
    name: 'TechZone Electronics',
    email: 'vendor1@example.com',
    password: 'vendor123',
    phone: '0712345678',
    shopName: 'TechZone',
    status: 'active',
    joined: '2025-11-12'
  },
  {
    id: 'v2',
    name: 'Home & Beauty Hub',
    email: 'vendor2@example.com',
    password: 'vendor123',
    phone: '0723456789',
    shopName: 'BeautyHome',
    status: 'active',
    joined: '2026-01-05'
  },
  {
    id: 'v3',
    name: 'Phone Palace KE',
    email: 'vendor3@example.com',
    password: 'vendor123',
    phone: '0734567890',
    shopName: 'PhonePalace',
    status: 'active',
    joined: '2026-03-20'
  }
];

const SEED_USERS = [
  {
    id: 'admin1',
    name: 'Admin User',
    email: 'admin@bigdrop.co.ke',
    password: 'admin123',
    role: 'admin'
  },
  {
    id: 'c1',
    name: 'John Doe',
    email: 'customer@example.com',
    password: 'customer123',
    role: 'customer'
  }
];

// Storage helpers
function getFromStorage(key, fallback = []) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}


function enrichSeedProducts(products) {
  return products.map(p => {
    if (p.id === 'p1' && !p.variants) {
      p.variants = [
        { label: 'Black / 128GB', price: p.price },
        { label: 'Blue / 128GB', price: p.price },
        { label: 'Black / 256GB', price: p.price + 3000 }
      ];
      p.images = [p.image, 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop'];
    }
    if (p.id === 'p5' && !p.variants) {
      p.variants = [
        { label: 'Black / 128GB', price: p.price },
        { label: 'Green / 128GB', price: p.price },
        { label: 'Black / 256GB', price: p.price + 2500 }
      ];
      p.images = [p.image, 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=400&fit=crop'];
    }
    if (p.id === 'p12' && !p.variants) {
      p.variants = [
        { label: 'S', price: p.price },
        { label: 'M', price: p.price },
        { label: 'L', price: p.price + 100 },
        { label: 'XL', price: p.price + 200 }
      ];
    }
    if (!p.images) p.images = p.image ? [p.image] : [];
    return p;
  });
}

function initData() {
  // Seed / repair product catalogue
  const enrichedSeed = enrichSeedProducts(SEED_PRODUCTS);
  let existing = getFromStorage(STORAGE_KEYS.products, []);
  // Remove broken null entries
  existing = (existing || []).filter(p => p && p.id && p.title);
  if (!existing.length) {
    saveToStorage(STORAGE_KEYS.products, enrichedSeed);
  } else {
    const existingIds = new Set(existing.map(p => p.id));
    let added = false;
    enrichedSeed.forEach(sp => {
      if (!existingIds.has(sp.id)) {
        existing.push(sp);
        added = true;
      }
    });
    saveToStorage(STORAGE_KEYS.products, existing);
  }

  // Ensure vendors exist
  if (!localStorage.getItem(STORAGE_KEYS.vendors)) {
    saveToStorage(STORAGE_KEYS.vendors, SEED_VENDORS);
  }

  // Always ensure correct admin + demo customer accounts exist
  // (fixes old localStorage with previous emails like admin@markethub.ke)
  let users = getFromStorage(STORAGE_KEYS.users, []);
  const adminEmail = 'admin@bigdrop.co.ke';
  users = users.filter(u => u.role !== 'admin' && u.email !== adminEmail && u.email !== 'admin@markethub.ke');
  users.push({
    id: 'admin1',
    name: 'Admin User',
    email: adminEmail,
    password: 'admin123',
    role: 'admin'
  });
  // Ensure demo customer exists
  if (!users.find(u => u.email === 'customer@example.com')) {
    users.push({
      id: 'c1',
      name: 'John Doe',
      email: 'customer@example.com',
      password: 'customer123',
      role: 'customer'
    });
  }
  saveToStorage(STORAGE_KEYS.users, users);

  if (!localStorage.getItem(STORAGE_KEYS.cart)) {
    saveToStorage(STORAGE_KEYS.cart, []);
  }
  if (!localStorage.getItem(STORAGE_KEYS.orders) && !localStorage.getItem('bd_orders')) {
    saveToStorage(STORAGE_KEYS.orders, []);
  }
}

// Product helpers
function getProducts() {
  return getFromStorage(STORAGE_KEYS.products, []);
}

function getApprovedProducts() {
  return getProducts().filter(p => p.status === 'approved');
}

function getProductById(id) {
  return getProducts().find(p => p.id === id);
}

function saveProducts(products) {
  saveToStorage(STORAGE_KEYS.products, products);
}

function addProduct(product) {
  const products = getProducts();
  products.push(product);
  saveProducts(products);
}

function updateProductStatus(id, status) {
  const products = getProducts();
  const idx = products.findIndex(p => p.id === id);
  if (idx !== -1) {
    products[idx].status = status;
    saveProducts(products);
  }
}

// Vendor helpers
function getVendors() {
  return getFromStorage(STORAGE_KEYS.vendors, []);
}

function getVendorById(id) {
  return getVendors().find(v => v.id === id);
}

function getVendorByEmail(email) {
  return getVendors().find(v => v.email === email);
}

function addVendor(vendor) {
  const vendors = getVendors();
  vendors.push(vendor);
  saveToStorage(STORAGE_KEYS.vendors, vendors);
}

// User / Auth helpers
function getUsers() {
  return getFromStorage(STORAGE_KEYS.users, []);
}

function getCurrentUser() {
  return getFromStorage(STORAGE_KEYS.currentUser, null);
}

function setCurrentUser(user) {
  if (user) {
    saveToStorage(STORAGE_KEYS.currentUser, user);
  } else {
    localStorage.removeItem(STORAGE_KEYS.currentUser);
  }
}

function login(email, password) {
  email = (email || '').trim().toLowerCase();
  password = (password || '').trim();
  const users = getUsers();
  let user = users.find(u => (u.email || '').toLowerCase() === email && u.password === password);
  if (user) {
    setCurrentUser(user);
    return user;
  }
  const vendor = getVendors().find(v => (v.email || '').toLowerCase() === email && v.password === password);
  if (vendor) {
    const vUser = { ...vendor, role: 'vendor' };
    setCurrentUser(vUser);
    return vUser;
  }
  return null;
}

function logout() {
  setCurrentUser(null);
}

// Cart helpers
function getCart() {
  return getFromStorage(STORAGE_KEYS.cart, []);
}

function saveCart(cart) {
  saveToStorage(STORAGE_KEYS.cart, cart);
}

function addToCart(productId, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ productId, qty });
  }
  saveCart(cart);
  updateCartCount();
}

function removeFromCart(productId) {
  let cart = getCart().filter(item => item.productId !== productId);
  saveCart(cart);
  updateCartCount();
}

function updateCartQty(productId, qty) {
  const cart = getCart();
  const item = cart.find(i => i.productId === productId);
  if (item) {
    item.qty = Math.max(1, qty);
    saveCart(cart);
  }
  updateCartCount();
}

function clearCart() {
  saveCart([]);
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
  });
}

// Utility
function formatPrice(num) {
  return 'KSh ' + Number(num).toLocaleString('en-KE');
}

function generateId(prefix) {
  return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

// Wishlist
function getWishlist() {
  return getFromStorage(STORAGE_KEYS.wishlist, []);
}

function toggleWishlist(productId) {
  let list = getWishlist();
  const idx = list.indexOf(productId);
  if (idx === -1) {
    list.push(productId);
    saveToStorage(STORAGE_KEYS.wishlist, list);
    return true; // added
  } else {
    list.splice(idx, 1);
    saveToStorage(STORAGE_KEYS.wishlist, list);
    return false; // removed
  }
}

function isInWishlist(productId) {
  return getWishlist().includes(productId);
}

// Sample reviews generator
function getProductReviews(productId) {
  const names = ['James K.', 'Faith W.', 'Brian O.', 'Mercy N.', 'Peter M.', 'Grace A.', 'Daniel K.', 'Ann W.'];
  const comments = [
    'Excellent product, exactly as described. Fast delivery too!',
    'Good quality for the price. Happy with my purchase.',
    'Works perfectly. Would recommend to friends.',
    'Solid build and great value. Arrived earlier than expected.',
    'Very satisfied. Packaging was neat and product is genuine.',
    'Nice item. Battery life is impressive.',
    'Looks and feels premium. Worth every shilling.',
    'Met my expectations. Will buy again from this seller.'
  ];
  // Deterministic based on product id so same reviews show each time
  const seed = productId.charCodeAt(productId.length - 1) || 1;
  const count = 3 + (seed % 3);
  const reviews = [];
  for (let i = 0; i < count; i++) {
    reviews.push({
      name: names[(seed + i) % names.length],
      rating: 4 + ((seed + i) % 2),
      date: `2026-0${1 + ((seed + i) % 7)}-${10 + i}`,
      comment: comments[(seed + i * 2) % comments.length]
    });
  }
  return reviews;
}



// ===== Site settings (admin) =====
function getDefaultSettings() {
  return {
    phone: '+254 722 359 298',
    email: 'orders@bigdrop.co.ke',
    address: 'Nextgen Mall, 3rd Floor, Suite 39/40, Mombasa Road, Nairobi',
    delivery: 290,
    announce: 'Free delivery on selected orders · Use code BIGDROP10 for 10% off · Pay with M-Pesa',
    announceOn: true,
    maintenance: false
  };
}
function getSettings() {
  try {
    var s = JSON.parse(localStorage.getItem('bd_settings') || 'null');
    return Object.assign({}, getDefaultSettings(), s || {});
  } catch (e) {
    return getDefaultSettings();
  }
}
function saveSettingsObj(s) {
  localStorage.setItem('bd_settings', JSON.stringify(s));
  if (s.delivery != null) localStorage.setItem('bd_delivery_fee', String(s.delivery));
  if (s.announce != null) localStorage.setItem('bd_announce', s.announce);
}

// ===== Brands (admin) =====
function getDefaultBrands() {
  return [
    { id: 'b1', name: 'Samsung', category: 'Phones' },
    { id: 'b2', name: 'Tecno', category: 'Phones' },
    { id: 'b3', name: 'Infinix', category: 'Phones' },
    { id: 'b4', name: 'Apple', category: 'Phones' },
    { id: 'b5', name: 'Hisense', category: 'TVs' },
    { id: 'b6', name: 'TCL', category: 'TVs' },
    { id: 'b7', name: 'LG', category: 'TVs' },
    { id: 'b8', name: 'HP', category: 'Electronics' },
    { id: 'b9', name: 'Dell', category: 'Electronics' },
    { id: 'b10', name: 'CeraVe', category: 'Beauty' },
    { id: 'b11', name: 'Dove', category: 'Beauty' },
    { id: 'b12', name: "L'Oréal", category: 'Beauty' },
    { id: 'b13', name: 'Nike', category: 'Fashion' },
    { id: 'b14', name: 'Adidas', category: 'Fashion' }
  ];
}
function getBrands() {
  try {
    var b = JSON.parse(localStorage.getItem('bd_brands') || 'null');
    if (b && b.length) return b;
  } catch (e) {}
  return getDefaultBrands();
}
function saveBrands(list) {
  localStorage.setItem('bd_brands', JSON.stringify(list));
}
function getBrandsByCategory(cat) {
  var all = getBrands();
  if (!cat) return all;
  return all.filter(function (b) { return b.category === cat; });
}

// ===== Blog CMS =====
function getBlogPosts() {
  try {
    var p = JSON.parse(localStorage.getItem('bd_blog_posts') || 'null');
    if (p && p.length) return p;
  } catch (e) {}
  if (typeof BLOG_POSTS !== 'undefined' && BLOG_POSTS.length) {
    return BLOG_POSTS.map(function (x, i) {
      return {
        id: x.id || ('blog' + i),
        title: x.title,
        summary: x.excerpt || x.summary || '',
        content: x.content || x.excerpt || '',
        image: x.image || '',
        date: x.date || '',
        published: true
      };
    });
  }
  return [
    { id: 'blog1', title: 'Welcome to BigDrop Kenya', summary: 'Your one-stop shop for e-commerce and fulfilment.', content: 'BigDrop Kenya helps vendors sell more while we pick, pack and deliver.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop', date: '2026-08-01', published: true },
    { id: 'blog2', title: 'How pickup at Nextgen Mall works', summary: 'Save on delivery by collecting at our hub.', content: 'Choose pickup at checkout and collect at Nextgen Mall, 3rd Floor.', image: 'https://images.unsplash.com/photo-1556740758-90decb9d1d0e?w=1200&h=400&fit=crop', date: '2026-08-10', published: true }
  ];
}
function getBlogPost(id) {
  if (!id) return null;
  var posts = getBlogPosts();
  var p = posts.find(function (x) { return String(x.id) === String(id); });
  if (!p) return null;
  var text = p.content || p.body || p.summary || '';
  return {
    id: p.id,
    title: p.title,
    summary: p.summary || '',
    content: text,
    body: '<p>' + String(text).replace(/\n/g, '</p><p>') + '</p>',
    image: p.image || '',
    date: p.date || '',
    category: p.category || 'News',
    published: p.published !== false
  };
}
function saveBlogPosts(list) {
  localStorage.setItem('bd_blog_posts', JSON.stringify(list));
}
function getPublishedBlogPosts() {
  return getBlogPosts().filter(function (p) { return p.published !== false; });
}

// ===== Careers CMS =====
function getCareers() {
  try {
    var p = JSON.parse(localStorage.getItem('bd_careers') || 'null');
    if (p && p.length) return p;
  } catch (e) {}
  return [
    { id: 'job1', title: 'Customer Support Agent', department: 'Support', location: 'Nairobi', description: 'Help customers with orders and tracking.', published: true },
    { id: 'job2', title: 'Warehouse Associate', department: 'Operations', location: 'Nextgen Mall', description: 'Pick, pack and prepare orders for delivery.', published: true }
  ];
}
function saveCareers(list) {
  localStorage.setItem('bd_careers', JSON.stringify(list));
}
function getPublishedCareers() {
  return getCareers().filter(function (j) { return j.published !== false; });
}

// Default extra categories seed
function ensureExtraCategories() {
  try {
    var cats = JSON.parse(localStorage.getItem('bd_categories') || 'null');
    if (!cats || !cats.length) {
      cats = ['Phones', 'TVs', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Food', 'Furniture', 'Appliances', 'Gaming', 'Baby', 'Sports'];
      localStorage.setItem('bd_categories', JSON.stringify(cats));
    }
  } catch (e) {}
}
ensureExtraCategories();

// Initialize on load
initData();

