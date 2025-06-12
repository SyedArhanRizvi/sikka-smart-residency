"use client";
import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { PopupContext } from "../context/PopupContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setOpenPopup } = useContext(PopupContext);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg sm:text-2xl font-bold tracking-wide">
          Sikka Samrat Residency
        </h1>

        <div className="hidden md:flex md:justify-center md:items-center space-x-8 text-base font-medium">
          <span className="hover:text-gray-400 cursor-pointer">Home</span>

          <span className="hover:text-gray-400 cursor-pointer">Projects</span>

          <span className="hover:text-gray-400 cursor-pointer">Service</span>

          <span className="hover:text-gray-400 cursor-pointer">About</span>

          <button
            onClick={() => setOpenPopup(true)}
            className="text-white px-4 py-2 rounded bg-yellow-500 hover:bg-yellow-400"
          >
            Contact Us
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes size={22} className="text-white" />
            ) : (
              <FaBars size={22} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-gray-800 text-base font-medium">
          <span className="block hover:text-gray-400 cursor-pointer">Home</span>

          <span className="block hover:text-gray-400 cursor-pointer">
            Projects
          </span>

          <span className="block hover:text-gray-400 cursor-pointer">
            Service
          </span>

          <span className="block hover:text-gray-400 cursor-pointer">
            About
          </span>

          <button
            onClick={() => setOpenPopup(true)}
            className="text-white px-4 py-2 rounded bg-yellow-500 hover:bg-yellow-400"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
