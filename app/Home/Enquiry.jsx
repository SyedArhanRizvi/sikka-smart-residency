"use client";
import React from "react";

function Enquiry() {
  return (
    <section className="w-screen flex flex-col md:flex-row justify-center items-center bg-[#f5f5f5]">
      {/* Left Section */}
      <div className="flex flex-col md:w-[50%] gap-10 p-5 bg-[#f5f5f5]">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl text-black font-semibold">
            Sikka Smart Residency, With 200+ Famlies
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia
            ullam culpa quibusdam sunt placeat! Modi repudiandae soluta, sed
            autem officia earum laboriosam fuga optio, eum deleniti praesentium.
            Nobis, mollitia.
          </p>
        </div>
        <div className="w-full h-[300px]">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/happy.jpeg"
            alt=""
          />
        </div>
      </div>

      {/* Right Section For Form */}
      <div className="flex flex-col md:w-[50%] gap-2 p-5 bg-[#f5f5f5]">
        <div className="p-6">
          <h1 className="font-bold text-2xl">Let's Connect</h1>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            earum ipsum autem illo sit. Voluptatibus, minima velit numquam porro
            in consequatur sed hic fugiat rerum doloremque exercitationem, autem
            maiores magnam!
          </p>
        </div>
        <form className="flex flex-col gap-4 p-5">
          <input
            type="text"
            className="p-2 w-full h-[50px] rounded-xl border-2 border-gray-300"
            placeholder="Enter your name here.."
          />
          <input
            type="text"
            className="p-2 w-full h-[50px] rounded-xl border-2 border-gray-300"
            placeholder="Enter your email here.."
          />
          <input
            type="number"
            className="p-2 w-full h-[50px] rounded-xl border-2 border-gray-300"
            placeholder="Enter your phone no. here.."
          />
          <textarea type="text" className="border-2 border-gray-300 min-h-[100px] rounded-xl p-2" placeholder="Enter your message here.." />
          <input
            type="submit"
            className="px-4 py-2 text-black border-1 border-black rounded-md cursor-pointer transition duration-300"
          />
        </form>
      </div>
    </section>
  );
}

export default Enquiry;
