"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCar, FaSearch, FaPlus } from "react-icons/fa";
import { BsFillHousesFill } from "react-icons/bs";
import { FaLocationDot ,FaCircleUser} from "react-icons/fa6";
import { onAuthStateChanged, signOut } from "firebase/auth";
// Adjust your Firebase config import path
import logo from "@/public/logo.png";
import Image from "next/image";
import Modal from "./login";
import { auth } from "../config/firebase";

const Subnavber = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null); // Track user state
  const [menu, setmenu] = useState(true); // Track user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []);

  const locations = [
    "Pakistan",
    "Islamabad",
    "Karachi",
    "Lahore",
    "Peshawar",
    "Quetta",
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Reset user state
      console.log("User logged out");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <div className="bg-white fixed top-0 left-0 right-0 z-50">
      {/* Top Navigation */}
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

      {/* Bottom Navigation */}
      <div className="bg-white flex flex-wrap md:flex-row items-center gap-6 px-10 py-2 border-b-4">
        {/* Location Selector */}
        <select id="location" className="border lg:w-[300px] lg:pr-28 p-3">
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>

        {/* Search Bar */}
        <form className="flex justify-center w-auto">
          <input
            type="text"
            placeholder="Find cars, mobile phones and more..."
            className="border-2 lg:w-[700px] px-3 py-2"
          />
          <FaSearch className="bg-black w-16 text-white py-2 h-14" />
        </form>

        {/* Conditional Login/Profile Dropdown */}
        {!user ? (
          <button
            onClick={openModal}
            className="underline text-lg font-bold text"
          >
            Login
          </button>
        ) : (
          <div className="relative">
            <button className="relative w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <FaCircleUser onClick={() => setmenu(!menu)}/>
            </button>
           { menu &&
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md">
              <Link
                href={"/profile"}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>}
          </div>
        )}

        {/* Modal Component */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />

        {/* Sell Button */}
        <button className="border-4 rounded-full border-t-yellow-300 border-b-blue-300 border-x-green-600 px-4 py-2">
          <Link href={"/Ad"} className="flex gap-1 items-center">
            <FaPlus />
            Sell
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Subnavber;
