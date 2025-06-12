"use client";
import React, { useContext } from "react";
import CPCard from "../components/CPCard";
import { PopupContext } from "../context/PopupContext";

function CompletedProjects() {
  const { setOpenPopup } = useContext(PopupContext);
  
  const projectsData = [
    {
      img: "/pic1.jpeg",
      idx: 0,
      title: "Luxury Apartments",
      para1: "Experience a refined lifestyle with our ultra-luxury apartments.",
      para2:
        "Experience a refined lifestyle with our ultra-luxury apartments, crafted to offer unmatched comfort, contemporary aesthetics, and world-class amenities in the vibrant heart of the city.",
    },

    {
      img: "/pic2.jpeg",
      idx: 1,
      title: "Smart Villas",
      para1: "Experience a refined lifestyle with our ultra-luxury apartments.",
      para2:
        "Experience a refined lifestyle with our ultra-luxury apartments, crafted to offer unmatched comfort, contemporary aesthetics, and world-class amenities in the vibrant heart of the city.",
    },
    {
      img: "/pic3.jpeg",
      idx: 2,
      title: "Modern Towers",
      para1:
        "Standing tall as architectural marvels, these sleek towers provide a panoramic city view.",
      para2:
        "Experience a refined lifestyle with our ultra-luxury apartments, crafted to offer unmatched comfort, contemporary aesthetics, and world-class amenities in the vibrant heart of the city.",
    },
    {
      img: "/pic1.jpeg",
      idx: 3,
      title: "Family Residencies",
      para1:
        "Thoughtfully designed for growing families, these residencies offer secure gated living.",
      para2:
        "Experience a refined lifestyle with our ultra-luxury apartments, crafted to offer unmatched comfort, contemporary aesthetics, and world-class amenities in the vibrant heart of the city.",
    },
  ];
  return (
    <section className="w-screen flex flex-col gap-10 justify-center items-center bg-black p-10">
      <div className="text-white md:w-[35%] border-b-2 border-t-2 border-white flex flex-col gap-3 p-4 justify-center items-center text-center">
        <h1 className="md:text-4xl font-bold font-serif">SIKKA SMART</h1>
        <p className="md:text-2xl font-bold font-serif">
          Provide real estate brokeerage, advice and property management skills
        </p>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique et
          reprehenderit doloremque voluptates perspiciatis tempore, minus, culpa
          dignissimos, consectetur voluptas sapiente quas molestiae velit earum
          quia magnam voluptatem labore aliquid?
        </p>
        <button
          onClick={() => setOpenPopup(true)}
          className="py-2 px-7 cursor-pointer hover:bg-white hover:text-black delay-10 transition-all font-bold border-2 border-white"
        >
          About Us
        </button>
      </div>

      {/* Projects Show Case Section  */}
      <div className="flex flex-col justify-center  items-center gap-10">
        {projectsData &&
          projectsData.map((data, idx) => {
            return <CPCard data={data} key={idx}></CPCard>;
          })}
      </div>
    </section>
  );
}

export default CompletedProjects;
