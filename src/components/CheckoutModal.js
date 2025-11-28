import React from 'react';
import { X, MapPin, Phone, CreditCard, Package } from 'lucide-react';

const CheckoutModal = ({ 
  showCheckoutModal, 
  setShowCheckoutModal, 
  cart, 
  cartTotal, 
  userProfile, 
  handlePlaceOrder,
  stores
}) => {
  if (!showCheckoutModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
          <button onClick={() => setShowCheckoutModal(false)} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Delivery Address */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              Delivery Address
            </h3>
            <p className="text-sm text-gray-700">{userProfile.name}</p>
            <p className="text-sm text-gray-600 mt-1">{userProfile.address}</p>
            <p className="text-sm text-gray-600">{userProfile.city} - {userProfile.pincode}</p>
            <p className="text-sm text-gray-700 mt-2 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {userProfile.phone}
            </p>
          </div>

          {/* Order Items */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Package className="w-5 h-5 text-green-600" />
              Order Items ({cart.length})
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {cart.map(item => {
                const store = stores.find(s => s.id === item.storeId);
                return (
                  <div key={item.id} className="flex items-center gap-4 bg-gray-50 rounded-lg p-3">
                    <span className="text-3xl">{item.image}</span>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-600">{store?.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">₹{(item.discountPrice * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-green-600" />
              Payment Method
            </h3>
            <div className="flex items-center gap-3 bg-white rounded-lg p-3 border-2 border-green-500">
              <input 
                type="radio" 
                checked 
                readOnly 
                className="w-4 h-4 text-green-600"
              />
              <div>
                <p className="font-medium text-gray-800">Cash on Delivery (COD)</p>
                <p className="text-xs text-gray-600">Pay when you receive your order</p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-800 mb-3">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-medium text-green-600">FREE</span>
              </div>
              <div className="flex justify-between text-sm text-green-600">
                <span>Total Savings</span>
                <span className="font-semibold">
                  ₹{cart.reduce((sum, item) => sum + ((item.originalPrice - item.discountPrice) * item.quantity), 0).toFixed(2)}
                </span>
              </div>
              <div className="border-t pt-3 flex justify-between text-lg font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">₹{cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setShowCheckoutModal(false)}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handlePlaceOrder}
              className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;