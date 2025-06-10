"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Card1({ data }) {
  const { img, title, paragraph } = data;

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-sm hover:shadow-2xl hover:scale-[1.025] transition-all duration-300 ease-in-out">
      <div className="h-52 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col justify-between gap-4 h-[280px]">
        <h3 className="text-xl font-semibold text-gray-900 leading-snug">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{paragraph}</p>

        <button className="mt-auto flex items-center gap-2 self-start px-5 py-2.5 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-500 transition-colors duration-300">
          Explore <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Card1;
