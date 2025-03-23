import React, { useState, useEffect } from "react";
import { motion, AnimatePresence  } from "framer-motion";
import { getCsrfToken } from "../../utils/getCsrfToken";

export const WelcomeModal = ({ user, onclose }) => {
  const [username, setUsername] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [checking, setChecking] = useState(false);

  const handleStart = async () => {
    try {
      const sessionResponse = await fetch("http://localhost:3000/api/auth/session", {
        method: "GET",
        credentials: "include",
      });

      const sessionData = await sessionResponse.json();
      const userId = sessionData.user?._id;

      if (!userId) throw new Error("User ID is missing");

      const csrfToken = await getCsrfToken();
      
      if (!csrfToken) throw new Error("CSRF Token is missing");

      const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "XSRF-TOKEN": csrfToken,
        },
        credentials: "include",
        body: JSON.stringify({
          isNewUser: false,
          username: username,
        }),
      });
      
      if (!response.ok) throw new Error("Failed to update user status");

      console.log("✅ Username and isNewUser updated!");

      console.log("✅ Username confirmado: ", username);

    } catch (error) {
      console.error("❌ Error updating new user: ", error);
    }

    onclose();
  };

  useEffect(() => {
    async function fetchSession() {
      const sessionResponse = await fetch("http://localhost:3000/api/auth/session", {
          method: "GET",
          credentials: "include",
      });

      const sessionData = await sessionResponse.json();
      
      if (!sessionData.user) throw new Error("User data missing.");

      setUsername(sessionData.user.username);
    }

    fetchSession();
  }, []);

  useEffect(() => {

    if (!username) return;
    console.log("🔍 Checking username: ", username);

    const delayDebounceFn = setTimeout(() => {
      checkUsername(username);
    }, 600);

    return () => clearTimeout(delayDebounceFn);
  }, [username]);

  const checkUsername = async (name) => {
    setChecking(true);

    if (!name || !/^[a-zA-Z0-9_]+$/.test(name)) {
      setIsAvailable(false);
      setSuggestions([]);
      setChecking(false);
      return;
    }

    const res = await fetch(`http://localhost:3000/api/users/check-username?username=${encodeURIComponent(name)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    setIsAvailable(data.isAvailable);
    setSuggestions(data.suggestions || []);
    setChecking(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
          <motion.div
            className="bg-white dark:bg-zinc-900 text-center px-8 py-10 rounded-2xl shadow-2xl w-[90%] max-w-md  border border-zinc-200 dark:border-zinc-800"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}          
          >
          
          {/* Logo icon */}
          <div className="text-4xl mb-4">🎧</div>
            
          {/* Welcome message */} 
          <h2 className="text-xl font-semibold mb-2">
            Hi, <span className="text-purple-600"> {username || "music lover"} </span> 🎉
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Welcome to <strong>VibraListen</strong> - your vibe starts now.
          </p>

          {/* Optional input to edit username */}
          <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-zinc-400 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-center text-black dark:text-white mb-6"
            placeholder="Choose your vibe name"
          />

          {/* Text below */}
          {checking ? (
            <p className="text-sm text-gray-500 mb-5 text-center">Checking availability...</p>
          ): isAvailable === true ? (
            <p className="text-sm text-green-600 mb-5">✅ Username available!</p>
          ) : isAvailable === false ? (
            <p className="text-sm text-red-500 mb-5">❌ Username already in use.</p>
          ) : null}

          {/* Suggestions  */}
          {!isAvailable && suggestions.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {suggestions.map((s, i) => (
                <button 
                  key={i}
                  onClick={() => setUsername(s)}
                  className="px-3 py-1 rounded-full border text-sm bg-zinc-200 dark:bg-zinc-800"
                >
                  @{s}
                </button>
              ))}
            </div>
          )}

          {/* Start button */}
          <button 
            onClick={handleStart}
            className="w-full bg-purple-600 text-white rounded-full py-2 px-4 font-semibold hover:bg-purple-600 shadow-lg transition duration-200"
          >
            Let’s vibe! 🚀
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};