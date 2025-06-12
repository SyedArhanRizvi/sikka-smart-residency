"use client";
import React, { useState } from "react";

function AboutCCard({ data }) {
  const { img, title, para } = data;
  const [animate, setAnimate] = useState(false);

  return (
    <div
      className="relative"
      onClick={() => setAnimate(true)}
      onMouseEnter={() => setAnimate(true)}
      onMouseLeave={()=>setAnimate(false)}
    >
      <div className="w-[300px] h-[400px]">
        <img className="w-[100%] rounded-xl cursor-pointer h-[100%] object-cover" src={img} alt={title} />
      </div>
      {/* <div
        className="w-full bg-black"
        style={
          animate
            ? { position: "absolute", bottom: 0, left: 0 }
            : { position: "absolute", bottom: -100, left: 0 }
        }
      >
        <h1 className="text-white text-xl font-bold">{title}</h1>
        <p className="text-gray-500 text-sm ">{para}</p>
      </div> */}
    </div>
  );
}

export default AboutCCard;