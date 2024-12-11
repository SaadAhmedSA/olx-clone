
"use client"
import React, { useEffect } from 'react'
import Swal from 'sweetalert2';

const page = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("User logged in:", currentUser);
      } else {
       Swal.fire({
        title : "Please login for post Ad"
       })
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className='h-[100vh] flex items-center justify-center'>form</div>
  )
}

export default page