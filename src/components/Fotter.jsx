import React from 'react';
import { FaFacebook, FaInstagram,FaTwitter } from 'react-icons/fa';

const Fotter = () => {
    return (
       <footer className="bg-[#0F172A] text-white py-10 px-4 md:px-20">
  <div className="max-w-5xl mx-auto grid  md:grid-cols-4 gap-6 md:gap-6">
    
    {/* 1. Brand Section */}
    <div className="space-y-6">
      <div className="text-2xl font-bold">DigiTools</div>
      <p className="text-gray-400 ">
        Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
      </p>
    </div>

    {/* 2. Product Links */}
    <div>
      <h4 className="text-lg font-bold mb-4">Product</h4>
      <ul className="space-y-4 text-gray-400">
        <li><a href="#" className="hover:text-white transition">Features</a></li>
        <li><a href="#" className="hover:text-white transition">Pricing</a></li>
        <li><a href="#" className="hover:text-white transition">Templates</a></li>
        <li><a href="#" className="hover:text-white transition">Integrations</a></li>
      </ul>
    </div>

    {/* 3. Company Links */}
    <div>
      <h4 className="text-lg font-bold mb-4">Company</h4>
      <ul className="space-y-4 text-gray-400">
        <li><a href="#" className="hover:text-white transition">About</a></li>
        <li><a href="#" className="hover:text-white transition">Blog</a></li>
        <li><a href="#" className="hover:text-white transition">Careers</a></li>
        <li><a href="#" className="hover:text-white transition">Press</a></li>
      </ul>
    </div>

    {/* 4. Resources & Social Links */}
    <div>
      <h4 className="text-lg font-bold mb-4">Resources</h4>
      <ul className="space-y-4 text-gray-400 mb-8">
        <li><a href="#" className="hover:text-white transition">Documentation</a></li>
        <li><a href="#" className="hover:text-white transition">Help Center</a></li>
        <li><a href="#" className="hover:text-white transition">Community</a></li>
        <li><a href="#" className="hover:text-white transition">Contact</a></li>
      </ul>
      
      <h4 className="text-lg font-bold mb-2">Social Links</h4>
      <div className="flex space-x-4">
        {/* Instagram Icon */}
        <div className="bg-white text-[#0F172A] p-2 rounded-full cursor-pointer hover:bg-gray-200">
          <FaInstagram></FaInstagram>
        </div>
        {/* Facebook Icon */}
        <div className="bg-white text-[#0F172A] p-2 rounded-full cursor-pointer hover:bg-gray-200">
          <FaFacebook/>
        </div>
        {/* Twitter/X Icon */}
        <div className="bg-white text-[#0F172A] p-2 rounded-full cursor-pointer hover:bg-gray-200">
           <FaTwitter/>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-800 mt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
    <p>© 2026 Digitools. All rights reserved.</p>
    <div className="flex space-x-6 mt-4 md:mt-0">
      <a href="#" className="hover:text-white transition">Privacy Policy</a>
      <a href="#" className="hover:text-white transition">Terms of Service</a>
      <a href="#" className="hover:text-white transition">Cookies</a>
    </div>
  </div>
</footer>
    );
};

export default Fotter;