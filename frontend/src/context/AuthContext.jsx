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

      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

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
          const newAccessToken = refreshResponse.data.accessToken;
          localStorage.setItem("accessToken", newAccessToken);
        } else {
          console.warn("❌ Refresh token is invalid or expired. Logging out. ");
          logout();
          return;
        }
      }

      const response = await axios.get("http://localhost:3000/api/auth/session", {
        withCredentials: true,
        headers: {
         "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
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
      console.log("🔄 Sending signup request...", signupData);

      const csrfToken = await getCsrfToken();

      const response = await axios.post("http://localhost:3000/api/auth/signup", signupData, {
        withCredentials: true,
        headers: { 
          "Content-Type": "application/json",
          "XSRF-TOKEN": csrfToken,
         },
      });

      if (response.data && response.data.user) {
        console.log("✅ Signup successful! ", response.data);

        localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("userId", response.data.user._id);

        setUser(response.data.user);

        return { 
          success: true, 
          userId: response.data.user._id,
          email: response.data.user.email,
          fullName: response.data.user.fullName,
          phone: response.data.user.phone,
        };
      } else {
        throw new Error("Signup failed. No user data returned.");
      }
    } catch (error) {
      console.error("❌ Signup error: ", error.response?.data?.message || error.message);
      return { success: false, message: error.response?.data?.message || "Signup failed." };
    } finally {
      setIsLoading(false);
    }
  };

  // Função de Login
  // Login
  const login = async (loginData, csrfToken) => {
    try {
      setIsLoading(true);
      console.log("🔄 Sending login request...");

      if (!csrfToken) {
        csrfToken = await getCsrfToken();
      }

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
        localStorage.setItem("userId", response.data.user._id);

        setUser(response.data.user);
        return { success: true };
      } else {
        throw new Error(response.data.message || "Login failed.");
      }

    } catch (error) {
      console.error("❌ Error during login: ", error.response?.data?.message || error.message);
      return { success: false, message: error.response?.data?.message || "Login failed. Try again." };
    } finally {
      setIsLoading(false);
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

        await axios.post("http://localhost:3000/api/auth/logout", 
          { token: refreshToken }, 
          {
          withCredentials: true,
          headers: { 
            "XSRF-TOKEN": csrfToken,
          },
        });

        console.log("✅ User logged out successfully.");
      }
    } catch (error) {
      console.error("❌ Error logging out: ", error);
    } finally {
      // Limpar estado global
      // Clear global status
      localStorage.clear();
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, setUser, checkSession, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};