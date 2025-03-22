import React, { useState, useEffect } from "react";
import { motion, AnimatePresence  } from "framer-motion";

export const WelcomeModal = ({ user, onclose }) => {
  const [username, setUsername] = useState(user?.username || "");

  useEffect(() => {
    if (!localStorage.getItem("hasSeenWelcomeModal")) {
      localStorage.setItem("hasSeenWelcomeModal", "true");
    }
  }, []);

  const handleStart = () => {
    console.log("✅ Username confirmado: ", username);
    onclose();
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
            className="w-full px-4 py-2 rounded-full boder border-zinc-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-center text-zinc-800 dark:text-white mb-6"
            placeholder="Choose your vibe name"
          />

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