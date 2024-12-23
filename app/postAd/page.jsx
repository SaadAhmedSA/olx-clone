"use client";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../config/firebase";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import logo from "@/public/logo.png";
import mob from "@/public/mob.png";
import car from "@/public/car.png";
import item1 from "@/public/house.png";
import item2 from "@/public/rent.png";
import item3 from "@/public/cmera.png";
import item4 from "@/public/bike.png";
import item5 from "@/public/agri.png";
import item6 from "@/public/service.png";
import item7 from "@/public/jobs.png";
import item8 from "@/public/animals.png";
import item9 from "@/public/furniture.png";
import item10 from "@/public/fashion.png";

const Page = () => {
  const router = useRouter();

  // Check authentication status on page load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        Swal.fire({
          title: "Please login to post an Ad",
          icon: "warning",
          confirmButtonText: "OK",
        }).then(() => {
          router.push("/");
        });
      }
    });

    return () => unsubscribe();
  }, [router]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    location: "",
    phoneNumber: "",
    sellerName: "",
    condition: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);

  const categories = [
    "Electronics",
    "Vehicles",
    "motorcycle",
    "Furniture",
    "Real Estate",
    "Fashion",
    "Services",
    "Jobs",
    "Books & Hobbies",
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!formData.title || !formData.description || !formData.price || !formData.category) {
        return Swal.fire("Error", "Please fill all required fields", "error");
      }

      // Create a FormData instance for file upload
      const uploadData = new FormData();
      uploadData.append("file", formData.image);
      uploadData.append("upload_preset", "helloworld");

      // Upload the image to Cloudinary
      const response = await fetch("https://api.cloudinary.com/v1_1/dlvklue5t/image/upload", {
        method: "POST",
        body: uploadData,
      });

      
      
      const imageData = await response.json();
      const imageUrl = imageData.url;
      // console.log(imageurl);

      // Prepare ad data
      const adData = {
        title: formData.title,
        description: formData.description,
        price: formData.price,
        category: formData.category,
        location: formData.location,
        phoneNumber: formData.phoneNumber,
        sellerName: formData.sellerName,
        condition : formData.condition,
        image: imageUrl, // Cloudinary image URL
        createdAt: new Date(),
      };

      // Save ad data to Firestore
      await addDoc(collection(db, "ads"), adData);
      console.log(adData);
      

      Swal.fire("Success", "Ad posted successfully!", "success");

      // Reset form
      setFormData({
        title: "",
        description: "",
        price: "",
        category: "",
        location: "",
        phoneNumber: "",
        sellerName: "",
        condition:"",
        image: null,
      });
    } catch (error) {
      console.error("Error posting ad:", error);
      Swal.fire("Error", "Something went wrong while posting the ad!", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="m-2 border-b-2 py-2 flex items-center h-50">
        <Link href={"/"}>
          <FaArrowAltCircleLeft className="h-10 w-10" />
        </Link>
        <Image src={logo} alt={"logo"} height={80} width={80} className="mx-10" />
      </div>
      <div className="flex justify-around flex-wrap">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">Post Your Ad</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Product Image</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select a category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Condition</label>
              <input
                type="text"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Seller Name</label>
              <input
                type="text"
                name="sellerName"
                value={formData.sellerName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {loading ? "Posting..." : "Post Ad"}
          </button>
        </form>
        <div className="flex gap-20 mt-10  w-half text-center">
          <div>

           <div >
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
             
          </div>
          <div>
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

              </div>
              <div>
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
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;
