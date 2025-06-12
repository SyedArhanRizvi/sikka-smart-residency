import React, { useContext } from "react";
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { PopupContext } from "../context/PopupContext";
import { motion } from "framer-motion";
function Landing() {
  const { setOpenPopup } = useContext(PopupContext);
  return (
    <section
      className="relative w-screen min-h-screen bg-cover bg-center flex items-center justify-center px-6 md:px-16 py-12"
      style={{ backgroundImage: "url('/sikka2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-white space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Sikka Samrat Residency
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Discover your dream home – luxury apartments in the heart of the
            city with all modern amenities. Step into your better life today.
          </p>
          <button
            onClick={() => setOpenPopup(true)}
            className="px-8 py-3 bg-white text-black rounded-md hover:bg-gray-300 transition font-medium"
          >
            Book a Visit
          </button>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              animate={{ x: [null, 100, 0] }} 
              src="/pic1.jpeg"
              alt="Living Room"
              className="rounded-lg h-40 object-cover shadow-lg"
            />
            <motion.img
              animate={{ x: [0, 100, 0] }}
              src="/pic2.jpeg"
              alt="Bedroom"
              className="rounded-lg h-40 object-cover shadow-lg"
            />
            <motion.img
              animate={{ x: [0, 100, 0] }}
              src="/pic3.jpeg"
              alt="Kitchen"
              className="rounded-lg h-40 object-cover shadow-lg col-span-2"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-6 text-white text-2xl">
        <FaTwitter className="hover:text-blue-400 transition" />
        <FaFacebook className="hover:text-blue-600 transition" />
        <RiInstagramFill className="hover:text-pink-500 transition" />
        <FaYoutube className="hover:text-red-600 transition" />
      </div>
    </section>
  );
}

export default Landing;
