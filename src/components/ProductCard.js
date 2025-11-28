import React from 'react';
import { Clock } from 'lucide-react';
import { getDaysUntilExpiry } from '../utils/helpers';

const ProductCard = ({ product, store, addToCart }) => {
  const daysLeft = getDaysUntilExpiry(product.expiry);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 text-center relative">
        <span className="text-6xl">{product.image}</span>
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
          -{product.discount}%
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-gray-900 mb-1">{product.name}</h4>
        <p className="text-xs text-gray-600 mb-2">{store?.name}</p>
        <div className="flex items-center text-sm mb-2">
          <Clock className="w-4 h-4 mr-1 text-orange-600" />
          <span className={`${daysLeft <= 1 ? 'text-red-600 font-semibold' : 'text-orange-600'}`}>
            {daysLeft} day{daysLeft !== 1 ? 's' : ''} left
          </span>
        </div>
        <p className="text-xs text-gray-500 mb-3">Expiry: {new Date(product.expiry).toLocaleDateString()}</p>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}</span>
          <span className="text-green-600 font-bold text-xl">₹{product.discountPrice}</span>
        </div>
        <p className="text-xs text-gray-600 mb-3">Stock: {product.stock} units</p>
        <button onClick={() => addToCart(product)} className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;