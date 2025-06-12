"use client";
import React, { useState } from "react";
import {motion} from "framer-motion"
function AboutCCard2({ data }) {
  const { img, title, para } = data;
  const [animate, setAnimate] = useState(false)

  return (
    <div
      whilehover={() => setAnimate(true)}
      onMouseLeave={() => setAnimate(false)}
      whilehover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="h-[400px] cursor-pointer relative flex flex-col items-center gap-5"
    >
      {[1, 2].map((item) => (
        <div
          key={item}
          className="group w-[300px] h-[48%] relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <img
            className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
            src={img}
            alt={title}
          />
          {/* Overlay */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={animate ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex flex-col justify-end p-4"
          >
            <h1 className="text-white text-xl font-semibold mb-1">{title}</h1>
            <p className="text-white text-sm">{para}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default AboutCCard2;