import Image from 'next/image'
import React from 'react'
import foot from "@/public/footer.webp"
import down from "@/public/down.svg"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div>
        <div className='flex justify-evenly h-100 items-center flex-wrap  text-black'>
            <Image src={foot} alt='footer' width={400} height={100}/>
            <div className='w-1/4'>
                <h1 className='text-2xl pb-5 font-bold'>Try the OLX App</h1>
                <p>Buy, sell and find just about anything using the app on your mobile.</p>
            </div>
            <div className='border-l-2 border-black pl-4'>
            <h1 className='text-2xl pb-5 font-bold'>Get your App Today</h1>

            <div className='flex'>
            <Image src={down} alt='footer' width={100} height={50}/>
            <Image src={down} alt='footer' width={100} height={50}/>
            <Image src={down} alt='footer' width={100} height={50}/>
            </div>

            </div>
        </div>
        <div className='flex justify-around flex-wrap p-5 text-gray-800 text-sm bg-gray-400 gap-10 '>
         <div>
            <h1 className='text-xl font-bold'>Popular Categories</h1>
            <br />
            <ul>
                <li>Cars</li>
                <li>flat for Rent</li>
                <li>Mobile Phones</li>
                <li>Jobs</li>
            </ul>
         </div>
         <div>
            <h1 className='text-xl font-bold'>Trending Searches</h1>
            <br />
            <ul>
                <li>Dogs</li>
                <li>Bikes</li>
                <li>Books</li>
                <li>Watches</li>
            </ul>
         </div>
         <div>
            <h1 className='text-xl font-bold'>About us</h1>
            <br />
            <ul>
                <li>About Dubizzles Group</li>
                <li>Olx blogs</li>
                <li>Contact us</li>
                <li>OLX for business</li>
            </ul>
         </div>
         <div>
            <h1 className='text-xl font-bold'>OLX</h1>
            <br />
            <ul>
                <li>Helps</li>
                <li>Terms of use</li>
                <li>Sitemap</li>
                <li>Privacy Policy</li>
            </ul>
         </div>
       <div>
       <h1 className='text-xl font-bold'>Follow on</h1>
       <br />

       <div className="flex space-x-4">
            <a href="https://www.facebook.com/OLXPakistan" className="text-xl hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/OLXPakistan" className="text-xl hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/olxpakistan/" className="text-xl hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/olx-pakistan" className="text-xl hover:text-blue-700">
              <FaLinkedinIn />
            </a>
          </div>

       </div>
        </div>
        <div className=" bg-black text-white border-gray-600 py-6">
          <div className="text-center text-sm">
            <p>© 2024 OLX Pakistan. All Rights Reserved.</p>
          </div>
        </div>
    </div>
  )
}

export default Footer