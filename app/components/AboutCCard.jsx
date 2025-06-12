"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function AboutCCard({ data }) {
  const { img, title, para } = data;
  const [animate, setAnimate] = useState(false);

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setAnimate(true)}
      onMouseLeave={() => setAnimate(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="w-[300px] h-[400px]">
        <img
          className="w-full h-full object-cover rounded-xl cursor-pointer"
          src={img}
          alt={title}
        />
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={animate ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-80 rounded-b-xl"
      >
        <h1 className="text-white text-xl font-bold">{title}</h1>
        <p className="text-gray-400 text-sm">{para}</p>
      </motion.div>
    </motion.div>
  );
}

export default AboutCCard;