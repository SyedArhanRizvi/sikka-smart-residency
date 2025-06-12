"use client"
import React from 'react'
import Landing from './Home/Landing'
import Experienced from './Home/Experienced'
import Projects from './Home/Projects'
import Enquiry from './Home/Enquiry'
import TopProject from './Home/TopProject'
import AboutUs from './Home/AboutUs'
import RunningProj from './Home/RunningProj'
import CompletedProjects from './Home/CompletedProjects'

function page() {
  return (
    <>
      <Landing></Landing>
      <CompletedProjects></CompletedProjects>
      <Experienced></Experienced>
      <AboutUs></AboutUs>
      {/* <Projects></Projects> */}
      <Enquiry></Enquiry>
      <RunningProj></RunningProj>
      <TopProject></TopProject>
    </>
  )
}

export default page
