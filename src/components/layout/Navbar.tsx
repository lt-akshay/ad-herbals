import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
  isMobile?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, isMobile = false }) => {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/', label: 'Categories' },
    { path: '/', label: 'About Us' },
    { path: '/', label: 'Contact' },
    // { path: '/categories', label: 'Categories' },
    // { path: '/about', label: 'About Us' },
    // { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={isMobile ? 'flex flex-col space-y-4' : 'flex space-x-8'}>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`font-medium transition-colors duration-200 ${
            isScrolled
              ? 'text-gray-800 hover:text-green-700'
              : 'text-white hover:text-green-200'
          } ${isMobile ? 'py-2 border-b border-gray-100' : ''}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;