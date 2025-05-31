import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, isMobile = false, onLinkClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

      {/* Products with dropdown */}
      <div
        className="relative group"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <div
          className={`${baseLinkClasses} ${isMobile ? 'py-2 border-b border-gray-100' : ''} cursor-pointer`}
        >
          Products
        </div>

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md z-20">
            <Link
              to="/products/cosmetics"
              onClick={onLinkClick}
              className="block px-4 py-2 text-gray-800 hover:bg-green-100"
            >
              Cosmetics
            </Link>
            <Link
              to="/products/medicine"
              onClick={onLinkClick}
              className="block px-4 py-2 text-gray-800 hover:bg-green-100"
            >
              Medicine
            </Link>
          </div>
        )}
      </div>

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
