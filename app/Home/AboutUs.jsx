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
      title: "This is demo 1.",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium aspernatur iure tempore quidem quibusdam",
    },
    {
      img: "/pic2.jpeg",
      title: "This is demo 2.",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium aspernatur iure tempore quidem quibusdam",
    },
    {
      img: "/pic3.jpeg",
      title: "This is demo 3.",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium aspernatur iure tempore quidem quibusdam",
    },
    {
      img: "/pic1.jpeg",
      title: "This is demo 4.",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium aspernatur iure tempore quidem quibusdam",
    },
    {
      img: "/pic1.jpeg",
      title: "This is demo 1.",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium aspernatur iure tempore quidem quibusdam",
    },
    {
      img: "/pic2.jpeg",
      title: "This is demo 2.",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium aspernatur iure tempore quidem quibusdam",
    },
    {
      img: "/pic3.jpeg",
      title: "This is demo 3.",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium aspernatur iure tempore quidem quibusdam",
    },
    {
      img: "/pic1.jpeg",
      title: "This is demo 4.",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium aspernatur iure tempore quidem quibusdam",
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
          <h1 className="text-3xl md:text-5xl text-white font-semibold mt-2">
            We Have Experience In This Field
          </h1>
          <p className="text-sm text-gray-400 mt-4">
            With a legacy of trust and excellence, Sikka Group brings you Samrat
            Residency – a fusion of innovation and tradition. Our experience has
            helped thousands of families find their dream homes with confidence
            and comfort.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-white text-3xl font-bold">28+</p>
            <p className="text-sm text-gray-400">Years Experience</p>
          </div>
          <div>
            <p className="text-white text-3xl font-bold">255+</p>
            <p className="text-sm text-gray-400">Team Members</p>
          </div>
          <div>
            <p className="text-white text-3xl font-bold">500+</p>
            <p className="text-sm text-gray-400">Projects</p>
          </div>
          <div>
            <p className="text-white text-3xl font-bold">605+</p>
            <p className="text-sm text-gray-400">Happy Clients</p>
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
                repeatType: "reverse", // or "reverse", if you want it to bounce back
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
                repeatType: "reverse", // can also be "mirror" or "reverse"
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
