"use client";
import React from "react";
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Landing() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-screen min-h-screen bg-cover bg-center flex items-center justify-center px-6 md:px-16 py-12"
        style={{ backgroundImage: "url('/sikka2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70 z-0" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">
          {/* Left */}
          <div className="w-full md:w-1/2 text-white space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Sikka Samrat Residency
            </h1>
            <p className="text-lg text-gray-300">
              Discover your dream home – luxury apartments in the heart of the city with all modern amenities. Step into your better life today.
            </p>
            <p className="text-sm text-gray-400 italic">
              With over two decades of trust and excellence, <strong>Sikka Group</strong> is known for building landmark real estate across Delhi-NCR. <br />
              <span className="text-white font-semibold">Samrat Residencies</span> is their crown jewel—fusing bold design with timeless value.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-white text-black rounded-md hover:bg-gray-300 transition font-medium">
                Book a Visit
              </button>
              <button className="px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="grid grid-cols-2 gap-4">
              <img src="/pic1.jpeg" alt="Living Room" className="rounded-lg h-40 object-cover shadow-lg" />
              <img src="/pic2.jpeg" alt="Bedroom" className="rounded-lg h-40 object-cover shadow-lg" />
              <img src="/pic3.jpeg" alt="Kitchen" className="rounded-lg h-40 object-cover shadow-lg col-span-2" />
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-6 text-white text-2xl">
          <FaTwitter className="hover:text-blue-400 transition" />
          <FaFacebook className="hover:text-blue-600 transition" />
          <RiInstagramFill className="hover:text-pink-500 transition" />
          <FaYoutube className="hover:text-red-600 transition" />
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-screen flex flex-col md:flex-row justify-around items-center bg-[#ffffc1] p-10 text-black gap-10">
        <div className="flex flex-col gap-5 md:gap-6 md:w-[60%]">
          <p className="text-gray-500 text-sm tracking-wide">SIKKA SMART RESIDENCY</p>
          <h2 className="md:text-4xl text-2xl font-bold">We Have Experience In This Field</h2>
          <p className="text-base text-gray-800">
            With a legacy of trust and excellence, Sikka Group brings you Samrat Residency – a fusion of innovation and tradition. <br />
            Our experience has helped thousands of families find their dream homes with confidence and comfort.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="flex flex-col justify-center items-center bg-yellow-100 p-4 rounded-md shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold">28+</h3>
              <p className="text-xs md:text-base text-gray-600">Years Experience</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-yellow-100 p-4 rounded-md shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold">894+</h3>
              <p className="text-xs md:text-base text-gray-600">Projects Completed</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-yellow-100 p-4 rounded-md shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold">42+</h3>
              <p className="text-xs md:text-base text-gray-600">Ongoing Sites</p>
            </div>
          </div>

          <button className="mt-6 w-fit px-6 py-3 bg-[#f5db49] text-black font-semibold rounded-md hover:bg-yellow-300 transition">
            Enquiry Now
          </button>
        </div>

        <div className="w-full md:w-[35%]">
          <img src="/build.jpeg" alt="Builder Image" className="rounded-xl shadow-md w-full h-full object-cover" />
        </div>
      </section>
    </>
  );
}

export default Landing;