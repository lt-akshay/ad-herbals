import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import Button from '../components/ui/Button';
import { ShoppingBag, Heart, ChevronRight } from 'lucide-react';
import FeaturedProducts from '../components/sections/FeaturedProducts';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== id)
    .slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-700 pt-32 pb-12">
        <div className="container mx-auto px-4">
          {/* <h1 className="text-4xl font-bold text-white">All Products</h1> */}
          <div className="flex items-center text-sm text-white-500 flex-wrap gap-1">
            <Link to="/" className="text-white hover:text-white">Home</Link>
            <ChevronRight className='text-white' size={16} />
            <Link to="/products" className="text-white hover:text-white">Products</Link>
            <ChevronRight className='text-white' size={16} />
            <Link to={`/products?category=${product.category.toLowerCase().replace(' ', '-')}`} className="text-white hover:text-white">
              {product.category}
            </Link>
            <ChevronRight className='text-white' size={16} />
            <span className="text-white font-medium">{product.name}</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        

        {/* Product Detail Card */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image section */}
           <div className="w-full h-[400px] bg-white flex items-center justify-center rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Details section */}
            <div className="p-6 flex flex-col">
              <h1 className="text-3xl font-bold text-gray-900 mb-1">{product.name}</h1>
              <span className="text-sm font-semibold text-green-700 uppercase mb-4">{product.category}</span>
              <div className="text-2xl font-bold text-gray-900 mb-6">₹{product.price.toFixed(2)}</div>

              <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

              {product.indications && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Indications</h3>
                  <p className="text-gray-700">{product.indications}</p>
                </div>
              )}

              {product.benefits && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Benefits</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-4 mt-auto">
                <Button variant="primary" className="flex items-center px-6 py-2">
                  <ShoppingBag size={18} className="mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex items-center px-6 py-2">
                  <Heart size={18} className="mr-2" />
                  Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
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
