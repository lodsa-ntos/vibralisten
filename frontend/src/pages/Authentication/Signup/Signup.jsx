import React from "react";
import { FaSpotify } from "react-icons/fa";
import { FaDeezer } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TbMusicShare } from "react-icons/tb";

export const Signup = () => {

  return (
    <div>
      <div class="grid lg:grid-cols-2 gap-4 max-lg:gap-12 bg-gradient-to-r from-blue-500 to-blue-700 sm:px-8 px-4 py-12 h-[320px]">
        <div>
          <a href="javascript:void(0)"><img
            src="Logo/vibralisten_logo.svg" alt="logo" class="w-40" />
          </a>
          <div class="max-w-lg mt-16 max-lg:hidden">
            <h3 class="text-3xl font-semibold text-white">Sign up</h3>
            <p class="text-sm mt-4 text-slate-100 leading-relaxed"> Unlock a realm of opportunities and possibilities that await you.</p>
          </div>
        </div>

        <div class="bg-white rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
          <form>
            <div class="mb-8">
              <h3 class="text-3xl font-semibold text-slate-900">Discover new music.</h3>
            </div>
            <div class="sm:flex sm:items-start space-x-4 max-sm:space-y-4 mb-8">
              <button type="button" class="py-2.5 px-4 flex text-sm font-medium rounded-md bg-blue-100 hover:bg-blue-200 focus:outline-none">
              <FaSpotify className="size-5 text-green-500 mr-2" /> 
                Sign up with Spotify
              </button>
              <button type="button" class="py-2.5 px-4 text-sm font-semibold rounded-md text-blue-500 bg-blue-100 hover:bg-blue-200 focus:outline-none">
                <FaDeezer  className="size-5" /> 
              </button>
              <button type="button" class="py-2.5 px-4 text-sm font-semibold rounded-md text-blue-500 bg-blue-100 hover:bg-blue-200 focus:outline-none">
                <FcGoogle className="size-5" />
              </button>
            </div>

            <div class="space-y-6">
              <div>
                <label class="text-slate-800 text-sm font-medium mb-2 block">E-mail or phone number</label>
                <div class="relative flex items-center">
                  <input name="username" type="text" required class="w-full text-sm text-slate-800 border border-slate-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter e-mail or phone number" />
                </div>
              </div>
              <div>
                <label class="text-slate-800 text-sm font-medium mb-2 block">Full name</label>
                <div class="relative flex items-center">
                  <input name="password" type="text" required class="w-full text-sm text-slate-800 border border-slate-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter full name" />
                </div>
              </div>
            </div>

            <div class="mt-8">
              <button type="button" class="w-full shadow-xl py-2 px-4 text-[15px] font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                Continue
              </button>
            </div>
            <p class="text-sm mt-6 text-center text-slate-800">Already vibing with us? <a href="/login" class="text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap">Sign in!</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}