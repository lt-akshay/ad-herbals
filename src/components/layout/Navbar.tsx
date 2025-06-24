import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMobile = false, onLinkClick }) => {
  const baseLinkClasses = `font-medium text-gray-800 hover:text-green-700 transition-colors duration-200`;

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

      <Link
        to="/cosmetics"
        onClick={onLinkClick}
        className={`${baseLinkClasses} ${isMobile ? 'py-2 border-b border-gray-100' : ''}`}
      >
        Cosmetics
      </Link>

      <Link
        to="/products"
        onClick={onLinkClick}
        className={`${baseLinkClasses} ${isMobile ? 'py-2 border-b border-gray-100' : ''}`}
      >
        All Products
      </Link>

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
