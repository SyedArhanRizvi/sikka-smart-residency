"use client";
import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between md:pr-10 fixed top-0 w-screen z-50 items-center bg-gray-800 text-white p-6">
      <div>
        <h1 className="md:text-2xl md:font-bold">Sikka Samrat Residency</h1>
      </div>
      <div className="flex space-x-7 justify-center items-center">
        <h1 className="cursor-pointer hover:text-gray-400">Home</h1>
        <h1 className="cursor-pointer hover:text-gray-400">Projects</h1>
        <h1 className="cursor-pointer hover:text-gray-400">Service</h1>
        <h1 className="cursor-pointer hover:text-gray-400">About</h1>
        <h1 className="cursor-pointer hover:text-gray-400">Contact</h1>
      </div>
    </nav>
  );
}

export default Navbar;