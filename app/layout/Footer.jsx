"use client";

import Link from "next/link";
import React, {  useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  return (
    <footer className=" text-white bg-black px-6 md:px-20 py-14 w-full">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Quick Links</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/interior-services-in-noida-ghaziabad-greater-noida"
                className="hover:underline"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/complete-interior-projects"
                className="hover:underline"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Contact Us</h3>
          <p className="text-gray-300 flex items-center gap-2">
            <FaEnvelope /> infosample@gmail.com
          </p>
          <p className="text-gray-300 cursor-pointer hover:text-gray-400 flex items-center gap-2">
            <FaPhoneAlt
              onClick={() => (window.location.href = `tel:919999999999`)}
            />{" "}
            +91 9999999999
          </p>
          <p className="text-gray-300 cursor-pointer hover:text-gray-400 flex items-center gap-2">
            <FaPhoneAlt
              onClick={() => (window.location.href = `tel:919999999999`)}
            />{" "}
            +91 9999999999
          </p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => (window.location.href = `tel:919999999999`)}
              className="bg-white cursor-pointer text-black font-medium px-4 py-2 rounded-md hover:bg-yellow-300 transition duration-300 flex items-center gap-2"
            >
              <FaPhoneAlt /> Call Now
            </button>
            <button
              onClick={() => {
                router.push("/contact-us");
              }}
              className="bg-green-500 text-white cursor-pointer font-medium px-4 py-2 rounded-md hover:bg-green-400 transition duration-300 flex items-center gap-2"
            >
              <FaWhatsapp /> Enquiry
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Schedule a Meeting
          </h3>
          <form
            method="POST"
            action="https://api.whatsapp.com/send?phone=919999999999"
            className="flex flex-col space-y-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-[#1a1a1a] px-4 py-2 text-white rounded-md outline-none border border-gray-600"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="email"
              placeholder="Your Phone"
              className="bg-[#1a1a1a] px-4 py-2 text-white rounded-md outline-none border border-gray-600"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <select
              name="day"
              className="bg-[#1a1a1a] px-4 py-2 text-white rounded-md outline-none border border-gray-600"
              required
              value={day}
              onChange={(e) => setDay(e.target.value)}
            >
              <option value="">Preferred Day</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
            <input
              type="time"
              name="time"
              className="bg-[#1a1a1a] px-4 py-2 text-white rounded-md outline-none border border-gray-600"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <button
              type="submit"
              className="bg-white text-black font-medium px-4 py-2 rounded-md hover:bg-yellow-300 transition duration-300"
            >
              Schedule via WhatsApp
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
        <p>
          We provide premium builders services across <strong>Noida</strong>,{" "}
          <strong>Greater Noida</strong>, and <strong>Ghaziabad</strong> —
          specializing in residenial, living spaces, and turnkey
          solutions.
        </p>
        <p className="mt-4">
          &copy; 2018 - {new Date().getFullYear()} Your Interior Studio. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
