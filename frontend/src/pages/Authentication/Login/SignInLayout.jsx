import React from "react";
import { FaSpotify, FaDeezer } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GiMusicalNotes } from "react-icons/gi";

const LoginScreen = () => {
  return (
    <div className="flex h-screen font-satoshi">
      {/** Left: Form */}
      <div className="w-full md:w-5/12 flex items-center justify-center bg-dark-grey text-black p-10">
        <div className="max-w-md w-full">
          <h1 className="text-4xl font-bold text-blue-vibrant">
            Sign in to <span className="text-blue-600">VIBRA</span>LISTE<span className="text-blue-600">N</span>
          </h1>
          <div className="mb-11.5 h-24 dark:hidden"></div>

          {/** Input E-mail */}
          <div class="relative">
                <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

                <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Mobile number, username or e-mail
                </label>
              </div>

          {/** Submit Button */}
          <button className="mt-4 flex items-center justify-center w-full bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">
            Let’s Go <GiMusicalNotes size={20} className="ml-2" />
          </button>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/** Social Logins */}
          <div className="space-y-3">
            <button className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">
              <FaSpotify size={20} className="mr-2" /> Login with Spotify
            </button>
            <button className="flex items-center justify-center w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg">
              <FaDeezer size={20} className="mr-2" /> Login with Deezer
            </button>
            <button className="flex items-center justify-center w-full bg-white text-black border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
              <FcGoogle size={20} className="mr-2" /> Login with Google
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-400">
            New here? Let’s get you started with some fresh tunes! <a href="/signup" className="text-blue-vibrant hover:underline">Sign up!</a>
          </p>
        </div>
      </div>

      {/** Right: Background */}
      <div className="hidden md:block md:w-7/12 relative bg-blue-vibrant">
        <div className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/images/authlayoutimages/default.jpg')" }}>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
