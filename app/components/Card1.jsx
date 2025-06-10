"use client"
import React from 'react'

function Card1({data}) {
    const { img, title, paragraph } = data;
  return (
    <div className='md:w-[300px] bg-white p-2 flex flex-col items-center justify-center rounded-xl'>
      <div className='w-full h-[250px]'><img className='w-full h-full' src={img} alt="" /></div>
      <div className='w-full flex flex-col gap-2'>
        <h1 className='text-xl font-bold text-black'>This is demo card</h1>
        <p className='text-black text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum ullam placeat architecto cum voluptatem, beatae ea atque, alias accusantium quis id. Rerum quod est rem eaque ut aut commodi.</p>
        <button className="bg-green-500 text-white cursor-pointer font-medium px-4 py-2 rounded-md hover:bg-green-400 transition duration-300 text-center items-center">Go To</button>
      </div>
    </div>
  )
}

export default Card1
