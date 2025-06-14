import React, { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import Button from '../../components/ui/Button';
import { Category } from '../../types/product';
import { getCategories, deleteCategory, addCategory, updateCategory } from '../../utils/fileStorage';

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<Category>>({});

  useEffect(() => {
    setCategories(getCategories());
  }, []);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      deleteCategory(id);
      setCategories(getCategories());
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.image) {
      alert('Please fill in all required fields');
      return;
    }

    if (selectedCategory) {
      updateCategory(selectedCategory.id, formData);
    } else {
      addCategory(formData as Omit<Category, 'id'>);
    }

    setCategories(getCategories());
    setIsEditing(false);
    setSelectedCategory(null);
    setFormData({});
  };

  if (isEditing) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {selectedCategory ? 'Edit Category' : 'Add New Category'}
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input
              type="url"
              value={formData.image || ''}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <Button
              variant="outline"
              onClick={() => {
                setIsEditing(false);
                setSelectedCategory(null);
                setFormData({});
              }}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {selectedCategory ? 'Update' : 'Create'} Category
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Categories</h1>
        <Button
          variant="primary"
          className="flex items-center"
          onClick={() => {
            setIsEditing(true);
            setSelectedCategory(null);
            setFormData({});
          }}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Category
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
                <th className="px-6 py-3 text-right text-xs font-medium text-green-800 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-green-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{category.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button
                      className="text-green-600 hover:text-green-800 mr-3 p-1 rounded hover:bg-green-100"
                      onClick={() => {
                        setSelectedCategory(category);
                        setFormData(category);
                        setIsEditing(true);
                      }}
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-100"
                      onClick={() => handleDelete(category.id)}
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

export default Categories;