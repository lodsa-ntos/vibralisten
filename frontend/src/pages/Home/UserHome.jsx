import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { getCsrfToken } from "../../utils/getCsrfToken";
import  { useAuth } from "../../provider/authProvider";import { WelcomeModal } from "../WelcomeModal/welcomeModal";

export const UserHome = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");
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
    const hasSeenWelcomeModal = localStorage.getItem("hasSeenWelcomeModal");
    if (!hasSeenWelcomeModal) {
      setShowWelcomeModal(true);
    }
  }, []);

  return (
    <div className="relative">

      {/* Home content */}
      <h1 className="text-3xl p-6 font-semibold text-center mt-8">
        Welcome to VibraListen! 🎵
      </h1>

      {/* Show Modal if first time */}
      {showWelcomeModal && (
        <WelcomeModal user={user} onclose={() => setShowWelcomeModal(false)} />
      )}

      {/* Logout button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleLogout}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
        >
          Logout
        </button>
      </div>
      
      <ScrollToTopButton />

    </div>
  );
};
