# SaveMore - Expiry Discount Marketplace

> Reducing food waste while saving money. Connect customers with discounted products nearing expiry.

[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.0-61DAFB.svg)](https://reactjs.org)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [File Descriptions](#file-descriptions)
- [Demo Credentials](#demo-credentials)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 Overview

**SaveMore** is a location-based marketplace platform for Ahmedabad, Gujarat that connects grocery stores with customers to sell products nearing expiry at discounted prices.

### Key Highlights
- ✅ Real-time product listings with expiry dates
- ✅ Geolocation-based store mapping
- ✅ Separate portals for Customers and Store Owners
- ✅ Cash on Delivery payment option
- ✅ Mobile-responsive design

---

## 🎯 Features

### For Customers
- **Browse Products** - Search and filter by category, store, and price
- **Geolocation Map** - Find nearby stores with distance calculation
- **Shopping Cart** - Add/remove items, adjust quantities
- **User Profile** - Manage delivery address and contact information
- **Checkout** - Cash on Delivery payment option
- **Transparency** - View expiry dates and savings

### For Store Owners
- **Product Management** - Add, edit, and delete products
- **Dynamic Pricing** - Set discount prices based on expiry dates
- **Inventory Tracking** - Monitor real-time stock levels
- **Store Registration** - Create and manage store profile
- **Dashboard** - View all products in organized table

---

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend framework |
| Tailwind CSS | Styling |
| Lucide React | Icon library |
| JavaScript | Programming language |
| Geolocation API | Location services |

---

## 📁 Project Structure
```
savemore/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductCard.jsx
│   │   ├── AuthModal.jsx
│   │   ├── ProfileModal.jsx
│   │   ├── CheckoutModal.jsx
│   │   └── AddProductModal.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Stores.jsx
│   │   ├── Cart.jsx
│   │   └── ManageProducts.jsx
│   │
│   ├── data.js
│   ├── utils.js
│   ├── App.jsx
│   └── index.js
│
├── package.json
└── README.md
```

---

## 🚀 Installation

### Prerequisites
- Node.js (v14.0+)
- npm or yarn

### Steps
```bash
# Clone repository
git clone https://github.com/Vedpatel2708/savemore.git
cd savemore

# Install dependencies
npm install

# Install required packages
npm install react react-dom lucide-react
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind
npx tailwindcss init -p

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## 💻 Usage

### For Customers

#### 1. Sign Up
1. Click **Login** button
2. Select **Customer** tab
3. Fill in details
4. Click **Sign Up**

#### 2. Complete Profile
- Add phone number
- Add delivery address
- Save profile

#### 3. Browse & Shop
- Navigate to **Products**
- Use search/filters
- Add to cart
- Checkout with COD

### For Store Owners

#### 1. Register Store
1. Click **Login**
2. Select **Store Owner**
3. Enter store details
4. Sign up

#### 2. Manage Products
- Access **Manage Products**
- Click **Add Product**
- Fill product details
- Save

---

## 📄 File Descriptions

### `data.js`
Initial stores and products data
```javascript
export const initialStores = [...]
export const initialProducts = [...]
export const categories = ['All', 'Dairy', 'Biscuits', 'Breads', 'Chocolates']
```

### `utils.js`
Helper functions
```javascript
export const calculateDistance = (lat1, lon1, lat2, lon2) => {...}
export const getDaysUntilExpiry = (expiryDate) => {...}
export const calculateDiscount = (originalPrice, discountPrice) => {...}
```

### Components

| File | Description |
|------|-------------|
| `Header.jsx` | Navigation with cart and user menu |
| `ProductCard.jsx` | Reusable product display card |
| `AuthModal.jsx` | Login/Signup modal |
| `ProfileModal.jsx` | User profile management |
| `CheckoutModal.jsx` | Checkout process |
| `AddProductModal.jsx` | Add product form |

### Pages

| File | Description |
|------|-------------|
| `Home.jsx` | Landing page with map and deals |
| `Products.jsx` | Product listing with filters |
| `Stores.jsx` | Store directory |
| `Cart.jsx` | Shopping cart |
| `ManageProducts.jsx` | Store owner dashboard |

---

## 🔑 Demo Credentials

### Store Owner Accounts

| Email | Password | Store Name |
|-------|----------|------------|
| store1@example.com | any | Fresh Mart - Vastrapur |
| store2@example.com | any | Quick Stop - SG Highway |
| store3@example.com | any | Daily Needs - Satellite |

### Customer
Sign up with any email address

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
```bash
   git checkout -b feature/AmazingFeature
```
3. Commit changes
```bash
   git commit -m 'Add AmazingFeature'
```
4. Push to branch
```bash
   git push origin feature/AmazingFeature
```
5. Open Pull Request

---

## 📝 License

MIT License - see [LICENSE](LICENSE) file

---

## 📧 Contact

**Email:** vedpatel3283@gmail.com  
**Location:** Ahmedabad, Gujarat, India  
**Phone:** +91 9825184700

---

**Built with ❤️ to reduce food waste**

⭐ Star this repo if you find it helpful!
