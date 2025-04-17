import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/public/logo.png"
import { BsFillHousesFill } from 'react-icons/bs'
import { FaCar } from 'react-icons/fa'

const page = () => {
  return (
    <div>
       <div className="flex justify-start items-center gap-8 px-10 pt-3">
        <Link href={"/"}>
          <Image src={logo} alt="brand logo" width={80} />
        </Link>
        <Link href={"/motor"} className="flex gap-3 items-center">
          <FaCar />
          Motors
        </Link>
        <Link href={"/Property"} className="flex gap-3 items-center">
        <BsFillHousesFill />
          Property
        </Link>
      </div>
<div>Motoor</div>
      
    </div>
  )
}

export default page
