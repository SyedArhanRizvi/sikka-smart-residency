"use client";
import React, { useContext } from "react";
import { PopupContext } from "../context/PopupContext";

function CPCard({ data }) {
  const { img, title, para1, para2, idx } = data;
  const { setOpenPopup } = useContext(PopupContext);

  const isEven = idx % 2 === 0;

  return (
    <div
      className={`w-full md:w-[800px] max-w-6xl mx-auto flex flex-col md:flex-row ${
        isEven ? "md:flex-row-reverse" : ""
      } items-center md:items-start relative gap-5 mb-10`}
    >
      {/* Image Section */}
      <div className="w-full md:w-2/3 h-[250px] md:h-[320px]">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={img}
          alt={title}
        />
      </div>

      {/* Info Box */}
      <div
        className={`w-full md:w-[400px] bg-black border-l-4 md:absolute p-5 rounded-md text-white ${
          isEven
            ? "md:left-0 md:top-6 border-l-amber-500"
            : "md:right-0 md:top-6 border-r-4 md:border-r-amber-500 border-l-0"
        }`}
      >
        <h1 className="text-2xl font-bold font-serif mb-2">{title}</h1>
        <p className="font-serif text-gray-300 mb-2">{para1}</p>
        <p className="text-sm text-gray-500 mb-4">{para2}</p>
        <button
          onClick={() => setOpenPopup(true)}
          className="px-6 py-2 text-sm font-semibold border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-200"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default CPCard;