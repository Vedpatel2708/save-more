import React from 'react';
import { Package, Clock, CheckCircle, MapPin } from 'lucide-react';

const OrdersPage = ({ orders, stores }) => {
  if (orders.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-12 text-center">
        <Package className="w-16 h-16 mx-auto text-gray-300 mb-4" />
        <p className="text-gray-600 mb-4 text-lg">No orders yet</p>
        <p className="text-sm text-gray-500">Start shopping to see your orders here!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">My Orders</h2>
      <div className="space-y-4">
        {orders.map((order, index) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Package className="w-5 h-5 text-green-600" />
                  Order #{order.id}
                </h3>
                <p className="text-sm text-gray-600">Placed on {new Date(order.date).toLocaleDateString()} at {new Date(order.date).toLocaleTimeString()}</p>
              </div>
              <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                <Clock className="w-4 h-4" />
                {order.status}
              </div>
            </div>

            <div className="border-t border-b py-4 my-4">
              <div className="space-y-2">
                {order.items.map(item => {
                  const store = stores.find(s => s.id === item.storeId);
                  return (
                    <div key={item.id} className="flex items-center gap-3">
                      <span className="text-2xl">{item.image}</span>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-gray-600">{store?.name} • Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-green-600">₹{(item.discountPrice * item.quantity).toFixed(2)}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Delivery Address
                </p>
                <p className="text-sm text-gray-600">{order.address}</p>
                <p className="text-sm text-gray-600">{order.phone}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-sm font-semibold text-gray-700 mb-1">Payment</p>
                <p className="text-sm text-gray-600">{order.paymentMethod}</p>
                <p className="text-lg font-bold text-green-600 mt-1">₹{order.total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;