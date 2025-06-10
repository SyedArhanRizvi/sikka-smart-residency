"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Card1({ data }) {
  const { img, title, paragraph } = data;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-[90%] max-w-[320px] hover:scale-[1.02] transition-transform duration-300">
      <div className="h-48 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5 flex flex-col justify-between h-[260px]">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-4">{paragraph}</p>
        <button className="mt-auto flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-500 transition duration-300">
          Explore <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Card1;
