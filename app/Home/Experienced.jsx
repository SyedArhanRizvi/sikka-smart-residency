"use client";
import React, { useContext } from "react";
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { PopupContext } from "../context/PopupContext";

function Landing() {
  
    const { setOpenPopup } = useContext(PopupContext);
  return (
    <>
      <section className="w-screen flex flex-col md:flex-row justify-around items-center bg-[#ffffc1] p-10 text-black gap-10">
        <div className="flex flex-col gap-5 md:gap-6 md:w-[60%]">
          <p className="text-gray-500 text-sm tracking-wide">
            SIKKA SMART RESIDENCY
          </p>
          <h2 className="md:text-4xl text-2xl font-bold">
            We Have Experience In This Field
          </h2>
          <p className="text-base text-gray-800">
            With a legacy of trust and excellence, Sikka Group brings you Samrat
            Residency – a fusion of innovation and tradition. <br />
            Our experience has helped thousands of families find their dream
            homes with confidence and comfort.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="flex flex-col justify-center items-center bg-yellow-100 p-4 rounded-md shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold">28+</h3>
              <p className="text-xs md:text-base text-gray-600">
                Years Experience
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-yellow-100 p-4 rounded-md shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold">894+</h3>
              <p className="text-xs md:text-base text-gray-600">
                Projects Completed
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-yellow-100 p-4 rounded-md shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold">42+</h3>
              <p className="text-xs md:text-base text-gray-600">
                Ongoing Sites
              </p>
            </div>
          </div>

          <button
          onClick={()=>setOpenPopup(true)}
          className="mt-6 w-fit px-6 py-3 bg-[#f5db49] text-black font-semibold rounded-md hover:bg-yellow-300 transition">
            Enquiry Now
          </button>
        </div>

        <div className="w-full md:w-[35%]">
          <img
            src="/build.jpeg"
            alt="Builder Image"
            className="rounded-xl shadow-md w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
}

export default Landing;
