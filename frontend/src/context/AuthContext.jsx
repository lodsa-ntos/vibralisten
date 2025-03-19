import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { getCsrfToken } from "../utils/getCsrfToken";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => { 
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // verificar sessão ativa
  // check active session
  const checkSession = async () => {
    try {
      setIsLoading(true);
      console.log("🔄 Checking session...");

      let accessToken = localStorage.getItem("accessToken");
      let refreshToken = localStorage.getItem("refreshToken");

      if (!accessToken) {
        console.warn("⚠️ No access token found. Trying to refresh token...");

        if (!refreshToken) {
          console.warn("❌ No refresh token found. Logging out.");
          logout();
          return;
        }

        const refreshResponse = await axios.post("http://localhost:3000/api/auth/refresh-token",
          { refreshToken },
          { withCredentials: true }
        );

        if (refreshResponse.data && refreshResponse.data.accessToken) {
          console.log("✅ Token refreshed successfully! ");
          accessToken = refreshResponse.data.accessToken;
          localStorage.setItem("accessToken", accessToken);
        } else {
          console.warn("❌ Refresh token is invalid or expired. Logging out. ");
          logout();
          return;
        }
      }

      const response = await axios.get("http://localhost:3000/api/auth/session", {
        withCredentials: true,
        headers: {
         "Authorization": `Bearer ${accessToken}`
        }
      });

      if (response.data && response.data.user) {
        console.log("✅ Session found, user authenticated: ", response.data.user);
        setUser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      } else {
        console.warn("⚠️ Session not found, clearing user state. ");
        logout();
      }

    } catch (error) {
      console.error("❌ Error checking session: ", error);
      logout();
    } finally {      
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkSession();
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

      const csrfToken = await getCsrfToken();

      const response = await axios.post("http://localhost:3000/api/auth/login", loginData, {
        withCredentials: true,
        headers: { 
          "Content-Type": "application/json",
          "XSRF-TOKEN": csrfToken,
         },
      });

      if (response.data && response.data.success) {
        console.log("✅ Login successful! Storing tokens...");

        localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("userId", response.data._id);

        setUser(response.data.user);
        return { success: true };

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

      const csrfToken = await getCsrfToken();

      await axios.post("http://localhost:3000/api/auth/logout", 
        { token: refreshToken }, 
        {
        withCredentials: true,
        headers: { 
          "XSRF-TOKEN": csrfToken,
        },
      });

      console.log("✅ User logged out successfully.");

      // Limpar estado global
      // Clear global status
      localStorage.clear();
      setUser(null);

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