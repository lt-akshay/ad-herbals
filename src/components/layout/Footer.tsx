import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AD HERBALS</h3>
            <p className="mb-4">
              Natural skincare and cosmetics that nurture your skin and respect the environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-green-800 hover:bg-green-700">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-green-800 hover:bg-green-700">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-green-800 hover:bg-green-700">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-green-300">Home</Link></li>
              {/* <li><Link to="/products" className="hover:text-green-300">Products</Link></li> */}
              <li><Link to="/about" className="hover:text-green-300">About Us</Link></li>
              <li><Link to="/contact-us" className="hover:text-green-300">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-green-300">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/products?category=face-care" className="hover:text-green-300">Face Care</Link></li>
              <li><Link to="/products?category=body-care" className="hover:text-green-300">Body Care</Link></li>
              <li><Link to="/products?category=hair-care" className="hover:text-green-300">Hair Care</Link></li>
              <li><Link to="/products?category=sun-care" className="hover:text-green-300">Sun Care</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="mr-2 flex-shrink-0 mt-1" />
                <p>Mehrauli, New Delhi</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2" />
                <p>+91 953-66-555-66</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2" />
                <p>support@adherbals.in</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2" />
                <p>adherbals22@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Herbals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;