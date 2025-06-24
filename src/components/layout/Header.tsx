import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Navbar from './Navbar';
import logo from '../../images/logo/Ad_Harbals.png';
import PromoBanner from './PromoBanner';
import { products } from '../../data/products';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [promoVisible, setPromoVisible] = useState(true);

  const promoProduct = products.find(p => p.promo);

  return (
    <>
      {promoVisible && promoProduct && (
        <PromoBanner product={promoProduct} onClose={() => setPromoVisible(false)} />
      )}
      <header
        className={`fixed left-0 ${promoVisible ? 'top-10' : 'top-0'} right-0 z-50 bg-white shadow-md transition-all duration-300`}
      >
        <div className="container mx-auto px-6 py-1 sm:py-2">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="AD Herbals"
                className="h-16 w-16 rounded-full object-cover"
              />
              <span className="text-4xl font-bold leading-tight pl-3" style={{ color: '#afaf53' }}>
                AD Herbals
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Navbar isMobile={false} />
            </div>

            <div className="flex items-center space-x-4">
              <button
                className="p-1 rounded-full lg:hidden text-green-800 hover:bg-green-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white">
            <div className="container mx-auto px-4 py-4">
              <Navbar isMobile={true} onLinkClick={() => setMobileMenuOpen(false)} />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;