"use client"
import React from 'react'
import Landing from './Home/Landing'
import Experienced from './Home/Experienced'
import Projects from './Home/Projects'
import Enquiry from './Home/Enquiry'
import TopProject from './Home/TopProject'

function page() {
  return (
    <>
      <Landing></Landing>
      <Experienced></Experienced>
      <Projects></Projects>
      <Enquiry></Enquiry>
      <TopProject></TopProject>
    </>
  )
}

export default page
