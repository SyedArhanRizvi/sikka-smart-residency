"use client";
import React, { useContext } from "react";
import Landing from "./Home/Landing";
import Experienced from "./Home/Experienced";
import Projects from "./Home/Projects";
import Enquiry from "./Home/Enquiry";
import TopProject from "./Home/TopProject";
import AboutUs from "./Home/AboutUs";
import RunningProj from "./Home/RunningProj";
import CompletedProjects from "./Home/CompletedProjects";
import Quetions from "./Home/Quetions";
import { motion } from "framer-motion";
import { PopupContext } from "./context/PopupContext";
function page() {
  const { setOpenPopup } = useContext(PopupContext);
  return (
    <main onClick={() => setOpenPopup(false)} className="overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        id="home"
      >
        <Landing></Landing>
      </motion.div>
      <motion.div
        id="our-projects-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <CompletedProjects></CompletedProjects>
      </motion.div>

      <Quetions></Quetions>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        id="about-us-section"
      >
        {" "}
        <Experienced></Experienced>
      </motion.div>

      <AboutUs></AboutUs>

      <Enquiry></Enquiry>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        id="service-section"
      >
        <RunningProj></RunningProj>
      </motion.div>
      <TopProject></TopProject>
    </main>
  );
}

export default page;
