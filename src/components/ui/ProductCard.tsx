import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../../types/product';
import Button from './Button';

interface ProductCardProps {
  product: Product;
  size?: 'sm' | 'md' | 'lg';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, size = 'md' }) => {
  const { id, name, image, price, category } = product;

  const cardSizes = {
    sm: 'max-w-[200px]',
    md: 'max-w-[300px]',
    lg: 'max-w-[350px]',
  };

  const imageSizes = {
    sm: 'h-[150px]',
    md: 'h-[400px]',
    lg: 'h-[250px]',
  };

  return (
    <div className={`${cardSizes[size]} bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300`}>
      <div className="relative">
        <Link to={`/products/${id}`}> 
          <img 
            src={image} 
            alt={name} 
            className={`w-full ${imageSizes[size]} object-cover`}
          />
        </Link>
        <button className="absolute top-3 right-3 p-1.5 bg-white rounded-full text-gray-600 hover:text-red-500 transition-colors duration-200">
          <Heart size={18} />
        </button>
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-green-700 uppercase">{category}</span>
        </div>
        <Link to={`/products/${id}`} className="block mb-2">
          <h3 className="font-medium text-gray-900 hover:text-green-700 transition-colors duration-200">
            {name}
          </h3>
        </Link>
        <div className="flex justify-between items-center mt-3">
          <span className="font-bold text-gray-900">₹{price.toFixed(2)}</span>
          <Button 
            variant="primary" 
            size="sm"
            className="flex items-center gap-1"
          >
            <ShoppingBag size={16} />
            <span>Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;