"use client";
import React, { useContext } from "react";
import AboutCCard from "../components/AboutCCard";
import AboutCCard2 from "../components/AboutCCard2";
import { PopupContext } from "../context/PopupContext";

function AboutUs() {
  const projectsDone = [
    {
      img: "/pic1.jpeg",
      title: "This is demo 1.",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium aspernatur iure tempore quidem quibusdam",
    },
    {
      img: "/pic2.jpeg",
      title: "This is demo 2.",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium aspernatur iure tempore quidem quibusdam",
    },
    {
      img: "/pic3.jpeg",
      title: "This is demo 3.",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium aspernatur iure tempore quidem quibusdam",
    },
    {
      img: "/pic1.jpeg",
      title: "This is demo 4.",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium aspernatur iure tempore quidem quibusdam",
    },
  ];
  const { setOpenPopup } = useContext(PopupContext);
  return (
    <section className="w-screen flex bg-black">
      {/* Left Side Container */}
      <div className="w-[45%] p-16 ">
        <div className="w-full p-5 flex flex-col justify-between gap-5">
          {/* This is for about us info */}
          <div className="flex flex-col gap-3">
            <p className="text-md text-gray-300">About Us</p>
            <h1 className="text-2xl md:text-4xl text-white">
              We Have Experience In This Field
            </h1>
            <p className="text-sm text-gray-500">
              With a legacy of trust and excellence, Sikka Group brings you
              Samrat Residency – a fusion of innovation and tradition. Our
              experience has helped thousands of families find their dream homes
              with confidence and comfort.
            </p>
          </div>

          {/* About Our Team And Experience */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <p className="text-white text-2xl font-bold">28+</p>
                <p className=" text-sm text-gray-400">Experience</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <p className="text-white text-2xl font-bold">255+</p>
                <p className=" text-sm text-gray-400">Team Mambers</p>
              </div>
            </div>
            {/* About Our Projects And Clients */}
            <div className="flex flex-col md:flex-row justify-between text-center items-center">
              <div className="flex flex-col justify-center  items-center gap-2">
                <p className="text-white text-2xl font-bold">500+</p>
                <p className=" text-sm text-gray-400">Projects</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <p className="text-white text-2xl font-bold">605+</p>
                <p className=" text-sm text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={() => setOpenPopup(true)}
              className="px-8 py-2 rounded-md cursor-pointer text-white bg-[#009b6a]"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Right Side Carousel Container  */}
      <div className="w-[55%] flex justify-center items-center overflow-x-auto gap-5 pl-[450px]">
        {projectsDone &&
          projectsDone.map((data, idx) =>
            idx % 2 === 0 ? (
              <AboutCCard data={data} key={idx}></AboutCCard>
            ) : (
              <AboutCCard2 data={data} key={idx}></AboutCCard2>
            )
          )}
      </div>
    </section>
  );
}

export default AboutUs;
