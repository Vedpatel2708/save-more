import React, { useState, useEffect } from 'react';
import { initialStores, initialProducts, categories } from './data/initialData';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import ProfileModal from './components/ProfileModal';
import CheckoutModal from './components/CheckoutModal';
import AddProductModal from './components/AddProductModal';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import StoresPage from './pages/StoresPage';
import CartPage from './pages/CartPage';
import OrdersPage from './pages/OrdersPage';
import ManageProductsPage from './pages/ManageProductsPage';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [selectedStore, setSelectedStore] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [userLocation, setUserLocation] = useState({ lat: 23.0225, lng: 72.5714 });
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [stores, setStores] = useState(initialStores);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [orders, setOrders] = useState([]);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Dairy',
    originalPrice: '',
    discountPrice: '',
    expiry: '',
    stock: '',
    image: '📦'
  });

  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Ahmedabad',
    pincode: ''
  });

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        () => {
          console.log("Using default Ahmedabad location");
        }
      );
    }
  }, []);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('savemore_user');
    const savedProfile = localStorage.getItem('savemore_profile');
    const savedOrders = localStorage.getItem('savemore_orders');
    const savedProducts = localStorage.getItem('savemore_products');
    const savedStores = localStorage.getItem('savemore_stores');

    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedProfile) setUserProfile(JSON.parse(savedProfile));
    if (savedOrders) setOrders(JSON.parse(savedOrders));
    if (savedProducts) setProducts(JSON.parse(savedProducts));
    if (savedStores) setStores(JSON.parse(savedStores));
  }, []);

  // Save data to localStorage
  useEffect(() => {
    if (user) localStorage.setItem('savemore_user', JSON.stringify(user));
    else localStorage.removeItem('savemore_user');
  }, [user]);

  useEffect(() => {
    localStorage.setItem('savemore_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem('savemore_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('savemore_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('savemore_stores', JSON.stringify(stores));
  }, [stores]);

  const addToCart = (product) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      if (existing.quantity >= product.stock) {
        alert(`Sorry, only ${product.stock} units available in stock!`);
        return;
      }
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, change) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + change;
        const product = products.find(p => p.id === productId);
        if (newQty > product.stock) {
          alert(`Sorry, only ${product.stock} units available!`);
          return item;
        }
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    const store = stores.find(s => s.owner === email);
    
    setUser({ 
      email, 
      name: email.split('@')[0],
      isStoreOwner: !!store,
      storeId: store?.id
    });
    setUserProfile({
      ...userProfile,
      email,
      name: email.split('@')[0]
    });
    setShowAuthModal(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const accountType = e.target.accountType.value;
    
    if (accountType === 'store') {
      const newStoreId = stores.length + 1;
      const storeName = e.target.storeName?.value || `${name}'s Store`;
      const storeAddress = e.target.storeAddress?.value || 'Ahmedabad';
      
      const newStore = {
        id: newStoreId,
        name: storeName,
        lat: 23.0225 + (Math.random() - 0.5) * 0.1,
        lng: 72.5714 + (Math.random() - 0.5) * 0.1,
        address: storeAddress,
        owner: email
      };
      
      setStores([...stores, newStore]);
      setUser({ email, name, isStoreOwner: true, storeId: newStoreId });
    } else {
      setUser({ email, name, isStoreOwner: false });
    }
    
    setUserProfile({
      ...userProfile,
      email,
      name
    });
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      setUser(null);
      setCart([]);
      setActiveTab('home');
      setUserProfile({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: 'Ahmedabad',
        pincode: ''
      });
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const discount = Math.round(((newProduct.originalPrice - newProduct.discountPrice) / newProduct.originalPrice) * 100);
    
    const product = {
      id: Date.now(),
      storeId: user.storeId,
      name: newProduct.name,
      category: newProduct.category,
      originalPrice: parseFloat(newProduct.originalPrice),
      discountPrice: parseFloat(newProduct.discountPrice),
      expiry: newProduct.expiry,
      discount,
      image: newProduct.image,
      stock: parseInt(newProduct.stock)
    };

    setProducts([...products, product]);
    setShowAddProductModal(false);
    setNewProduct({
      name: '',
      category: 'Dairy',
      originalPrice: '',
      discountPrice: '',
      expiry: '',
      stock: '',
      image: '📦'
    });
    alert('Product added successfully!');
  };

  const deleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setShowProfileModal(false);
    alert('Profile updated successfully!');
  };

  const handleCheckout = () => {
    if (!userProfile.address || !userProfile.phone) {
      alert('Please complete your profile with address and phone number before checkout!');
      setShowProfileModal(true);
      return;
    }
    setShowCheckoutModal(true);
  };

  const handlePlaceOrder = () => {
    const order = {
      id: Date.now(),
      items: [...cart],
      total: cartTotal,
      address: userProfile.address,
      phone: userProfile.phone,
      date: new Date().toISOString(),
      status: 'Pending',
      paymentMethod: 'Cash on Delivery'
    };
    
    // Update product stock
    const updatedProducts = products.map(product => {
      const cartItem = cart.find(item => item.id === product.id);
      if (cartItem) {
        return { ...product, stock: product.stock - cartItem.quantity };
      }
      return product;
    });
    
    setProducts(updatedProducts);
    setOrders([...orders, order]);
    setCart([]);
    setShowCheckoutModal(false);
    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
      setActiveTab('orders');
    }, 3000);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesStore = !selectedStore || product.storeId === selectedStore;
    const hasStock = product.stock > 0;
    return matchesSearch && matchesCategory && matchesStore && hasStock;
  });

  const myStoreProducts = user?.isStoreOwner ? products.filter(p => p.storeId === user.storeId) : [];

  const cartTotal = cart.reduce((sum, item) => sum + (item.discountPrice * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
        cart={cart}
        setShowAuthModal={setShowAuthModal}
        setAuthMode={setAuthMode}
        handleLogout={handleLogout}
        setShowProfileModal={setShowProfileModal}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />

      {/* Order Success Notification */}
      {orderSuccess && (
        <div className="fixed top-24 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg animate-bounce">
          <p className="font-semibold">✅ Order placed successfully!</p>
          <p className="text-sm">Redirecting to orders page...</p>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-8 min-h-[calc(100vh-400px)]">
        {activeTab === 'home' && (
          <HomePage 
            stores={stores}
            products={products}
            userLocation={userLocation}
            setActiveTab={setActiveTab}
            addToCart={addToCart}
          />
        )}

        {activeTab === 'products' && (
          <ProductsPage 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedStore={selectedStore}
            setSelectedStore={setSelectedStore}
            stores={stores}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
            filteredProducts={filteredProducts}
            addToCart={addToCart}
          />
        )}

        {activeTab === 'stores' && (
          <StoresPage 
            stores={stores}
            products={products}
            userLocation={userLocation}
            setSelectedStore={setSelectedStore}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'cart' && (
          <CartPage 
            cart={cart}
            stores={stores}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            cartTotal={cartTotal}
            setActiveTab={setActiveTab}
            handleCheckout={handleCheckout}
          />
        )}

        {activeTab === 'orders' && (
          <OrdersPage 
            orders={orders}
            stores={stores}
          />
        )}

        {activeTab === 'manage' && user?.isStoreOwner && (
          <ManageProductsPage 
            myStoreProducts={myStoreProducts}
            setShowAddProductModal={setShowAddProductModal}
            deleteProduct={deleteProduct}
          />
        )}
      </main>

      <AuthModal 
        showAuthModal={showAuthModal}
        setShowAuthModal={setShowAuthModal}
        authMode={authMode}
        setAuthMode={setAuthMode}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
      />

      <ProfileModal 
        showProfileModal={showProfileModal}
        setShowProfileModal={setShowProfileModal}
        userProfile={userProfile}
        setUserProfile={setUserProfile}
        handleUpdateProfile={handleUpdateProfile}
      />

      <CheckoutModal 
        showCheckoutModal={showCheckoutModal}
        setShowCheckoutModal={setShowCheckoutModal}
        cart={cart}
        cartTotal={cartTotal}
        userProfile={userProfile}
        handlePlaceOrder={handlePlaceOrder}
        stores={stores}
      />

      <AddProductModal 
        showAddProductModal={showAddProductModal}
        setShowAddProductModal={setShowAddProductModal}
        newProduct={newProduct}
        setNewProduct={setNewProduct}
        handleAddProduct={handleAddProduct}
      />

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;