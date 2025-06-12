"use client";
import React, { useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PopupContext } from "../context/PopupContext";

const ContactPopupForm = () => {
  const { openPopup, setOpenPopup } = useContext(PopupContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenPopup(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [setOpenPopup]);

  return (
    <AnimatePresence>
      {openPopup && (
        <motion.div
        onClick={()=>setOpenPopup(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 100 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-2xl overflow-hidden w-full max-w-4xl shadow-2xl relative flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpenPopup(false)}
              className="absolute cursor-pointer top-1 right-3 text-3xl font-bold text-gray-500 hover:text-red-600 z-10"
            >
              ×
            </button>

            {/* Left Section */}
            <div className="w-full md:w-1/2 p-6 bg-gradient-to-br from-black via-gray-900 to-gray-700 text-white flex flex-col justify-between">
              <img
                src="/build.jpeg"
                alt="Popup"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-semibold">Let's Connect!</h1>
                <p className="text-sm text-gray-300">
                  Have questions or inquiries about our services? Just drop your
                  details, and we’ll get back to you as soon as possible.
                </p>
                <button className="mt-3 px-6 py-2 border border-white hover:bg-white hover:text-black transition-all font-semibold rounded">
                  Call Now
                </button>
              </div>
            </div>

            {/* Right Section - Form */}
            <form
              className="w-full md:w-1/2 p-10 flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                // handleSubmit();
              }}
            >
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
                required
              />
              <motion.input
                whilehover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                value="Submit"
                className="bg-black text-white cursor-pointer py-2 rounded hover:bg-gray-800 transition-all"
              />
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopupForm;