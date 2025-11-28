import React from 'react';
import { ShoppingCart, Clock, Trash2 } from 'lucide-react';
import { getDaysUntilExpiry } from '../utils/helpers';

const CartPage = ({ cart, stores, updateQuantity, removeFromCart, cartTotal, setActiveTab, handleCheckout }) => {
  if (cart.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-12 text-center">
        <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
        <p className="text-gray-600 mb-4 text-lg">Your cart is empty</p>
        <button onClick={() => setActiveTab('products')} className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-teal-700 shadow-md">
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => {
            const store = stores.find(s => s.id === item.storeId);
            const daysLeft = getDaysUntilExpiry(item.expiry);
            return (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-pink-50 via-yellow-50 to-purple-50 p-4 rounded-lg">
                  <span className="text-4xl">{item.image}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-600">{store?.name}</p>
                  <div className="flex items-center text-sm text-orange-600 mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Expires in {daysLeft} day{daysLeft !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-gray-400 line-through text-sm mr-2">₹{item.originalPrice}</span>
                    <span className="text-green-600 font-bold text-xl">₹{item.discountPrice}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
                  >
                    -
                  </button>
                  <span className="font-semibold w-8 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
                  >
                    +
                  </button>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">₹{(item.discountPrice * item.quantity).toFixed(2)}</p>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 text-sm mt-2 flex items-center gap-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg shadow-md p-6 sticky top-24">
            <h3 className="font-bold text-xl mb-4">Order Summary</h3>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-semibold text-green-600">FREE</span>
              </div>
              <div className="flex justify-between text-sm text-green-600">
                <span>Total Savings</span>
                <span className="font-semibold">
                  ₹{cart.reduce((sum, item) => sum + ((item.originalPrice - item.discountPrice) * item.quantity), 0).toFixed(2)}
                </span>
              </div>
              <div className="border-t pt-3 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-green-600">₹{cartTotal.toFixed(2)}</span>
              </div>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg hover:from-green-700 hover:to-teal-700 font-semibold shadow-md"
            >
              Proceed to Checkout
            </button>
            <p className="text-xs text-gray-500 text-center mt-3">
              🔒 Secure checkout • Cash on Delivery available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;