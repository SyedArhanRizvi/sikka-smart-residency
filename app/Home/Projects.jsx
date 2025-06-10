"use client";
import React from "react";
import Card1 from "../components/Card1";

function Projects() {
  const projectsData = [
    {
      img: "/pic1.jpeg",
      title: "Demo",
      paragraph: "lorem",
    },
    {
      img: "/pic2.jpeg",
      title: "Demo",
      paragraph: "lorem",
    },
    {
      img: "/pic3.jpeg",
      title: "Demo",
      paragraph: "lorem",
    },
    {
      img: "/pic1.jpeg",
      title: "Demo",
      paragraph: "lorem",
    },
  ];
  return (
    <section className="w-screen flex flex-col justify-center items-center bg-[#e4dfdf] p-10 text-black">
      <div className="w-[70%] text-center flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-black ">
          Our Completed Projects
        </h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dolor incidunt laudantium est obcaecati deserunt iste architecto
          voluptatem velit cumque tenetur, enim facilis rerum tempore excepturi
          hic reiciendis quam eius!
        </p>
      </div>
      <div className="w-full flex justify-center items-center flex-wrap gap-10 p-10">
        {projectsData &&
          projectsData.map((project, idx) => {
            return <Card1 data={project} key={idx}></Card1>;
          })}
      </div>
    </section>
  );
}

export default Projects;
