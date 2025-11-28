import React from 'react';
import { X } from 'lucide-react';

const AddProductModal = ({ 
  showAddProductModal, 
  setShowAddProductModal, 
  newProduct, 
  setNewProduct, 
  handleAddProduct 
}) => {
  if (!showAddProductModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Add New Product</h2>
          <button onClick={() => setShowAddProductModal(false)} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleAddProduct} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Name *</label>
              <input
                type="text"
                required
                value={newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="e.g., Amul Fresh Milk"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
              <select
                value={newProduct.category}
                onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="Dairy">Dairy</option>
                <option value="Biscuits">Biscuits</option>
                <option value="Breads">Breads</option>
                <option value="Chocolates">Chocolates</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Original Price (₹) *</label>
              <input
                type="number"
                required
                min="0"
                step="0.01"
                value={newProduct.originalPrice}
                onChange={(e) => setNewProduct({...newProduct, originalPrice: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Discount Price (₹) *</label>
              <input
                type="number"
                required
                min="0"
                step="0.01"
                value={newProduct.discountPrice}
                onChange={(e) => setNewProduct({...newProduct, discountPrice: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="60"
              />
              {newProduct.originalPrice && newProduct.discountPrice && (
                <p className="text-sm text-green-600 mt-1">
                  Discount: {Math.round(((newProduct.originalPrice - newProduct.discountPrice) / newProduct.originalPrice) * 100)}%
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date *</label>
              <input
                type="date"
                required
                value={newProduct.expiry}
                onChange={(e) => setNewProduct({...newProduct, expiry: e.target.value})}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Stock Quantity *</label>
              <input
                type="number"
                required
                min="1"
                value={newProduct.stock}
                onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Product Emoji</label>
            <div className="flex gap-2 flex-wrap">
              {['📦', '🥛', '🍪', '🍞', '🍫', '🧈', '🧀', '🥐', '🍩', '🥤'].map(emoji => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setNewProduct({...newProduct, image: emoji})}
                  className={`text-3xl p-2 rounded-lg border-2 hover:border-green-500 ${newProduct.image === emoji ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Important:</strong> Set competitive discount prices based on expiry date to attract customers while minimizing waste.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setShowAddProductModal(false)}
              className="flex-1 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 font-semibold"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;