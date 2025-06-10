"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function TopProject() {
  return (
    <section className="w-full flex flex-col bg-[#fefefe] text-black px-6 py-12 gap-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          A Realm Worthy of Your Legacy
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
          Ultra-Luxury Villas & Apartments in Sector 79, Noida. Central Noida’s
          Only Address with Infinity Pool, Rooftop Dining, and Private
          Concierge.
        </p>
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-400 transition">
          Know More <FaArrowRight className="inline ml-2" />
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">
            Introduction to the Project
          </h2>

          <p className="text-gray-600">
            Samrat Residencies is a world crafted for achievers, visionaries,
            and legacy-makers. Situated in Central Noida’s Sector 79, this
            ultra-luxury development offers expansive 4 BHK apartments (6161 sq.
            ft.) and exclusive 10,000 sq. ft. private villas with personal
            pools.
          </p>

          <a href="#" className="text-yellow-600 font-medium hover:underline">
            Learn More
          </a>
        </div>
        <img
          src="/v1.jpg"
          alt="Residency"
          className="rounded-xl w-full md:w-1/2 shadow-md object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">About the Builder</h2>
          <p className="text-gray-600">
            With over two decades of trust and excellence, Sikka Group is known
            for building landmark real estate across Delhi-NCR. Samrat
            Residencies is their crown jewel—fusing bold design with timeless
            value.
          </p>

          <a href="#" className="text-yellow-600 font-medium hover:underline">
            Learn More
          </a>
        </div>
        <img
          src="/v2.jpeg"
          alt="Builder"
          className="rounded-xl w-full md:w-1/2 shadow-md object-cover"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">
          Features, Amenities & Benefits
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 list-disc pl-6">
          <li>Private infinity pool – only in Central Noida</li>
          <li>Rooftop restaurant & lounge with skyline views</li>
          <li>Private villas with pools & courtyards</li>
          <li>6161 sq. ft. ultra-luxury apartments</li>
          <li>Wellness spa, fitness studio, concierge desk</li>
          <li>Low-density living with high-end privacy</li>
        </ul>
        <div className="text-center">
          <a href="#" className="text-yellow-600 font-medium hover:underline">
            See More
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">
          About the Location
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          Located in the prestigious Sector 79 of Central Noida, Samrat
          Residencies enjoys seamless access to the Sector 101 Metro Station,
          FNG Expressway, Noida Expressway, and the city’s top hospitals,
          schools, and retail hubs.
        </p>
        <div className="text-center">
          <a href="#" className="text-yellow-600 font-medium hover:underline">
            See More
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">Layout Options</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 list-disc pl-6">
          <li>4 BHK Apartments – 6161 sq. ft.</li>
          <li>4 & 5 BHK Villas – 10,000 sq. ft. with private pools</li>
          <li>Expansive balconies, dual lounges, high ceilings</li>
          <li>Customization options available in villas</li>
        </ul>
        <div className="text-center">
          <a href="#" className="text-yellow-600 font-medium hover:underline">
            Explore Layouts
          </a>
        </div>
      </div>

      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold">Your Legacy, Your Home</h2>
        <p className="text-gray-700">
          Your home should reflect not just your lifestyle—but your legacy. At
          Samrat Residencies, we don’t sell addresses. We offer realms for those
          who command respect without saying a word.
        </p>
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-400 transition">
          Schedule a Visit <FaArrowRight className="inline ml-2" />
        </button>
      </div>
    </section>
  );
}

export default TopProject;
