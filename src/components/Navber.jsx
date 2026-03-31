import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navber = ({ cartCount }) => {
  return (
    <div>
      <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-100 font-sans">
        <div className="text-2xl font-bold text-[#7F3EFF]">DigiTools</div>
        <ul className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
          <li>
            <a href="#products" className="hover:text-[#7F3EFF] transition">
              Products
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-[#7F3EFF] transition">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-[#7F3EFF] transition">
              Pricing
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-[#7F3EFF] transition">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-[#7F3EFF] transition">
              FAQ
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-6">

          <div className="relative cursor-pointer">
          <FaShoppingCart className="text-2xl text-gray-700" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#7F3EFF] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
              {cartCount}
            </span>
          )}
        </div>


          



          <a
            href="#login"
            className="text-gray-700 font-medium hover:text-black"
          >
            Login
          </a>

          <button className="bg-linear-to-r from-[#7F3EFF] to-[#A259FF] text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:opacity-90 transition transform hover:-translate-y-0.5">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
