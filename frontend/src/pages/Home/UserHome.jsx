import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { getCsrfToken } from "../../utils/getCsrfToken";
import  { useAuth } from "../../provider/authProvider";import { WelcomeModal } from "../WelcomeModal/welcomeModal";
import { PiSidebar } from "react-icons/pi";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { TbHome } from "react-icons/tb";
import { LiaMicrophoneAltSolid } from "react-icons/lia";
import { RiMusicAiLine } from "react-icons/ri";

export const UserHome = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");
  const [visibleMenu, setVisibleMenu] = useState(false);
  const { clearToken  } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");

    try {

      const csrfToken = await getCsrfToken();
      
      if (!csrfToken) throw new Error("CSRF Token is missing");

      const response = await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "XSRF-TOKEN": csrfToken,
        },
        credentials: "include",
      });

      const data = await response.json();
      console.log("Logout backend: ", data);

      if (!response.ok) {
        console.error("🔴 Logout Error: ", data);
        throw new Error(data.message || "Logout failed");
      }

      console.log("✅ Logout successfully ");
      clearToken();
      navigate("/", { replace: true });

    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.log("❌ Logout Error: ", error);
    }
  };

  useEffect(() => {
    async function fetchSession() {
      const response = await fetch("http://localhost:3000/api/auth/session", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();
      console.log("Session data: ", data);

      setUser(data.user);

      if (!response.ok) {
        console.error("🔴 Session Error: ", data);
        throw new Error(data.message || "Session failed");
      }

      if (data.user.isNewUser) {
        setShowWelcomeModal(true);
      }

      console.log("✅ Session successfully: ", data.user.isNewUser);
    }

    fetchSession();
  }, []);

  return (
    <div style={{ fontFamily: "Satoshi, sans-serif", letterSpacing: "0.5px" }} className="flex w-full h-screen bg-[#f4f4f5]">
      {/* Overlay in mobile - por cima */}
      {visibleMenu && (
        <div onClick={() => setVisibleMenu(false)} className="fixed inset-0 z-80 bg-gray-50/50 dark:bg-black/50 md:hidden"/>
      )}
        {/* Sidebar */}
          {visibleMenu && (
            <div className={`transition-transform duration-500 ${visibleMenu ? "translate-x-0" : " -translate-x-full"} fixed top-0 left-0 pl-3 z-40 h-full w-[290px] bg-[#ededed] border-white/20 md:relative md:translate-x-0 md:w-[260px] flex flex-col`}>

            {/* fixed header */}
              <div className="sticky top-0 bg-[#ededed] z-50 h-[100px] items-center xs:pr-3 xs:pl-3 xs:pb-3 xs:pt-3 pt-4">
                <div className="flex items-center justify-between px-1.5">
                  <button  onClick={() => setVisibleMenu(false)} >
                    <span className="hidden md:inline">
                      <PiSidebar size={24} className=" left-0 transition-opacity transform duration-300 ease-in-out hover:scale-105 text-gray-500" />
                    </span>

                    <span className="inline md:hidden text-xl">
                      <HiMiniBars3BottomLeft size={24} className="left-0 transition-opacity transform duration-300 ease-in-out hover:scale-105 text-gray-500" />
                    </span>
                  </button>
                </div>
                {/* Title */}
                <h2 className="text-xl text-gray-500 font-bold px-1.5 pt-3"> </h2>
              </div>
                
              {/* Scroll */}
              <div className="flex-1 overflow-y-auto px-1.5 py-2 [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-track]:bg-[#ededed]
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-gray-300
                dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
              >
                {/* Menu items */}
                <ul className="space-y-6 py-3 text-sm text-gray-500">
                    <li className="flex items-center gap-2"><TbHome size={20} /> Home</li>
                    <li className="flex items-center gap-2"><LiaMicrophoneAltSolid size={20} /> Artists</li>
                    <li className="flex items-center gap-2"><RiMusicAiLine size={20} /> Songs</li> {/* // será trocado depois*/}
                </ul>
              </div>

              {/* Footer */}
              <div className="px-1.5 py-4 bg-[#ededed]">
                <span className="text-sm text-gray-500">
                  Footer fixo
                </span>
              </div>
            </div>
          )}

            {/* Home content */}
            <div className="flex-1">
                {/* Menu button */}
                {!visibleMenu && (
                  <button
                  onClick={() => setVisibleMenu(!visibleMenu)}
                  className={`fixed top-0 p-4 z-50 rounded transition-opacity transform duration-300 ease-in-out hover:scale-105`}
                >
                  <span className="hidden md:inline">
                    <PiSidebar size={24} className="text-gray-500" />
                  </span>

                  <span className="inline md:hidden text-xl">
                    <HiMiniBars3BottomLeft size={24} className="text-gray-500" />
                  </span>
                  
                </button>
                )}

              {/* Home content */}

                {/* Logo in the top left corner */}
                <div className="flex ">
                  <img
                    src="Logo/vibralisten_logo_w.svg"
                    className={`${visibleMenu ? "md:ml-2" : "ml-12" } w-24 py-3 dark:hidden inline-block object-contain drop-shadow-[0px_4px_10px_rgba(255,255,255,0.4)]`}
                    alt="vibralisten_logo"
                  />
                </div>
                  
                {/* Welcome message */}
                <h1 className="text-3xl p-6 font-semibold text-center mt-8"> Welcome to VibraListen! 🎵</h1>

                {/* Show Modal if first time */}
                {showWelcomeModal && ( <WelcomeModal user={user} onclose={() => setShowWelcomeModal(false)} />)}

                {/* Logout button */}
                <div className="flex justify-center mt-8">
                  <button onClick={handleLogout}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
                  >
                    Logout
                  </button>
                </div> 
            </div>
      <ScrollToTopButton />
    </div>
  );
};
