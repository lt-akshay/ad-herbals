import React, { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import Button from '../../components/ui/Button';
import ImageUpload from '../../components/ImageUpload';
import { Product } from '../../types/product';
import { getProducts, deleteProduct, addProduct, updateProduct, getCategories } from '../../utils/fileStorage';

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<Product>>({});
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    setProducts(getProducts());
    const categoryList = getCategories().map(cat => cat.name);
    setCategories(categoryList);
  }, []);

  const handleImageSelect = (file: File) => {
    setImageFile(file);
    // Create a temporary URL for preview
    const imageUrl = URL.createObjectURL(file);
    setFormData({ ...formData, image: imageUrl });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
      setProducts(getProducts());
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.type || !formData.price || (!formData.image && !imageFile)) {
      alert('Please fill in all required fields');
      return;
    }

    let imageUrl = formData.image;
    if (imageFile) {
      // In a real application, you would upload the file to a server here
      // For demo purposes, we'll just use the existing URL
      imageUrl = URL.createObjectURL(imageFile);
    }

    const productData = {
      ...formData,
      image: imageUrl
    };

    if (selectedProduct) {
      updateProduct(selectedProduct.id, productData);
    } else {
      addProduct(productData as Omit<Product, 'id'>);
    }

    setProducts(getProducts());
    setIsEditing(false);
    setSelectedProduct(null);
    setFormData({});
    setImageFile(null);
  };

  if (isEditing) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {selectedProduct ? 'Edit Product' : 'Add New Product'}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={formData.name || ''}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={formData.category || ''}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Type</label>
            <select
              value={formData.type || ''}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as 'cosmetic' | 'medicine' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            >
              <option value="">Select product type</option>
              <option value="cosmetic">Cosmetic</option>
              <option value="medicine">Medicine</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <input
              type="number"
              value={formData.price || ''}
              onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
              step="0.01"
            />
          </div>          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
            <ImageUpload
              onImageSelect={handleImageSelect}
              currentImage={formData.image}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={formData.description || ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
              rows={3}
            />
          </div>
          
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.featured || false}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="mr-2 text-green-600 focus:ring-green-500"
              />
              <span className="text-sm font-medium text-gray-700">Featured Product</span>
            </label>
          </div>
          
          <div className="flex justify-end space-x-3 pt-4">
            <Button
              variant="outline"
              onClick={() => {
                setIsEditing(false);
                setSelectedProduct(null);
                setFormData({});
                setImageFile(null);
              }}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {selectedProduct ? 'Update' : 'Create'} Product
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
        <Button
          variant="primary"
          className="flex items-center"
          onClick={() => {
            setIsEditing(true);
            setSelectedProduct(null);
            setFormData({});
          }}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-green-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                  Featured
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-green-800 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-green-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{product.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      product.type === 'cosmetic' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {product.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      product.featured 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {product.featured ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button
                      className="text-green-600 hover:text-green-800 mr-3 p-1 rounded hover:bg-green-100"
                      onClick={() => {
                        setSelectedProduct(product);
                        setFormData(product);
                        setIsEditing(true);
                      }}
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-100"
                      onClick={() => handleDelete(product.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;