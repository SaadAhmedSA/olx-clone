import React from 'react'

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
     <div>Property</div>
   </div>
  )
}

export default page
