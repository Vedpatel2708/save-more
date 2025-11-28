import React from 'react';
import { Store, MapPin } from 'lucide-react';
import { calculateDistance } from '../utils/helpers';

const StoresPage = ({ stores, products, userLocation, setSelectedStore, setActiveTab }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">All Stores in Ahmedabad</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stores.map(store => {
          const storeProducts = products.filter(p => p.storeId === store.id);
          const distance = calculateDistance(userLocation.lat, userLocation.lng, store.lat, store.lng);
          return (
            <div key={store.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-green-500">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <Store className="w-8 h-8 text-green-600 mr-3" />
                  <div>
                    <h3 className="font-bold text-lg">{store.name}</h3>
                    <p className="text-sm text-gray-600">{store.address}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-sm text-green-600 mb-4 font-semibold">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{distance} km away</span>
              </div>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600 mb-2">{storeProducts.length} products available</p>
                <button 
                  onClick={() => { setSelectedStore(store.id); setActiveTab('products'); }}
                  className="text-green-600 hover:text-green-700 font-semibold text-sm"
                >
                  View Products →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StoresPage;