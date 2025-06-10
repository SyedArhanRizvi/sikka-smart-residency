"use client";
import React from "react";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Enquiry() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row bg-[#fefefe] px-6 py-10 md:py-16 items-center justify-center gap-10">
      {/* Left Section */}
      <div className="flex flex-col gap-6 md:w-1/2">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            Sikka Smart Residency – <br className="hidden md:block" />
            <span className="text-yellow-500">Home to 200+ Happy Families</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg">
            Discover a lifestyle where luxury meets community. Nestled in the
            heart of Delhi-NCR, Sikka Smart Residency stands as a testament to
            modern architecture and happy living.
          </p>
        </div>
        <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md">
          <img
            className="w-full h-full object-cover"
            src="/happy.jpeg"
            alt="Happy Family"
          />
        </div>
      </div>
      {/* Right Section - Form */}
      <div className="bg-white shadow-xl rounded-xl p-8 w-full md:w-[450px] space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-black mb-2">Let’s Connect</h2>

          <p className="text-gray-500 text-sm">
            Have questions or want to schedule a visit? Drop your details and
            we'll get back to you shortly.
          </p>
        </div>
        <form className="flex flex-col gap-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Your Name"
              className="pl-10 pr-3 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Your Email"
              className="pl-10 pr-3 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="relative">
            <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="number"
              placeholder="Phone Number"
              className="pl-10 pr-3 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <textarea
            placeholder="Your Message"
            className="min-h-[120px] rounded-lg border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export default Enquiry;
