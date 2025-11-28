import React from 'react';
import { Percent, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = ({ setActiveTab }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Percent className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-bold">SaveMore</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Reducing food waste while saving you money. Get fresh products at discounted prices from nearby stores.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => setActiveTab('products')} className="hover:text-white transition-colors">Products</button></li>
              <li><button onClick={() => setActiveTab('stores')} className="hover:text-white transition-colors">Stores</button></li>
              <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-white transition-colors">About Us</button></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Customer Service</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-green-400" />
                <span>Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-green-400" />
                <a href="mailto:support@savemore.com" className="hover:text-white transition-colors">support@savemore.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-green-400" />
                <a href="tel:+919999988888" className="hover:text-white transition-colors">+91 99999 88888</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} SaveMore. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Fighting food waste, one discount at a time. 🌱</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;