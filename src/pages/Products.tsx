import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import { Filter } from 'lucide-react';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  const categories = Array.from(new Set(products.map(product => product.category)));

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  useEffect(() => {
    let filtered = [...products];
    
    if (selectedCategory) {
      const normalizedCategory = selectedCategory.replace(/-/g, ' ');
      filtered = filtered.filter(
        product => product.category.toLowerCase() === normalizedCategory.toLowerCase()
      );
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory]);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-700 pt-32 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white">All Products</h1>
          <p className="text-green-100 mt-2">
            Discover our range of natural cosmetics and skincare products
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile filter toggle */}
          <button 
            className="md:hidden flex items-center justify-between w-full p-4 bg-white shadow rounded-md"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            <span className="font-medium">Filters</span>
            <Filter size={20} />
          </button>
          
          {/* Sidebar filters */}
          <div className={`w-full md:w-64 ${filtersOpen ? 'block' : 'hidden'} md:block`}>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                <div 
                  className={`cursor-pointer p-2 rounded hover:bg-green-50 ${
                    selectedCategory === null ? 'bg-green-100 text-green-800 font-medium' : ''
                  }`}
                  onClick={() => handleCategoryChange(null)}
                >
                  All Products
                </div>
                {categories.map((category) => (
                  <div
                    key={category}
                    className={`cursor-pointer p-2 rounded hover:bg-green-50 ${
                      selectedCategory?.toLowerCase().replace(/-/g, ' ') === category.toLowerCase() 
                        ? 'bg-green-100 text-green-800 font-medium' 
                        : ''
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-grow">
            <div className="mb-6 flex justify-between items-center">
              <div>
                <p className="text-gray-600">
                  Showing {filteredProducts.length} products
                </p>
              </div>
              {/* <div>
                <select 
                  className="p-2 border rounded-md text-gray-700"
                  defaultValue="default"
                >
                  <option value="default">Sort by</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div> */}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No products found.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;