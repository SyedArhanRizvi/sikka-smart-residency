"use client";
import React from "react";
import { FaBuilding } from "react-icons/fa";
import Card1 from "../components/Card1";

function Projects() {
  const projectsData = [
    {
      img: "/pic1.jpeg",
      title: "Luxury Apartments",
      paragraph: "Premium living spaces designed for elegance and comfort in the heart of the city.",
    },
    {
      img: "/pic2.jpeg",
      title: "Smart Villas",
      paragraph: "A blend of technology and nature, these villas are built with intelligent architecture.",
    },
    {
      img: "/pic3.jpeg",
      title: "Modern Towers",
      paragraph: "Our modern towers redefine urban living with sleek design and premium features.",
    },
    {
      img: "/pic1.jpeg",
      title: "Family Residencies",
      paragraph: "Perfectly built for families, combining safety, luxury, and convenience.",
    },
  ];

  return (
    <section className="w-full bg-[#f3f4f6] py-14 px-4 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="flex justify-center items-center text-3xl text-green-700 mb-2">
          <FaBuilding />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Completed Projects
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Discover the legacy of construction excellence. Each project is crafted with precision, innovation, and a vision for timeless value.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {projectsData.map((project, idx) => (
          <Card1 data={project} key={idx} />
        ))}
      </div>
    </section>
  );
}

export default Projects;