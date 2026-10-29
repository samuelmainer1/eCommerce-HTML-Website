# BigDrop Kenya – Multi-Vendor E-Commerce Demo

A fully functional **front-end demo** of a Jumia-style multi-vendor marketplace for Kenya.

## Features

### Customers
- Browse products by category or search
- Flash sales section with countdown
- Add to cart, update quantities, checkout (demo)
- Responsive design

### Vendors
- Register / Login
- Post new products (go into **pending** status)
- View own products and their approval status

### Admin
- Login to dashboard
- See overview stats (vendors, products, pending)
- Approve or reject vendor-submitted products
- View all registered vendors

## Demo Accounts

| Role     | Email                     | Password    |
|----------|---------------------------|-------------|
| Admin    | admin@markethub.ke        | admin123    |
| Customer | customer@example.com      | customer123 |
| Vendor 1 | vendor1@example.com       | vendor123   |
| Vendor 2 | vendor2@example.com       | vendor123   |
| Vendor 3 | vendor3@example.com       | vendor123   |

## How to Run

1. Unzip the folder
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari)
3. Everything runs **locally** using `localStorage` – no server required

> **Note**: This is a pure front-end demo. Data is stored in the browser’s localStorage. Clearing browser data will reset everything to the seed data.

## Project Structure

```
ecom-marketplace/
├── index.html          → Homepage / product listing
├── cart.html           → Shopping cart
├── login.html          → Customer / Admin / Vendor login
├── css/style.css       → All styles
├── js/
│   ├── data.js         → Data layer + localStorage
│   └── app.js          → Shared UI helpers
├── vendor/
│   ├── register.html
│   ├── login.html
│   ├── dashboard.html
│   └── post-product.html
└── admin/
    ├── login.html
    └── dashboard.html
```

## Important

This is an **original demo** inspired by the general structure of e-commerce marketplaces.  
It is **not** a copy of Jumia or any other commercial website.

Created with ❤️ for demonstration purposes.
