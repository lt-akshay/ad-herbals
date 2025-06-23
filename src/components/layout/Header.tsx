import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import Navbar from './Navbar';
import logo from '../../images/logo/Ad_Harbals.png'
import PromoBanner from './PromoBanner';
import { products } from '../../data/products'; 

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [promoVisible, setPromoVisible] = useState(true); 

    const promoProduct = products.find(p => p.promo);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    {promoVisible && promoProduct && (
        <PromoBanner product={promoProduct} onClose={() => setPromoVisible(false)} />
      )}
    <header
     className={`fixed left-0 ${promoVisible ? 'top-10' : 'top-0'} right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
  }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center"
          >
            <img
              src={logo}
              alt="AD Harbals"
              className="h-16 w-16 rounded-full object-cover"
            />
            <span className="text-4xl font-bold text-green-800 leading-tight pl-3" style={{color:'#afaf53'}}>
              AD Herbals
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Navbar isScrolled={isScrolled} />
          </div>

          <div className="flex items-center space-x-4">
            {/* <button 
              className={`p-1 rounded-full ${
                isScrolled ? 'text-green-800 hover:bg-green-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <Search size={20} />
            </button> */}
            {/* <Link 
              to="/account" 
              className={`p-1 rounded-full ${
                isScrolled ? 'text-green-800 hover:bg-green-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <User size={20} />
            </Link>
            <Link 
              to="/cart" 
              className={`p-1 rounded-full ${
                isScrolled ? 'text-green-800 hover:bg-green-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <ShoppingBag size={20} />
            </Link> */}
            <button
              className={`p-1 rounded-full md:hidden ${isScrolled ? 'text-green-800 hover:bg-green-100' : 'text-white hover:bg-white/10'
                }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
 {/* 👇 Imported promo banner here */}
      {/* <PromoBanner /> */}
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <Navbar isScrolled={true} isMobile={true} onLinkClick={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;