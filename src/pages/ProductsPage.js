import React from 'react';
import { Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductsPage = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedStore, 
  setSelectedStore, 
  stores, 
  selectedCategory, 
  setSelectedCategory, 
  categories, 
  filteredProducts, 
  addToCart 
}) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <select
          value={selectedStore || ''}
          onChange={(e) => setSelectedStore(e.target.value ? parseInt(e.target.value) : null)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
        >
          <option value="">All Stores</option>
          {stores.map(store => (
            <option key={store.id} value={store.id}>{store.name}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${selectedCategory === cat ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => {
          const store = stores.find(s => s.id === product.storeId);
          return (
            <ProductCard 
              key={product.id} 
              product={product} 
              store={store} 
              addToCart={addToCart} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;