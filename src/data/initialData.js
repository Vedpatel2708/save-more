export const initialStores = [
    { id: 1, name: "Fresh Mart - Vastrapur", lat: 23.0365, lng: 72.5245, address: "Vastrapur, Ahmedabad", owner: "store1@example.com" },
    { id: 2, name: "Quick Stop - SG Highway", lat: 23.0225, lng: 72.5714, address: "SG Highway, Ahmedabad", owner: "store2@example.com" },
    { id: 3, name: "Daily Needs - Satellite", lat: 23.0258, lng: 72.5066, address: "Satellite, Ahmedabad", owner: "store3@example.com" },
    { id: 4, name: "Express Grocery - Maninagar", lat: 22.9988, lng: 72.6064, address: "Maninagar, Ahmedabad", owner: "store4@example.com" },
    { id: 5, name: "SaveMore Store - Bopal", lat: 23.0395, lng: 72.4638, address: "Bopal, Ahmedabad", owner: "store5@example.com" }
  ];
  
  export const initialProducts = [
    { id: 1, storeId: 1, name: "Amul Fresh Milk", category: "Dairy", originalPrice: 60, discountPrice: 40, expiry: "2025-11-24", discount: 33, image: "🥛", stock: 15 },
    { id: 2, storeId: 1, name: "Parle-G Biscuits", category: "Biscuits", originalPrice: 30, discountPrice: 20, expiry: "2025-11-25", discount: 33, image: "🍪", stock: 25 },
    { id: 3, storeId: 1, name: "White Bread Loaf", category: "Breads", originalPrice: 40, discountPrice: 25, expiry: "2025-11-24", discount: 38, image: "🍞", stock: 10 },
    { id: 4, storeId: 2, name: "Dairy Milk Chocolate", category: "Chocolates", originalPrice: 50, discountPrice: 30, expiry: "2025-11-26", discount: 40, image: "🍫", stock: 20 },
    { id: 5, storeId: 2, name: "Amul Butter", category: "Dairy", originalPrice: 55, discountPrice: 35, expiry: "2025-11-25", discount: 36, image: "🧈", stock: 12 },
    { id: 6, storeId: 3, name: "Mother Dairy Curd", category: "Dairy", originalPrice: 25, discountPrice: 15, expiry: "2025-11-24", discount: 40, image: "🥛", stock: 18 },
    { id: 7, storeId: 3, name: "Britannia Marie", category: "Biscuits", originalPrice: 35, discountPrice: 22, expiry: "2025-11-27", discount: 37, image: "🍪", stock: 30 },
    { id: 8, storeId: 4, name: "Brown Bread", category: "Breads", originalPrice: 45, discountPrice: 28, expiry: "2025-11-24", discount: 38, image: "🍞", stock: 8 },
    { id: 9, storeId: 4, name: "KitKat Chocolate", category: "Chocolates", originalPrice: 40, discountPrice: 24, expiry: "2025-11-25", discount: 40, image: "🍫", stock: 22 },
    { id: 10, storeId: 5, name: "Amul Cheese Slice", category: "Dairy", originalPrice: 120, discountPrice: 75, expiry: "2025-11-26", discount: 38, image: "🧀", stock: 14 },
  ];
  
  export const categories = ['All', 'Dairy', 'Biscuits', 'Breads', 'Chocolates'];