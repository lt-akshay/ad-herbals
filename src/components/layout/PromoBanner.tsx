import React from 'react';
import { X } from 'lucide-react';
import { Product } from '../../types/product';

interface PromoBannerProps {
  onClose: () => void;
  product: Product;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ onClose, product }) => {
  const promo = product.promo;
  if (!promo) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[999] bg-gradient-to-r from-green-700 to-lime-500 text-white shadow-md min-h-[2.5rem] flex items-center">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-3 py-1.5 sm:py-2 text-[0.7rem] sm:text-sm md:text-base text-center sm:text-left relative">
        <div className="flex items-center gap-2 overflow-hidden w-full pr-6 sm:pr-0">
          {/* Hide image on small screens */}
          {/* <img
            src={product.image}
            alt={product.name}
            className="hidden sm:block h-6 w-6 sm:h-7 sm:w-7 rounded-full object-cover border border-white"
          /> */}
          <p className="leading-snug truncate sm:whitespace-normal w-full text-center">
            {/* <strong>{product.name}</strong> now at <strong>{promo.discountPercentage}% OFF</strong> – Use code{' '} */}
            Limited Time Offer:<strong> {promo.discountPercentage}%</strong> Off All Products!
            {/* <span className="bg-white text-green-700 font-semibold px-2 py-0.5 rounded">{promo.code}</span> */}
          </p>
        </div>

        {/* Close Button */}
        {/* <button
          onClick={onClose}
          className="absolute right-3 top-1/2 -translate-y-1/2 sm:static sm:translate-y-0 text-white hover:text-yellow-300 transition"
          aria-label="Close banner"
        >
          <X size={18} />
        </button> */}
      </div>
    </div>
  );
};

export default PromoBanner;
