"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { FaBuildingColumns, FaCar, FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import logo from "@/public/logo.png"
import Image from 'next/image';
import Modal from './login';
const Subnavber = () => {
  const locations = [
    "Pakistan",
    "Islamabad",
    "Karachi",
    "Lahore",
    "Peshawar",
    "Quetta",
    
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className='bg-white fixed top-0 left-0 right-0 z-50 '>
    <div className='flex justify-start items-center gap-8 px-10 pt-3'>
        <Image src={logo} alt='brand logo' width={80} />
        <Link href={""} className='flex gap-3 items-center '><FaCar  />Motors</Link>
        <Link href={""} className='flex gap-3 items-center '><FaBuildingColumns  />Property</Link>
    </div>
    <div className=' bg-white flex flex-wrap md:flex-row  items-center gap-6 px-10 py-2 border-b-4'>
        <select 
        id="location" 
        className='border lg:w-[300px] lg:pr-28  p-3'>
        {locations.map((location, index) => (
          <option key={index} value={location}>

            {location}
          </option>
        ))}
      </select>
      <form className='flex justify-center w-auto'>
        
      <input type="text" placeholder='Find cars,mobile phones and more...' className='
      border-2 lg:w-[700px]  px-3 py-2' />
      <FaSearch className='bg-black w-16 text-white py-2 h-14'/>
      </form>
      <button onClick={openModal} className='  underline text-lg font-bold text'>login</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <button className='border-4 rounded-full border-t-yellow-300  border-b-blue-300 border-x-green-600 px-4 py-2'><Link href={""} className='flex gap-1 items-center'><FaPlus/>Sell</Link></button>
    </div>
   
      </div>
  )
}

export default Subnavber