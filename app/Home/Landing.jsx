import React, { useContext } from "react";
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { PopupContext } from "../context/PopupContext";
import { motion } from "framer-motion";

function Landing() {
  const { setOpenPopup } = useContext(PopupContext);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.2, duration: 0.6 },
    },
  };

  return (
    <section
      className="relative w-screen min-h-screen mt-10 md:mt-0 bg-cover bg-center flex items-center justify-center px-6 md:px-16 py-12"
      style={{ backgroundImage: "url('/sikka2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 text-white space-y-6"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold leading-tight"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Sikka Samrat Residency
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Discover your dream home – luxury apartments in the heart of the
            city with all modern amenities. Step into your better life today.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpenPopup(true)}
            className="px-8 py-3 cursor-pointer bg-white text-black rounded-md hover:bg-gray-300 transition font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Book a Visit
          </motion.button>
        </motion.div>

        {/* Right Content */}
        {/* <motion.div
          className="w-full md:w-1/2 bg-white/10 backdrop-blur-sm rounded-xl p-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 gap-4">
            {["/pic1.jpeg", "/pic2.jpeg", "/pic3.jpeg", "/pic1.jpeg"].map((src, i) => (
              <motion.img
                key={src}
                src={src}
                custom={i}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                alt="Residence"
                className={`rounded-lg h-40 object-cover shadow-lg ${
                  i === 2 ? "col-span-2" : ""
                }`}
              />
            ))}
          </div>
        </motion.div> */}
      </div>

      {/* Social Icons */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-6 text-white text-2xl"
        variants={socialVariants}
        initial="hidden"
        animate="visible"
      >
        {[FaTwitter, FaFacebook, RiInstagramFill, FaYoutube].map(
          (Icon, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="transition cursor-pointer duration-300 hover:text-opacity-80" />
            </motion.div>
          )
        )}
      </motion.div>
    </section>
  );
}

export default Landing;