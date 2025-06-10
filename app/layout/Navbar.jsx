"use client";
import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between fixed top-0 w-screen z-50 items-center bg-gray-800 text-white p-4">
      <div>
        <h1>Sikka Samrat Residency</h1>
      </div>
      <div className="flex space-x-4 justify-center items-center">
        <h1>Home</h1>
        <h1>Projects</h1>
        <h1>Service</h1>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>
    </nav>
  );
}

export default Navbar;