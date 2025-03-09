import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => { 
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // verificar sessão ativa
  // check active session
  const checkSession = async () => {
    try {
      console.log("🔄 Checking session...");
      const response = await axios.get("http://localhost:3000/api/auth/sessions", { withCredentials: true });

      if (response.data && response.data.user) {
        setUser(response.data.user);
        console.log("✅ Session found, user authenticated: ", response.data.user);
      } else {
        setUser(null);
        console.log("❌ No active session found.");
      }
    } catch (error) {
      console.error("⚠️ Error checking session: ", error);
      setUser(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    checkSession();
  }, []);
  
  // Função de Logout
  // Logout
  const logout = async () => {
    try {
      await axios.get("http://localhost:3000/api/auth/logout", {});

      console.log("✅ User logged out.");
    } catch (error) {
      console.error("❌ Error logging out: ", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};