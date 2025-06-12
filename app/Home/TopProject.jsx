"use client";
import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaClock, FaTools, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PopupContext } from "../context/PopupContext";

function TopProject() {
  const { setOpenPopup } = useContext(PopupContext);
  const carouselData = [
    {
      img: "/projectsample.jpg",
      seoTitle: "High-Quality Construction Materials",
      seoDescription:
        "We use top-grade, certified materials to ensure durable and sustainable construction results.",
    },
    {
      img: "/build.jpeg",
      seoTitle: "Luxurious Villa Construction",
      seoDescription:
        "Crafting elegant villas with premium architecture and precision engineering tailored to your dreams.",
    },
    {
      img: "/v1.jpg",
      seoTitle: "Residential Project Development",
      seoDescription:
        "End-to-end residential construction solutions — from planning to final execution with quality assurance.",
    },
    {
      img: "/pic1.jpeg",
      seoTitle: "Modern Apartment Projects",
      seoDescription:
        "Expertise in constructing multi-floor apartment buildings with modern design and eco-friendly systems.",
    },
    {
      img: "/sikka.jpeg",
      seoTitle: "Commercial Space Development",
      seoDescription:
        "We specialize in high-end commercial buildings with functionality, safety, and elegance in mind.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselData.length]);

  const ourServiceGoodies = [
    {
      title: "Quality Material Use",
      description: "We use only high-grade and durable materials.",
      icon: <FaTools className="text-white text-2xl" />,
    },
    {
      title: "Time Management",
      description: "We stick to deadlines and ensure prompt delivery.",
      icon: <FaClock className="text-white text-2xl" />,
    },
    {
      title: "From Workshop to Home",
      description: "Direct delivery from our workshop to your doorstep.",
      icon: <MdDeliveryDining className="text-white text-2xl" />,
    },
  ];

  const ourServices = [
    {
      img: "pic1.jpeg",
      title: "Residential Building Construction",
      description:
        "From blueprint to build, we create sturdy and beautiful homes.",
    },
    {
      img: "pic2.jpeg",
      title: "Commercial Building Projects",
      description:
        "Modern and functional commercial structures tailored to your needs.",
    },
    {
      img: "pic3.jpeg",
      title: "Architectural Design",
      description:
        "Creative and practical architectural planning for all building types.",
    },
    {
      img: "pic1.jpeg",
      title: "Project Management",
      description:
        "Timely and cost-effective construction project execution and management.",
    },
    {
      img: "pic2.jpeg",
      title: "Renovation & Remodeling",
      description:
        "Upgrade existing structures with modern and efficient designs.",
    },
  ];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % carouselData.length);
  };

  return (
    <section className="max-w-[100vw] overflow-hidden">
      {/* Image Carousel */}
      <div className="relative w-screen h-[600px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={carouselData[index].img}
            src={carouselData[index].img}
            alt={carouselData[index].seoTitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </AnimatePresence>

        <motion.div
          key={index}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-0 left-0 md:pl-18 w-full h-full bg-black/50 flex flex-col justify-center items-start px-6 sm:px-12 text-white"
        >
          <h2 className="text-2xl sm:text-4xl font-bold">
            {carouselData[index].seoTitle}
          </h2>
          <p className="text-sm sm:text-base mt-2 max-w-md">
            {carouselData[index].seoDescription}
          </p>
        </motion.div>

        {/* Controls */}
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="cursor-pointer hidden sm:block absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white/90 text-black hover:bg-white p-3 rounded-full shadow-md"
        >
          <FaChevronLeft className="text-xl" />
        </button>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="cursor-pointer hidden sm:block absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white/90 text-black hover:bg-white p-3 rounded-full shadow-md"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>

      {/* Goodies */}
      <div className="bg-black py-8 px-4 flex flex-col md:flex-row justify-around items-center text-white gap-4">
        {ourServiceGoodies.map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-center">
            {item.icon}
            <div>
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Our Services */}

      <div className="py-16 bg-gradient-to-t from-[#1f1e25] via-[#282829] to-[#c7c7c7]">
        <div className="text-center">
          {" "}
          <h2 className="text-3xl font-extrabold  text-center mb-10 text-green-800 relative inline-block">
            Our Premium Services
            <span className="block h-1 w-20 bg-green-600 rounded mt-2 mx-auto"></span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {ourServices.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-semibold text-green-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 flex-grow">{service.description}</p>
              <button
                onClick={() => {
                  setOpenPopup(true);
                }}
                type="button"
                className="mt-6 cursor-pointer bg-green-700 text-white font-medium px-5 py-3 rounded-lg hover:bg-green-800 transition-colors"
              >
                Get Connect
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 sm:px-12 py-12 bg-white">
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold">Why Choose Us?</h3>
          <p className="mt-4 text-md max-w-md">
            We deliver top-quality interior designs tailored to your lifestyle
            and preferences. Our team ensures a smooth process from consultation
            to final installation. Attention to detail, client satisfaction, and
            commitment to excellence are our hallmarks.
          </p>
          <button
            onClick={() => setOpenPopup(true)}
            type="button"
            className="mt-4 cursor-pointer bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <FaPhoneAlt /> Call Now
          </button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img src="/trust.jpeg" alt="About Us" className="w-full rounded-xl" />
        </div>
      </div>

      {/* Happy Clients Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between px-6 md:px-16 py-12 bg-gray-50 gap-6">
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold">We Make Family, Not Clients</h3>
          <p className="mt-4 text-md max-w-md">
            With hundreds of happy customers, we pride ourselves in building
            relationships that last. Read our client reviews and see how we’ve
            transformed homes across the city.
          </p>
          <button
            onClick={() => setOpenPopup(true)}
            className="mt-4 bg-green-600 cursor-pointer text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <FaWhatsapp /> WhatsApp Us
          </button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="/client.jpeg"
            alt="Happy Clients"
            className="w-full rounded-xl max-h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default TopProject;
