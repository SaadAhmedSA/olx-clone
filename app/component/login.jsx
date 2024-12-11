
import Image from "next/image";
import { useRef, useState } from "react";
import logo from "@/public/logo.png"
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.js";
import Swal from "sweetalert2";

const Modal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Track whether login or register is active

  const handleClose = () => {
    setIsLogin(true); // Reset to login when closing modal
    onClose();
  };
  const email = useRef(null)
  const username = useRef(null)
  const password = useRef(null)

const handleSubmit = async (event) => {
  event.preventDefault();
 
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    // const usernameValue = username.current.value;

    if (isLogin) {
      // Login
      try {
        const userCredential = await signInWithEmailAndPassword(auth, emailValue, passwordValue);
        Swal.fire({
          title: "Login Successfully",
          text : userCredential.user.uid,
          icon: "success"
        });
        handleClose()
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } else {
      // Register
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
        Swal.fire({
          title: username.current.value + "Register Successfully",
          icon: "success"
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Invalid Email or password",
          text: "Something went wrong!",
        });
      }
    }
  

}
  async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        Swal.fire({
          title: "Login Successfully",
          text : user.uid,
          icon: "success"
        });
        handleClose
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
       
    }
}
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-full sm:w-96 p-6">
             <div className="text-right">
             <button onClick={handleClose} className="text-gray-500 text-right hover:text-gray-800">
                X
              </button>
             </div>
            <div className="flex justify-between flex-col gap-5 items-center mb-4">
              <Image src={logo} alt="logo" width={50}/>
              <h2 className="text-xl text center font-semibold">{isLogin ? "Login to your Olx Account" : "Create a new Olx Account"}</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
              {!isLogin && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Username</label>
                  <input
                    ref={username}
                    required
                    type="text"
                    placeholder="Enter your Username"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              )}
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  ref={email}
                  required
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  ref={password}
                  required
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
             
              <button
                type="submit"
                className="w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </form>
            <button
                onClick={loginWithGoogle}
                className="w-full flex font-semibold items-center justify-center gap-3 mt-2 text-black border-2 border-black py-2 rounded-md hover:bg-gray-100 transition duration-200"
              >
                 <FcGoogle/> Login With Google
              </button>
            <div className="mt-4 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-blue-600 font-bold hover:text-blue-800"
              >
                {isLogin ? "New to Olx ? Create an Account" : "Already have an account? Login"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
