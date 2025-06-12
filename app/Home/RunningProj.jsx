"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const projectsDone = [
  {
    img: "/pic1.jpeg",
    title: "Luxury Redesign 1",
    para: "An elite building crafted with architectural excellence and modern materials.An elite building crafted with architectural excellence and modern materials.An elite building crafted with architectural excellence and modern materials  architectural excellence and modern materials.An elite building crafted with architectural excellence and modern materials.",
  },
  {
    img: "/pic2.jpeg",
    title: "Smart Workspace 2",
    para: "Integrating eco-design and smart sensors for a future-ready office environment.Integrating eco-design and smart sensors for a future-ready office environment.Integrating eco-design and smart sensors for a future-ready office environment.Integrating eco-design and smart sensors for a future-ready office environment.",
  },
  {
    img: "/pic3.jpeg",
    title: "Zen Garden 3",
    para: "Combining peace and design — a place where nature meets technology.Combining peace and design — a place where nature meets technology.Combining peace and design — a place where nature meets technology.Combining peace and design — a place where nature meets technology.",
  },
  {
    img: "/pic1.jpeg",
    title: "Urban Living 4",
    para: "Perfect harmony of work and home in one intelligently designed space.Perfect harmony of work and home in one intelligently designed space.Perfect harmony of work and home in one intelligently designed space.Perfect harmony of work and home in one intelligently designed space.",
  },
];

const RunningProj = () => {
  return (
    <section className="w-full bg-[#0e0e0e] text-white py-10 px-4 md:px-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-3 text-yellow-500 text-2xl">
          <FaMapMarkerAlt />
          <h2 className="text-3xl md:text-5xl font-bold font-serif">
            12 TAI SANG LINK
          </h2>
        </div>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Re-designed next-generation building in vibrant Paya Lebar with
          cutting-edge architecture.
        </p>
      </div>

      {/* Project Cards as Split Sections */}
      <div className="space-y-20">
        {projectsDone.map((proj, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col-reverse md:flex-row items-center gap-10 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            {/* Text */}
            <div className="w-full flex flex-col gap-3 md:w-1/2 px-4">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-300">{proj.para}</p>
              <div className="flex flex-col md:flex-row gap-6">
                <button className="px-7 hover:bg-white delay-200 transition-all  hover:text-black cursor-pointer py-2 border-2 border-white rounded-md">
                  Call Now
                </button>
                <button className="px-7 bg-[#a1f406] delay-200 transition-all  text-black hover:text-white hover:bg-black cursor-pointer py-2 hover:border-2 hover:border-[#a1f406] rounded-md">
                  Whats App
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-lg hover:scale-105 transition-all duration-500 ease-in-out"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RunningProj;
