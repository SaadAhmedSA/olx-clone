"use client"

import React, { useState, useEffect } from 'react';
import banner1 from '@/public/banner1.jpg';
import banner2 from '@/public/banner 2.jpg';
import bannner3 from '@/public/bannner3.png';
import Image from 'next/image';
import Link from 'next/link';

const AutoSlider = () => {
  const slides = [banner2, banner1, bannner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    // Cleanup the interval when component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-full max-w-full mt-[140px] overflow-hidden mx-auto">
      {/* Flex container to hold all slides */} <div className='px-10 py-2 flex items-center gap-5
    '>
    <Link href={""} className='text-md  text-gray-700'>All CATEGORIES</Link>
    <Link href={""} className='text-sm  text-gray-700'>Moblie phones</Link>
    <Link href={""} className='text-sm  text-gray-700'>Home Applience</Link>
    <Link href={""} className='text-sm  text-gray-700'>Cars</Link>
    <Link href={""} className='text-sm  text-gray-700'>Motorcylces</Link>
    <Link href={""} className='text-sm text-gray-700'>Houses</Link>
    <Link href={""} className='text-sm  text-gray-700'>Tablets</Link>
    <Link href={""} className='text-sm  text-gray-700'>Lands</Link>
    <Link href={""} className='text-sm  text-gray-700'>Service</Link>
    <Link href={""} className='text-sm  text-gray-700'>Jobs</Link>

    </div>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Slide the container
        }}
      >
        {/* Render each image */}
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full  mx-2"> {/* Custom height and margin */}
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-72 object-cover"
              height={200} // Custom height
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
