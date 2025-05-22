import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import Button from '../components/ui/Button';
import { ShoppingBag, Heart, ChevronRight } from 'lucide-react';
import FeaturedProducts from '../components/sections/FeaturedProducts';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);
  
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== id)
    .slice(0, 4);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-6">The product you're looking for doesn't seem to exist.</p>
          <Link to="/products">
            <Button variant="primary">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-green-700">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/products" className="hover:text-green-700">Products</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to={`/products?category=${product.category.toLowerCase().replace(' ', '-')}`} className="hover:text-green-700">
              {product.category}
            </Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>

        {/* Product details */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-8">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            
            <div className="p-6 md:p-8 flex flex-col">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="mb-4">
                <span className="text-sm font-medium text-green-700 uppercase">{product.category}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</div>
              
              <p className="text-gray-700 mb-8">{product.description}</p>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                  <button 
                    onClick={decrementQuantity}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800"
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button 
                    onClick={incrementQuantity}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-auto">
                <Button 
                  variant="primary" 
                  className="flex items-center px-8"
                >
                  <ShoppingBag size={18} className="mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline"
                  className="flex items-center"
                >
                  <Heart size={18} className="mr-2" />
                  Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional details */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6 md:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Product Details</h2>
            <p className="text-gray-700">
              {product.description} Our products are made with natural ingredients that are kind to your skin and to the environment. We do not test on animals and ensure our packaging is eco-friendly.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">How to Use</h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>Cleanse your skin thoroughly before application.</li>
              <li>Apply a small amount of product to your fingertips.</li>
              <li>Gently massage into the skin using upward circular motions.</li>
              <li>Allow the product to fully absorb before applying other products.</li>
            </ol>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <FeaturedProducts 
              products={relatedProducts} 
              title="You Might Also Like" 
              viewAllLink={`/products?category=${product.category.toLowerCase().replace(' ', '-')}`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;