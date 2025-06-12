"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { PopupContext } from "../context/PopupContext";

function TopProject() {
  const { setOpenPopup } = useContext(PopupContext);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const sectionFade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <motion.section
      className="w-full flex flex-col bg-[#fefefe] text-black px-6 py-12 gap-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionFade}
    >
      {/* Header Section */}
      <motion.div
        className="text-center space-y-4"
        custom={1}
        variants={fadeInUp}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          A Realm Worthy of Your Legacy
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
          Ultra-Luxury Villas & Apartments in Sector 79, Noida. Central Noida’s
          Only Address with Infinity Pool, Rooftop Dining, and Private
          Concierge.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpenPopup(true)}
          className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-400 transition flex items-center justify-center gap-2 mx-auto"
        >
          Know More <FaArrowRight />
        </motion.button>
      </motion.div>

      {/* Intro Section */}
      <motion.div
        className="flex flex-col md:flex-row gap-6 items-center"
        variants={fadeInUp}
        custom={2}
      >
        <motion.div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">
            Introduction to the Project
          </h2>
          <p className="text-gray-600">
            Samrat Residencies is a world crafted for achievers, visionaries,
            and legacy-makers...Samrat Residencies is a world crafted for
            achievers, visionaries, and legacy-makers...Samrat Residencies is a
            world crafted for achievers, visionaries, and legacy-makers...Samrat
            Residencies is a world crafted for achievers, visionaries, and
            legacy-makers...
          </p>
          <p
            onClick={() => setOpenPopup(true)}
            className="text-yellow-600 font-medium cursor-pointer hover:underline"
          >
            Learn More
          </p>
        </motion.div>
        <motion.img
          src="/v1.jpg"
          alt="Residency"
          className="rounded-xl w-full md:w-1/2 shadow-xl object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* Builder Section */}
      <motion.div
        className="flex flex-col md:flex-row-reverse gap-6 items-center"
        variants={fadeInUp}
        custom={3}
      >
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">About the Builder</h2>
          <p className="text-gray-600">
            With over two decades of trust and excellence, Sikka Group With over
            two decades of trust and excellence, Sikka Group With over two
            decades of trust and excellence, Sikka Group With over two decades
            of trust and excellence, Sikka Group With over two decades of trust
            and excellence, Sikka Group...
          </p>
          <p
            onClick={() => setOpenPopup(true)}
            className="text-yellow-600 font-medium cursor-pointer hover:underline"
          >
            Learn More
          </p>
        </div>
        <motion.img
          src="/v2.jpeg"
          alt="Builder"
          className="rounded-xl w-full md:w-1/2 shadow-xl object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* Features Section */}
      <motion.div className="space-y-4" variants={fadeInUp} custom={4}>
        <h2 className="text-2xl font-semibold text-center">
          Features, Amenities & Benefits
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 list-disc pl-6">
          <li>Private infinity pool – only in Central Noida</li>
          <li>Rooftop restaurant & lounge with skyline views</li>
          <li>Private villas with pools & courtyards</li>
          <li>6161 sq. ft. ultra-luxury apartments</li>
          <li>Wellness spa, fitness studio, concierge desk</li>
          <li>Low-density living with high-end privacy</li>
        </ul>
        <div className="text-center">
          <p
            onClick={() => setOpenPopup(true)}
            className="text-yellow-600 font-medium cursor-pointer hover:underline"
          >
            See More
          </p>
        </div>
      </motion.div>

      {/* Location Section */}
      <motion.div className="space-y-4" variants={fadeInUp} custom={5}>
        <h2 className="text-2xl font-semibold text-center">
          About the Location
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          Located in the prestigious Sector 79 of Central Noida...
        </p>
        <div className="text-center">
          <p
            onClick={() => setOpenPopup(true)}
            className="text-yellow-600 font-medium cursor-pointer hover:underline"
          >
            See More
          </p>
        </div>
      </motion.div>

      {/* Layout Section */}
      <motion.div className="space-y-4" variants={fadeInUp} custom={6}>
        <h2 className="text-2xl font-semibold text-center">Layout Options</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 list-disc pl-6">
          <li>4 BHK Apartments – 6161 sq. ft.</li>
          <li>4 & 5 BHK Villas – 10,000 sq. ft. with private pools</li>
          <li>Expansive balconies, dual lounges, high ceilings</li>
          <li>Customization options available in villas</li>
        </ul>
        <div className="text-center">
          <p
            onClick={() => setOpenPopup(true)}
            className="text-yellow-600 font-medium cursor-pointer hover:underline"
          >
            Explore Layouts
          </p>
        </div>
      </motion.div>

      {/* Final CTA Section */}
      <motion.div
        className="text-center space-y-4 max-w-4xl mx-auto"
        variants={fadeInUp}
        custom={7}
      >
        <h2 className="text-2xl font-semibold">Your Legacy, Your Home</h2>
        <p className="text-gray-700">
          Your home should reflect not just your lifestyle—but your legacy...
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpenPopup(true)}
          className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-400 transition flex items-center justify-center gap-2"
        >
          Schedule a Visit <FaArrowRight />
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

export default TopProject;
