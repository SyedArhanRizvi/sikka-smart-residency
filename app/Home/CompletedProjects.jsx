"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import CPCard from "../components/CPCard";
import { PopupContext } from "../context/PopupContext";

function CompletedProjects() {
  const { setOpenPopup } = useContext(PopupContext);

  const projectsData = [
    {
      img: "/pic1.jpeg",
      idx: 0,
      title: "Luxury Apartments",
      para1: "Experience a refined lifestyle with our ultra-luxury apartments.",
      para2:
        "Experience a refined lifestyle with our ultra-luxury apartments, crafted to offer unmatched comfort, contemporary aesthetics, and world-class amenities in the vibrant heart of the city.",
    },
    {
      img: "/pic2.jpeg",
      idx: 1,
      title: "Smart Villas",
      para1: "Experience a refined lifestyle with our ultra-luxury apartments.",
      para2:
        "Experience a refined lifestyle with our ultra-luxury apartments, crafted to offer unmatched comfort, contemporary aesthetics, and world-class amenities in the vibrant heart of the city.",
    },
    {
      img: "/pic3.jpeg",
      idx: 2,
      title: "Modern Towers",
      para1:
        "Standing tall as architectural marvels, these sleek towers provide a panoramic city view.",
      para2:
        "Experience a refined lifestyle with our ultra-luxury apartments, crafted to offer unmatched comfort, contemporary aesthetics, and world-class amenities in the vibrant heart of the city.",
    },
    {
      img: "/pic1.jpeg",
      idx: 3,
      title: "Family Residencies",
      para1:
        "Thoughtfully designed for growing families, these residencies offer secure gated living.",
      para2:
        "Experience a refined lifestyle with our ultra-luxury apartments, crafted to offer unmatched comfort, contemporary aesthetics, and world-class amenities in the vibrant heart of the city.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-screen flex flex-col gap-10 justify-center items-center bg-black p-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white md:w-[35%] border-b-2 border-t-2 border-white flex flex-col gap-3 p-4 justify-center items-center text-center"
      >
        <h1 className="text-xl md:text-4xl font-bold font-serif">SIKKA SMART</h1>
        <p className="font-light md:text-2xl md:font-bold font-serif">
          Provide real estate brokerage, advice and property management skills
        </p>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique et
          reprehenderit doloremque voluptates perspiciatis tempore, minus, culpa
          dignissimos, consectetur voluptas sapiente quas molestiae velit earum
          quia magnam voluptatem labore aliquid?
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpenPopup(true)}
          className="py-2 px-7 cursor-pointer hover:bg-white hover:text-black delay-10 transition-all font-bold border-2 border-white"
        >
          About Us
        </motion.button>
      </motion.div>

      {/* Projects Showcase Section */}
      <motion.div
        className="flex flex-col justify-center items-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projectsData.map((data, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <CPCard data={data} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default CompletedProjects;
