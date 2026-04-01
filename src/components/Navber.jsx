import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
const Navber = ({ cartCount }) => {
const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="flex items-center justify-between px-6 md:px-10 py-4 bg-white border-b border-gray-100 font-sans sticky top-0 z-50">
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

        <div className="flex items-center space-x-4 md:space-x-6">
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
            className="hidden sm:block text-gray-700 font-medium hover:text-black"
          >
            Login
          </a>

          <button className="hidden sm:block bg-linear-to-r from-[#7F3EFF] to-[#A259FF] text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:opacity-90 transition transform hover:-translate-y-0.5">
            Get Started
          </button>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-gray-700 focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 z-40 shadow-lg animate-in fade-in slide-in-from-top-5 duration-300">
          <ul className="flex flex-col p-6 space-y-4 text-gray-600 font-medium">
            <li>
              <a href="#products" className="block hover:text-[#7F3EFF]">
                Products
              </a>
            </li>
            <li>
              <a href="#features" className="block hover:text-[#7F3EFF]">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="block hover:text-[#7F3EFF]">
                Pricing
              </a>
            </li>
            <li>
              <a href="#testimonials" className="block hover:text-[#7F3EFF]">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faq" className="block hover:text-[#7F3EFF]">
                FAQ
              </a>
            </li>
            <hr className="border-gray-100" />
            <div className="flex flex-col space-y-4 pt-2">
              <a
                href="#login"
                className="text-center font-medium text-gray-700"
              >
                Login
              </a>
              <button className="bg-linear-to-r from-[#7F3EFF] to-[#A259FF] text-white py-3 rounded-full font-semibold shadow-md">
                Get Started
              </button>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navber;
