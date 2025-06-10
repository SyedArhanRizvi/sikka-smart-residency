"use client";
import React from "react";

function Experienced() {
  return (
    <section className="w-screen flex flex-col md:flex-row justify-around items-center bg-[#ffffc1] p-10 text-black gap-5">
      <div className="flex flex-col gap-5 md:gap-6 md:w-[70%]">
        <p className="text-gray-500">SIKKA SMART RESIDENCY</p>
        <h1 className="md:text-3xl font-bold">We Experience In This Fields</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          deserunt labore recusandae cupiditate accusantium, explicabo,
          perferendis error ducimus cumque officiis rem assumenda nostrum
          suscipit officia odit mollitia? <br /> Soluta, omnis sed. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex justify-between md:justify-around items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl md:text-2xl font-bold">28+</h1>
            <p className="text-sm md:text-xl">Work Experience</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl md:text-2xl font-bold">894+</h1>
            <p className="text-sm md:text-xl">Project Completed</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl md:text-2xl font-bold">42+</h1>
            <p className="text-sm md:text-xl">Ongoing Sites</p>
          </div>
        </div>
        <button className="px-6 py-3 text-black font-semibold bg-[#f5db49] rounded-md cursor-pointer transition duration-300">Enquiry Now</button>
      </div>

      <div>
        <img src="/build.jpeg" alt="" />
      </div>
    </section>
  );
}

export default Experienced;
