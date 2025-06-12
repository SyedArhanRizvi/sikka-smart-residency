"use client";
import React from "react";

function Quetions() {
  return (
    <section className="w-screen p-5 bg-[#F6F6F6] flex justify-center items-center min-h-[50vh]">
      <div className="flex justify-center items-center gap-5 md:gap-16 md:flex-row flex-col">
        {/* This is Image Section */}
        <div className="overflow-hidden rounded-full h-[200px] w-[200px]">
          <img
            className="w-[100%] h-[100%] object-cover object-top"
            src="/userImg.jpeg"
            alt=""
          />
        </div>

        {/* This is acutal content section */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#44AFB7] text-3xl md:font-bold font-serif md:text-5xl">
              When You Have Questions.
            </h1>
            <p className="text-[#333741] font-bold md:text-2xl font-serif">
              Our Experts Team Has Your Answers
            </p>
          </div>
          <div className="w-[30%] border-b-2 border-[#D5AA49]"></div>
          <div className="flex gap-5 flex-wrap">
            <h1 className="md:text-2xl">
              <span className="font-bold">Call</span> (+91) - 9999999999
            </h1>
            <button className="px-8 cursor-pointer delay-100 transition-all py-3 rounded-full border-2 border-[#44AFB7] hover:bg-[#44AFB7] hover:text-white text-black">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quetions;
