import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, isMobile = false, onLinkClick }) => {
  const baseLinkClasses = `font-medium transition-colors duration-200 ${
    isScrolled ? 'text-gray-800 hover:text-green-700' : 'text-white hover:text-green-200'
  }`;

  return (
    <nav className={isMobile ? 'flex flex-col space-y-4' : 'flex space-x-8 relative'}>
      <Link
        to="/"
        onClick={onLinkClick}
        className={`${baseLinkClasses} ${isMobile ? 'py-2 border-b border-gray-100' : ''}`}
      >
        Home
      </Link>

      <Link
        to="/medicine"
        onClick={onLinkClick}
        className={`${baseLinkClasses} ${isMobile ? 'py-2 border-b border-gray-100' : ''}`}
      >
        Medicines
      </Link>


      {/* Cosmetics */}
      <Link
        to="/cosmetics"
        onClick={onLinkClick}
        className={`${baseLinkClasses} ${isMobile ? 'py-2 border-b border-gray-100' : ''}`}
      >
        Cosmetics
      </Link>

       {/* Products */}
      <Link
        to="/products"
        onClick={onLinkClick}
        className={`${baseLinkClasses} ${isMobile ? 'py-2 border-b border-gray-100' : ''}`}
      >
        All Products
      </Link>
      

      {/* Other Pages */}
      <Link
        to="/about"
        onClick={onLinkClick}
        className={`${baseLinkClasses} ${isMobile ? 'py-2 border-b border-gray-100' : ''}`}
      >
        About Us
      </Link>

      <Link
        to="/contact-us"
        onClick={onLinkClick}
        className={`${baseLinkClasses} ${isMobile ? 'py-2 border-b border-gray-100' : ''}`}
      >
        Contact
      </Link>

      <Link
        to="/privacy-policy"
        onClick={onLinkClick}
        className={`${baseLinkClasses} ${isMobile ? 'py-2 border-b border-gray-100' : ''}`}
      >
        Privacy Policy
      </Link>
    </nav>
  );
};

export default Navbar;
