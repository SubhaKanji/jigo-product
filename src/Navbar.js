// Navbar.js
import React, { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className=" font-bold text-xl">JIGO</div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className=" focus:outline-none"
          >
            <svg
              className="h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M3 5h18a1 1 0 110 2H3a1 1 0 110-2zm0 7h18a1 1 0 110 2H3a1 1 0 110-2zm0 7h18a1 1 0 110 2H3a1 1 0 110-2z"
              />
            </svg>
          </button>
        </div>
        <div className={`md:flex  flex-col md:flex-row md:items-center gap-10 md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="font-semibold">Home</a>
          <a href="#" className="font-semibold">About Us</a>
          <a href="#" className="font-semibold">Product</a>
          <a href="#" className="font-semibold">Blog</a>
          <a href="#" className="font-semibold">Contact Us</a>
        </div>
        
        <div>
        <IoCartOutline  className='w-8 h-8'/>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Home</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">About</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Services</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;