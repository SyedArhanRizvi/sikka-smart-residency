"use client";
import React, { useContext, useEffect } from "react";
import { PopupContext } from "../context/PopupContext";

const ContactPopupForm = () => {
  const { openPopup, setOpenPopup } = useContext(PopupContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [setOpenPopup]);

  if (!openPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
        <button
          onClick={() => setOpenPopup(false)}
          className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-500"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4">Enquire Now</h2>
        <p className="text-sm mb-2">
          Interested in experiencing Samrat Residencies?
        </p>
        <ul className="text-sm mb-4 text-gray-600 space-y-1">
          <li>📍 Visit: Sector 79, Noida</li>
          <li>📞 Call: +91-XXXXXXXXXX</li>
          <li>📧 Email: info@sikkasamrat.in</li>
        </ul>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded px-3 py-2"
            required
          />

          <input
            type="tel"
            placeholder="Contact Number"
            className="w-full border rounded px-3 py-2"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded px-3 py-2"
            required
          />

          <select className="w-full border rounded px-3 py-2">
            <option>Preferred Unit Type</option>
            <option>4 BHK Apartment</option>
            <option>4 BHK Villa</option> <option>5 BHK Villa</option>
          </select>

          <select className="w-full border rounded px-3 py-2">
            <option>Schedule a Site Visit?</option>
            <option>Yes</option> <option>No</option>
          </select>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-400 transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>{" "}
    </div>
  );
};

export default ContactPopupForm;
