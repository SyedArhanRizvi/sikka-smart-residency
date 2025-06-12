"use client";
import React, { useState } from "react";

function AboutCCard2({ data }) {
  const { img, title, para } = data;
  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);

  return (
    <div className="h-[400px] cursor-pointer relative flex flex-col items-center gap-5">
      {/* Div 1 */}
      <div
        className="w-[300px]  h-[48%]"
        onClick={() => setAnimate(true)}
        onMouseEnter={() => setAnimate(true)}
        onMouseLeave={() => setAnimate(false)}
      >
        <div className="w-[100%] h-[100%]">
          <img className="w-[100%] h-[100%] rounded-xl object-cover" src={img} alt={title} />
        </div>
        {/* <div
          className="w-full bg-black"
          style={
            animate
              ? { position: "absolute", bottom: 0, left: 0 }
              : { position: "absolute", bottom: -100, left: 0 }
          }
        >
          <h1 className="text-white text-xl">{title}</h1>
          <p className="text-white text-sm">{para}</p>
        </div> */}
      </div>

      {/* Div 2 */}
      <div
        className="w-[300px]  h-[48%]"
        onClick={() => setAnimate2(true)}
        onMouseEnter={() => setAnimate2(true)}
        onMouseLeave={() => setAnimate2(false)}
      >
        <div className="w-[100%] h-[100%]">
          <img className="w-[100%] h-[100%] rounded-xl object-cover" src={img} alt={title} />
        </div>
        {/* <div
          className="w-full bg-black"
          style={
            animate2
              ? { position: "absolute", bottom: 0, left: 0 }
              : { position: "absolute", bottom: -100, left: 0 }
          }
        >
          <h1 className="text-white text-xl">{title}</h1>
          <p className="text-white text-sm">{para}</p>
        </div> */}
      </div>
    </div>
  );
}

export default AboutCCard2;
