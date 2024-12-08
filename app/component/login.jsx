import Image from "next/image";
import { useState } from "react";
import logo from "@/public/logo.png"

const Modal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Track whether login or register is active

  const handleClose = () => {
    setIsLogin(true); // Reset to login when closing modal
    onClose();
  };

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
            <form>
              <div className="mb-4">
              {!isLogin && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Username</label>
                  <input
                    type="text"
                    placeholder="Enter your Username"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              )}
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
             
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </form>
            
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
