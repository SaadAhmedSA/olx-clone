"use client"
import Image from 'next/image'
import AutoSlider from './slider'
import mob from "@/public/mob.png"
import car from "@/public/car.png"
import item1 from "@/public/house.png"
import item2 from "@/public/rent.png"
import item3 from "@/public/cmera.png"
import item4 from "@/public/bike.png"
import item5 from "@/public/agri.png"
import item6 from "@/public/service.png"
import item7 from "@/public/jobs.png"
import item8 from "@/public/animals.png"
import item9 from "@/public/furniture.png"
import item10 from "@/public/fashion.png"
import item11 from "@/public/book.png"
import item12 from "@/public/kid.png"
import ProductCard from './Card'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase.js'


const Header = () => {
 const [data,setdata] = useState(null)
  useEffect(()=>{
// Function to fetch data
async function getDataFromFirestore() {
  try {
    const querySnapshot = await getDocs(collection(db, "ads"));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
      setdata(data)
    });
    console.log(data);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}
getDataFromFirestore()
  },[])
  
  return (
 <>
 <AutoSlider/>
 <div className='p-5 px-10 '>
<h1 className='text-2xl font-bold'>All Categories</h1>
<div className='pt-4 flex justify-start flex-wrap gap-10 text-center font-bold'>
    <div>
    <Image src={mob} alt='mob' width={100} height={100}/>
     <p>Mobiles</p>
    </div>
    <div>
    <Image src={car} alt='car' width={100} height={100}/>
     <p>Vehicles</p>
    </div>
    <div>
    <Image src={item1} alt='car' width={100} height={100}/>
     <p>Houses</p>
    </div>
    <div>
    <Image src={item2} alt='car' width={100} height={100}/>
     <p>Rent</p>
    </div>
    <div>
    <Image src={item3} alt='car' width={100} height={100}/>
     <p>Elecronic </p>
    </div>
    <div>
    <Image src={item4} alt='car' width={100} height={100}/>
     <p>Bike </p>
    </div>
    <div>
    <Image src={item5} alt='car' width={100} height={100}/>
     <p>Agriculture </p>
    </div>
    <div>
    <Image src={item6} alt='car' width={100} height={100}/>
     <p>Services </p>
    </div>
    <div>
    <Image src={item7} alt='car' width={100} height={100}/>
     <p>Jobs </p>
    </div>
   
    <div>
    <Image src={item8} alt='car' width={100} height={100}/>
     <p>Animals </p>
    </div>
   
    <div>
    <Image src={item9} alt='car' width={100} height={100}/>
     <p>Furiture </p>
    </div>
   
    <div>
    <Image src={item10} alt='car' width={100} height={100}/>
     <p>Beauty Fashion </p>
    </div>
   
    <div>
    <Image src={item11} alt='car' width={100} height={100}/>
     <p>Book & Sport</p>
    </div>
    <div>
    <Image src={item12} alt='car' width={100} height={100}/>
     <p>Kids </p>
    </div>
   
</div>
<h1 className='text-2xl font-bold py-10'>Bikes & MotorCycle</h1>
<div className='flex justify-evenly flex-wrap '>
  {data ? data.filter(item => item.category == "motorcycle").slice(0,4).map((item)=>{
    return(
  <ProductCard key={item.id} img={item.image} title={item.title} price={item.price} location={item.location} condition={item.condition}/>

    )
  }):
<h1 className='text-lg text-center'>Loading...</h1>
  }
</div>
<h1 className='text-2xl font-bold py-10'>Mobile Phones</h1>
<div className='flex justify-evenly flex-wrap '>
  {data ? data.filter(item => item.category == "Electronics").slice(0,4).map((item)=>{
    return(
  <ProductCard key={item.id} img={item.image} title={item.title} price={item.price} location={item.location} condition={item.condition}/>

    )
  }):
<h1 className='text-lg text-center'>Loading...</h1>
  }
</div>
<h1 className='text-2xl font-bold py-10'>Cars & Vehicles</h1>
<div className='flex justify-evenly flex-wrap '>
{data ? data.filter(item => item.category == "Vehicles").slice(0,4).map((item)=>{
    return(
  <ProductCard key={item.id} img={item.image} title={item.title} price={item.price} location={item.location} condition={item.condition}/>

    )
  }):
<h1 className='text-lg text-center'>Loading...</h1>
  }
</div>
<h1 className='text-2xl font-bold py-10'>Houses</h1>
<div className='flex justify-evenly flex-wrap '>
  {data ? data.filter(item => item.category == "Real Estate").slice(0,4).map((item)=>{
    return(
  <ProductCard key={item.id} img={item.image} title={item.title} price={item.price} location={item.location} condition={item.condition}/>

    )
  }):
<h1 className='text-lg text-center'>Loading...</h1>
  }
</div>
<h1 className='text-2xl font-bold py-10'>land & Plots</h1>
<div className='flex justify-evenly flex-wrap '>
  {data ? data.filter(item => item.category == "Real Estate").slice(0,4).map((item)=>{
    return(
  <ProductCard key={item.id} img={item.image} title={item.title} price={item.price} location={item.location} condition={item.condition}/>

    )
  }):
<h1 className='text-lg text-center'>Loading...</h1>
  }
</div>

 </div>
 </>
 
  )
}

export default Header