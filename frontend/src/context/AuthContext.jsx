import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { getCsrfToken } from "../utils/getCsrfToken";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => { 
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedin, setIsLoggedin] = useState(false);

  // verificar sessão ativa
  // check active session
  const checkSession = async () => {
    setIsLoading(true);

    try {
      console.log("🔄 Checking session...");

      const response = await axios.get("http://localhost:3000/api/auth/session", {
         withCredentials: true,
         headers: {
          // Envia o Access Token no cabeçalho para autorizar a requisição
          // Sends the Access Token in the header to authorise the request
          "Authorization": `Bearer ${token}`
         }
      });

      if (response.data && response.data.user) {
        console.log("✅ Session found, user authenticated: ", response.data.user);
        setUser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      } else {
        console.warn("⚠️ Session not found, clearing user state. ");
        setUser(null);
        localStorage.removeItem("user");
      }

    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.warn("⚠️ User not authenticated. Clearing session. ");
      } else {
        console.error("❌ Error checking session: ", error);
      }
      setUser(null);
      logout();

    } finally {      
      setIsLoading((prev) => {
        console.log("✅ isLoading state changing from ", prev, " to false");
        return false;
      });
    }
    
  };

  useEffect(() => {
    checkSession().then(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    });
  }, []);

  // Função de Signup
  // Signup
  const signup = async (signupData) => {
    try {

      setIsLoading(true);
      console.log("🔄 Sending signup  request...", signupData);

      const csrfToken = await getCsrfToken();

      const response = await axios.post("http://localhost:3000/api/auth/signup", signupData, {
        withCredentials: true,
        headers: { 
          "Content-Type": "application/json",
          "XSRF-TOKEN": csrfToken,
         },
      });

      console.log("✅ Signup successful! ", response.data);

      localStorage.setItem("userId", response.data.user._id);
      localStorage.setItem("email", response.data.user.email || "");
      localStorage.setItem("fullName", response.data.user.fullName || "");
      localStorage.setItem("phone", response.data.user.phone || "");
      
      return { 
        success: true, 
        userId: response.data.user._id,
        email: response.data.user.email,
        fullName: response.data.user.fullName,
        phone: response.data.user.phone,
      };

      
    } catch (error) {
      console.error("❌ Signup error: ", error.response?.data?.message || error.message);
      return { success: false, message: error.response?.data?.message || "Signup failed." };
    } finally {
      setIsLoading(false);
    }
  };

  // Função de Login
  // Login
  const login = async (loginData) => {
    try {

      console.log("🔄 Sending login request...");

      await axios.post("http://localhost:3000/api/auth/login", loginData, {
        withCredentials: true
      });

      if (response.data && response.data.success) {
        console.log("✅ Login successful! Storing tokens...");

        localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("userId", response.data._id);

        setUser(response.data.user);
        setIsLoggedin(true);
        return { success: true };

      } else {
        console.log("❌ Invalid login response.");
        return { success: false, message: "Invalid credentials." };
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
      const refreshToken = localStorage.getItem("refreshToken");

      if (!refreshToken) {
        console.warn("⚠️ No refresh token found. Skipping server logout.");
      } else {

        const csrfToken = await getCsrfToken();
            
        if (!csrfToken) {
          throw new Error("CSRF Token is missing");
        }

        await axios.post("http://localhost:3000/api/auth/logout", 
          { token: refreshToken }, 
          {
          withCredentials: true,
          headers: { 
            "Content-Type": "application/json",
            "XSRF-TOKEN": csrfToken,
          },
        });
      }

      console.log("✅ User logged out successfully.");

      // Limpar estado global
      // Clear global status
      localStorage.clear();
      setUser(null);
      setIsLoggedin(false);

    } catch (error) {

      if (error.response && error.response.status === 400) {
        console.warn("⚠️ User not authenticated. Clearing logout. ");
      } else {
        console.error("❌ Error logging out: ", error);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, setUser, checkSession, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};