"use client";
import React from "react";
import AboutCCard from "../components/AboutCCard";
import AboutCCard2 from "../components/AboutCCard2";

function RunningProj() {
  const projectsDone = [
    {
      img: "/pic1.jpeg",
      title: "This is demo 1.",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium aspernatur iure tempore quidem quibusdam atque molestias aliquid aut numquam, magnam aperiam, explicabo sed quo eveniet. Placeat consectetur sequi amet?",
    },
    {
      img: "/pic2.jpeg",
      title: "This is demo 2.",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium aspernatur iure tempore quidem quibusdam atque molestias aliquid aut numquam, magnam aperiam, explicabo sed quo eveniet. Placeat consectetur sequi amet?",
    },
    {
      img: "/pic3.jpeg",
      title: "This is demo 3.",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium aspernatur iure tempore quidem quibusdam atque molestias aliquid aut numquam, magnam aperiam, explicabo sed quo eveniet. Placeat consectetur sequi amet?",
    },
    {
      img: "/pic1.jpeg",
      title: "This is demo 4.",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium aspernatur iure tempore quidem quibusdam atque molestias aliquid aut numquam, magnam aperiam, explicabo sed quo eveniet. Placeat consectetur sequi amet?",
    },
  ];
  return (
    <section
      className="w-screen min-h-screen p-5  flex justify-center items-center "
      style={{ backgroundImage: 'url("/sikkabg2.jpg")' }}
    >
      <div className="w-[95%] h-[95%] overflow-hidden rounded-2xl flex flex-col p-5 gap-5 bg-black">
        <div className="flex p-10 flex-col justify-center items-center text-center bg-[#7e500a]">
          <h1 className="text-white font-serif font-bold text-2xl md:text-4xl">12 TAI SANG LINK</h1>
          <p className="text-white md:text-xl font-serif">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus ad iste ipsam, laborum praesentium..
          </p>
        </div>
        <div className="flex items-center border-b-1 m-3 border-[#6564647a]">
          <p className="text-white text-md font-bold">
            Re-designed new generation building in vibrant Paya laber
          </p>
        </div>
        <div className="flex justify-center items-center gap-5">
          {projectsDone &&
            projectsDone.map((data, idx) =>
              idx % 2 === 0 ? (
                <AboutCCard data={data} key={idx}></AboutCCard>
              ) : (
                <AboutCCard2 data={data} key={idx}></AboutCCard2>
              )
            )}
        </div>
      </div>
    </section>
  );
}

export default RunningProj;
