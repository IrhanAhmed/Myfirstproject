// Footer component
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-700">
      <div className="container mx-auto flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
        <p className="mb-6">© 2024 Your Company Name. All Rights Reserved.</p>
        
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-6">
          <a href="#!" className="hover:text-blue-500 transition-colors duration-300">
            <FaFacebook size={28} />
          </a>
          <a href="#!" className="hover:text-blue-400 transition-colors duration-300">
            <FaTwitter size={28} />
          </a>
          <a href="#!" className="hover:text-pink-500 transition-colors duration-300">
            <FaInstagram size={28} />
          </a>
          <a href="#!" className="hover:text-blue-600 transition-colors duration-300">
            <FaLinkedin size={28} />
          </a>
        </div>

        {/* Additional Links Section */}
        <div className="text-sm space-x-4">
          <a href="#!" className="hover:text-white hover:underline transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#!" className="hover:text-white hover:underline transition-colors duration-300">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
