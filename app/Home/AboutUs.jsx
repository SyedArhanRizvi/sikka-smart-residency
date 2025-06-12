"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import AboutCCard from "../components/AboutCCard";
import AboutCCard2 from "../components/AboutCCard2";
import { PopupContext } from "../context/PopupContext";

function AboutUs() {
  const projectsDone = [
    {
      img: "/pic1.jpeg",
      title: "Creative Space 1",
      para: "We blend design and technology to build solutions that inspire and engage across diverse industries.",
    },
    {
      img: "/pic2.jpeg",
      title: "Creative Space 2",
      para: "From concept to launch, we ensure every step reflects originality, quality, and user delight.",
    },
    {
      img: "/pic3.jpeg",
      title: "Creative Space 3",
      para: "Empowering ideas with digital solutions that shape the future and enhance lifestyles.",
    },
    {
      img: "/pic1.jpeg",
      title: "Creative Space 4",
      para: "Delivering thoughtful designs and functional builds tailored to the needs of modern users.",
    },
    {
      img: "/pic2.jpeg",
      title: "Creative Space 5",
      para: "Innovation meets impact – turning ideas into interactive, purposeful realities.",
    },
    {
      img: "/pic3.jpeg",
      title: "Creative Space 6",
      para: "Built with intention, scaled for growth – we believe in lasting impressions.",
    },
    {
      img: "/pic1.jpeg",
      title: "Creative Space 7",
      para: "Driven by creativity and fueled by passion, we craft solutions that speak for themselves.",
    },
    {
      img: "/pic2.jpeg",
      title: "Creative Space 8",
      para: "We focus on precision, performance, and people-centric outcomes that resonate.",
    },
  ];

  const { setOpenPopup } = useContext(PopupContext);

  return (
    <section className="w-full flex flex-col md:flex-row bg-black py-10 px-4">
      {/* Left Side Content */}
      <motion.div
        className="md:w-1/2 w-full p-4 flex flex-col gap-6"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <p className="text-md text-green-400">About Us</p>
          <h1 className="text-3xl md:text-4xl text-white font-serif mt-2">
            Crafting Tomorrow’s Digital Stories
          </h1>
          <p className="text-sm text-gray-400 mt-4">
            At the heart of our work is a deep commitment to creativity,
            customer-centric solutions, and forward-thinking design. We believe
            in delivering more than products — we create meaningful digital
            experiences that resonate with people.
          </p>
        </div>

        {/* Highlight Section */}
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-white text-3xl font-bold">40+</p>
            <p className="text-sm text-gray-400">Solutions Delivered</p>
          </div>
          <div>
            <p className="text-white text-3xl font-bold">300K+</p>
            <p className="text-sm text-gray-400">Users Impacted</p>
          </div>
          <div>
            <p className="text-white text-3xl font-bold">95%</p>
            <p className="text-sm text-gray-400">Client Retention</p>
          </div>
          <div>
            <p className="text-white text-3xl font-bold">24/7</p>
            <p className="text-sm text-gray-400">Support Availability</p>
          </div>
        </div>

        <button
          onClick={() => setOpenPopup(true)}
          className="mt-6 px-6 cursor-pointer py-3 flex items-center gap-2 rounded-md bg-[#009b6a] text-white hover:bg-green-700 transition"
        >
          <BsFillTelephoneOutboundFill size={20} />
          Contact Us
        </button>
      </motion.div>

      {/* Right Side Carousel */}
      <motion.div
        className="md:w-1/2 w-full flex overflow-x-auto overflow-y-hidden gap-5 p-4 md:p-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {projectsDone.map((data, idx) =>
          idx % 2 === 0 ? (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ x: 100, opacity: 0.5 }}
              animate={{ x: -2000, opacity: 1 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <AboutCCard data={data} />
            </motion.div>
          ) : (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ x: 100, opacity: 0.5 }}
              animate={{ x: -2000, opacity: 1 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <AboutCCard2 data={data} />
            </motion.div>
          )
        )}
      </motion.div>
    </section>
  );
}

export default AboutUs;
