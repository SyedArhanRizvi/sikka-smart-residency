import React from "react";
import { FaTwitter } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa6";

import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";

function Landing() {
  return (
    <section
      style={{
        backgroundImage: "url('/sikka2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-screen bg-white p-10 text-black min-h-screen gap-5 flex justify-center items-center md:flex-row flex-col"
    >
      <div className="h-full w-full bg-[#00000057] top-0 left-0 absolute"></div>

      <div className="flex mt-26 p-5 md:z-50  flex-col bg-[#1515156b] justify-end items-center md:w-[40%]">
        <div className="flex w-full gap-10 mb-5">
          <h1 className="text-white text-2xl">
            <FaTwitter />
          </h1>
          <h1 className="text-white text-2xl">
            <FaFacebook />
          </h1>
          <h1 className="text-white text-2xl">
            <RiInstagramFill />
          </h1>
          <h1 className="text-white text-2xl">
            <FaYoutube />{" "}
          </h1>
        </div>
        <div>
          <p className="md:text-lg text-sm text-white mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            accusamus omnis? Nesciunt, ducimus impedit, commodi quibusdam ullam
            cum autem, odit voluptate itaque incidunt nihil accusamus dolores!
            Fuga illum harum distinctio!
          </p>
          <button className="px-6 py-3 text-black bg-white rounded-md cursor-pointer transition duration-300">
            Explore Now
          </button>
        </div>
      </div>

      <div className="flex flex-col md:w-[60%] gap-10 p-5 md:z-50 bg-[#07070781]">
        <div className="flex flex-col items-start text-white md:w-[60%]">
          <h1 className="text-xl md:text-3xl font-semibold mb-4">
            Sikka Samrat Residency A Full Home Solution
          </h1>
          <button className="px-6 py-3 text-white border-white border-1 rounded-md cursor-pointer transition duration-300">
            Explore More
          </button>
        </div>

        <div className="flex justify-center items-center md:flex-row gap-8">
          <div className="w-[150px] md:w-[33%] h-[200px]">
            <img className="w-full h-full" src="/pic1.jpeg" alt="" />
          </div>
          <div className="w-[150px] md:w-[33%] h-[200px]">
            <img className="w-full h-full" src="/pic2.jpeg" alt="" />
          </div>
          <div className="w-[150px] md:w-[33%] h-[200px]">
            <img className="w-full h-full" src="/pic3.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
