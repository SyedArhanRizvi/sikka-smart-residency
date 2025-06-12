"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { PopupContext } from "../context/PopupContext";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "Services", path: "#service-section" },
  { name: "Projects", path: "#our-projects-section" },
  { name: "About Us", path: "#about-us-section" },
];

function Navbar() {
  const { setOpenPopup } = useContext(PopupContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY < lastScrollY.current || currentScrollY < 50);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[90vw] left-1/2 -translate-x-1/2 fixed top-2 md:top-2 rounded-3xl z-50 backdrop-blur-xl bg-[#1f1f1f]/80 border border-white/10 shadow-lg transition-all"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image
              src="/sikka.png"
              alt="Noida Sofa Maker"
              fill
              sizes="(max-width: 768px) 40px, 44px"
              className="object-contain"
              priority
            />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl italic font-bold tracking-wider text-transparent bg-gradient-to-r from-[#D4AF37] to-gray-300 bg-clip-text flex items-center gap-2"
          >
            {" "}
            SikkaSmartResidency
          </motion.h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-wrap gap-6 md:gap-8 lg:gap-12 items-center text-sm font-medium">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whilehover={{ scale: 1.05 }}
              className="relative group"
            >
              <a
                href={link.path}
                className="text-white transition-all duration-300 hover:text-gray-200 uppercase tracking-wider"
              >
                {link.name}
              </a>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </motion.div>
          ))}
          <motion.div whilehover={{ scale: 1.05 }}>
            <p
              onClick={() => setOpenPopup(true)}
              className="whitespace-nowrap cursor-pointer bg-white text-black px-4 py-2 rounded-full font-semibold uppercase shadow hover:bg-gray-100 transition duration-300"
            >
              Contact Us
            </p>
          </motion.div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-white hover:text-gray-200 transition"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0e0e0e] backdrop-blur-lg px-6 py-4 border-t border-white/10 rounded-b-2xl"
          >
            <div className="flex flex-col gap-5 z-50">
              {navLinks.map((link) => (
                <motion.div key={link.name} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-gray-200 uppercase tracking-wider font-medium transition duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact-us"
                  onClick={() => setIsOpen(false)}
                  className="bg-white text-black text-center px-4 py-2 rounded-full font-semibold uppercase shadow hover:bg-gray-100 transition duration-300"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
