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
      
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.log("⚠️ No access token found.");
        setUser(null);
        setIsLoading(false);
        return;
      }

      const response = await axios.get("http://localhost:3000/api/auth/session", {
         withCredentials: true,
         headers: {
          // Envia o Access Token no cabeçalho para autorizar a requisição
          // Sends the Access Token in the header to authorise the request
          "Authorization": `Bearer ${token}`
         }
      });

      if (response.data && response.data.user) {
        setUser(response.data.user);
        console.log("✅ Session found, user authenticated: ", response.data.user);

      } else {
        logout();
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

  // Função de Login
  // Login
  const login = async (loginData) => {
    try {

      console.log("🔄 Sending login request...");

      await axios.get("http://localhost:3000/api/auth/login", loginData, {
        withCredentials: true
      });

      if (response.data && response.data.success) {
        console.log("✅ Login successful! Storing tokens...");

        localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        setUser(response.data.user);

        return { success: true };

      } else {
        console.log("❌ Invalid login response.");
      }
    } catch (error) {
      console.error("❌ Error during login: ", error);
      return { success: false, message: "Login failed. Try again." };
    }
  };
  
  // Função de Logout
  // Logout
  const logout = async () => {
    try {
      await axios.post("http://localhost:3000/api/auth/logout", {
        withCredentials: true
      });

      if (response.data.message === "Logout successful!") {
        console.log("✅ User logged out successfully.");

        // Remover tokens do LocalStorage
        // Remove tokens from LocalStorage
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");

        // Limpar estado global
        // Clear global status
        setUser(null);
      } else {
        throw new Error("Logout failed.");
      }
    } catch (error) {
      console.error("❌ Error logging out: ", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};