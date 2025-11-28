import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { calculateDistance, getDaysUntilExpiry } from '../utils/helpers';

const HomePage = ({ stores, products, userLocation, setActiveTab, addToCart }) => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white rounded-2xl p-8 shadow-xl">
        <h2 className="text-4xl font-bold mb-4">Save Food, Save Money! 🌟</h2>
        <p className="text-lg mb-6">Get up to 40% off on products nearing expiry. Fresh, safe, and affordable.</p>
        <button onClick={() => setActiveTab('products')} className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-md">
          Browse Products
        </button>
      </div>

      {/* Map Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <MapPin className="w-6 h-6 mr-2 text-green-600" />
          Stores Near You
        </h3>
        <div className="bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0">
            {stores.map((store, idx) => (
              <div 
                key={store.id}
                className="absolute bg-red-500 rounded-full w-4 h-4 cursor-pointer hover:w-6 hover:h-6 transition-all animate-pulse"
                style={{
                  left: `${20 + idx * 15}%`,
                  top: `${30 + (idx % 3) * 20}%`
                }}
                title={store.name}
              />
            ))}
          </div>
          <div className="relative z-10 text-center">
            <MapPin className="w-12 h-12 mx-auto text-green-600 mb-2" />
            <p className="text-gray-600">Interactive Map - {stores.length} Stores in Ahmedabad</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stores.map(store => (
            <div key={store.id} className="border-2 border-gray-200 rounded-lg p-4 hover:border-green-500 hover:shadow-md transition-all">
              <h4 className="font-semibold text-gray-900">{store.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{store.address}</p>
              <p className="text-sm text-green-600 mt-2 font-semibold">
                📍 {calculateDistance(userLocation.lat, userLocation.lng, store.lat, store.lng)} km away
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Deals */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Today's Best Deals 🔥</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.slice(0, 3).map(product => {
            const daysLeft = getDaysUntilExpiry(product.expiry);
            return (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-pink-50 via-yellow-50 to-purple-50 p-8 text-center">
                  <span className="text-6xl">{product.image}</span>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{product.name}</h4>
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-semibold">-{product.discount}%</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{stores.find(s => s.id === product.storeId)?.name || 'Store'}</p>
                  <div className="flex items-center text-sm text-orange-600 mb-3">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Expires in {daysLeft} day{daysLeft !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}</span>
                      <span className="text-green-600 font-bold text-xl ml-2">₹{product.discountPrice}</span>
                    </div>
                  </div>
                  <button onClick={() => addToCart(product)} className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;