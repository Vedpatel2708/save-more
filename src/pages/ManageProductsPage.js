import React from 'react';
import { Plus, Trash2, Clock } from 'lucide-react';
import { getDaysUntilExpiry } from '../utils/helpers';

const ManageProductsPage = ({ myStoreProducts, setShowAddProductModal, deleteProduct }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Your Products</h2>
        <button 
          onClick={() => setShowAddProductModal(true)}
          className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-teal-700 flex items-center gap-2 shadow-md"
        >
          <Plus className="w-5 h-5" />
          Add Product
        </button>
      </div>

      {myStoreProducts.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <p className="text-gray-600 mb-4">No products yet</p>
          <button 
            onClick={() => setShowAddProductModal(true)}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Add Your First Product
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-green-100 to-teal-100 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Original Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Discount Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Expiry</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {myStoreProducts.map(product => {
                  const daysLeft = getDaysUntilExpiry(product.expiry);
                  return (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="text-2xl mr-2">{product.image}</span>
                          <span className="font-medium">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">{product.category}</td>
                      <td className="px-6 py-4 text-sm">₹{product.originalPrice}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="text-green-600 font-semibold">₹{product.discountPrice}</span>
                        <span className="text-xs text-gray-500 ml-1">(-{product.discount}%)</span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className={`${daysLeft <= 1 ? 'text-red-600' : 'text-gray-900'}`}>
                          {new Date(product.expiry).toLocaleDateString()}
                          <div className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {daysLeft} days left
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">{product.stock}</td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => deleteProduct(product.id)}
                          className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProductsPage;