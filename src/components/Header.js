import React from 'react';
import { ShoppingCart, User, LogOut, Menu, X, Percent } from 'lucide-react';

const Header = ({ 
  activeTab, 
  setActiveTab, 
  user, 
  cart, 
  setShowAuthModal, 
  setAuthMode, 
  handleLogout,
  setShowProfileModal,
  showMobileMenu,
  setShowMobileMenu
}) => {
  return (
    <header className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Clickable to go home */}
          <button 
            onClick={() => setActiveTab('home')} 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Percent className="w-8 h-8 text-white" />
            <h1 className="text-2xl font-bold text-white">SaveMore</h1>
          </button>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => setActiveTab('home')} className={`${activeTab === 'home' ? 'text-white font-bold' : 'text-green-50'} hover:text-white transition-colors`}>Home</button>
            <button onClick={() => setActiveTab('products')} className={`${activeTab === 'products' ? 'text-white font-bold' : 'text-green-50'} hover:text-white transition-colors`}>Products</button>
            <button onClick={() => setActiveTab('stores')} className={`${activeTab === 'stores' ? 'text-white font-bold' : 'text-green-50'} hover:text-white transition-colors`}>Stores</button>
            {user && !user.isStoreOwner && (
              <button onClick={() => setActiveTab('orders')} className={`${activeTab === 'orders' ? 'text-white font-bold' : 'text-green-50'} hover:text-white transition-colors`}>My Orders</button>
            )}
            {user?.isStoreOwner && (
              <button onClick={() => setActiveTab('manage')} className={`${activeTab === 'manage' ? 'text-white font-bold' : 'text-green-50'} hover:text-white transition-colors`}>Manage</button>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {user && !user.isStoreOwner && (
              <button onClick={() => setActiveTab('cart')} className="relative">
                <ShoppingCart className="w-6 h-6 text-white" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cart.length}</span>
                )}
              </button>
            )}
            
            {user ? (
              <div className="flex items-center space-x-2">
                <button onClick={() => setShowProfileModal(true)} className="flex items-center space-x-2 bg-white bg-opacity-20 px-3 py-2 rounded-lg hover:bg-opacity-30 transition-colors">
                  <User className="w-5 h-5 text-white" />
                  <span className="text-sm text-white hidden md:block">{user.name}</span>
                </button>
                <button onClick={handleLogout} className="text-white hover:text-red-200">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button onClick={() => { setShowAuthModal(true); setAuthMode('login'); }} className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 font-semibold">
                Login
              </button>
            )}

            <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="md:hidden text-white">
              {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <button onClick={() => { setActiveTab('home'); setShowMobileMenu(false); }} className="block w-full text-left px-4 py-2 text-white hover:bg-white hover:bg-opacity-20 rounded">Home</button>
            <button onClick={() => { setActiveTab('products'); setShowMobileMenu(false); }} className="block w-full text-left px-4 py-2 text-white hover:bg-white hover:bg-opacity-20 rounded">Products</button>
            <button onClick={() => { setActiveTab('stores'); setShowMobileMenu(false); }} className="block w-full text-left px-4 py-2 text-white hover:bg-white hover:bg-opacity-20 rounded">Stores</button>
            {user && !user.isStoreOwner && (
              <button onClick={() => { setActiveTab('orders'); setShowMobileMenu(false); }} className="block w-full text-left px-4 py-2 text-white hover:bg-white hover:bg-opacity-20 rounded">My Orders</button>
            )}
            {user?.isStoreOwner && (
              <button onClick={() => { setActiveTab('manage'); setShowMobileMenu(false); }} className="block w-full text-left px-4 py-2 text-white hover:bg-white hover:bg-opacity-20 rounded">Manage</button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;