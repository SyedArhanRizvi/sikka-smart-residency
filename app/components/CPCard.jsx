"use client";
import React, { useContext } from "react";
import { PopupContext } from "../context/PopupContext";

function CPCard({ data }) {
  const { img, title, para1, para2, idx } = data;
  const { setOpenPopup } = useContext(PopupContext);
  return (
    <div
      className="w-[850px] h-[320px]  relative flex"
      style={
        idx % 2 === 0 ? { justifyContent: "end" } : { justifyContent: "start" }
      }
    >
      {/* Image Container */}
      <div className="w-[60%]">
        <img className="w-[100%] h-[100%] object-cover" src={img} alt={title} />
      </div>

      {/* Absolute Position Div For Meta Info */}
      <div
        style={
          idx % 2 === 0
            ? {
                left: 0,
                top: 35,
                borderLeftWidth: "5px",
                borderLeftColor: "[#e87f0e]",
              }
            : { right: 0, top: 35, borderRightWidth: "5px" , borderRightColor: "[#e87f0e]", }
        }
        className="absolute w-[400px] p-5 gap-3 flex flex-col  bg-black  border-amber-600"
      >
        <h1 className="text-white text-2xl font-bold font-serif">{title}</h1>
        <p className=" font-serif text-gray-300">{para1}</p>
        <p className="text-sm text-gray-500">{para2}</p>
        <button
        onClick={()=>setOpenPopup(true)}
        className="px-7 py-2 cursor-pointer hover:bg-white hover:text-black delay-100 transition-all bg-black text-white font-bold border-2 border-white">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default CPCard;
