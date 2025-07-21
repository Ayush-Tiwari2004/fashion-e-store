// Footer.jsx
import React from 'react';
import { FaInstagram, FaTiktok, FaPinterest } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">TrendHive</h2>
          <p className="text-gray-400">Redefining Fashion, One Trend at a Time</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaTiktok className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaPinterest className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">New Arrivals</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Bestsellers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Sale</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Collections</a></li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Shipping Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Returns & Exchanges</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-3">Get 10% off your first order!</p>
          <form className="flex flex-col space-y-3">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-white"
              required
            />
            <button 
              type="submit"
              className="bg-white text-gray-900 px-4 py-2 rounded font-medium hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">© 2024 TrendHive. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <img src="/payment-icons/visa.svg" alt="Visa" className="h-6" />
          <img src="/payment-icons/mastercard.svg" alt="Mastercard" className="h-6" />
          <img src="/payment-icons/paypal.svg" alt="PayPal" className="h-6" />
        </div>
      </div>
    </footer>
  );
};
