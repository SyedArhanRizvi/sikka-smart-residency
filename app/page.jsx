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
import Quetions from './Home/Quetions'

function page() {
  return (
    <main className='overflow-x-hidden'>
      <Landing></Landing>
      <CompletedProjects></CompletedProjects>
      <Quetions></Quetions>
      <Experienced></Experienced>
      <AboutUs></AboutUs>
      {/* <Projects></Projects> */}
      <Enquiry></Enquiry>
      <RunningProj></RunningProj>
      <TopProject></TopProject>
    </main>
  )
}

export default page
