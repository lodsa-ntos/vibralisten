import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => { 
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Verifica se existe uma sessão salva no localStorage
  // Checks if there is a session saved in localStorage
  useEffect(() => {
    console.log("🔄 Checking localStorage for user...");
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      console.log("✅ User found in localStorage: ", JSON.parse(storedUser));
      setUser(JSON.parse(storedUser));
      console.log("User set from localStorage: ",JSON.parse(storedUser));
    } else {
      console.log("❌ No user found in localStorage.");
    }
    setIsLoading(false);
  }, []);

  // Função de Signup
  // Signup function
  const signup = async (formData) => {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/signup", formData);
      setUser(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));

    } catch (error) {
      console.error("Signup error: ", error.response.data.message);
      throw new Error(error.response.data.message || "Signup failed");
    }
  };
  
  // Função de Login
  // Login function
  const login = async (formData) => {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", formData);
      if (response.data.user) {
        console.log("✅ Login successful. User: ", response.data.user);

        setUser(response.data.user);
        console.log("User form: ", formData);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        navigate(`/home`);
      } else {
        throw new Error("User data is missing");
      }

    } catch (error) {
      console.error("❌ Login error: ", error.response.data.message || error.message);
      throw new Error(error.response.data.message || "Login failed");
    }
  };

  // Função de Logout
  // Logout
  const logout = () => {
    console.error("🔴 Logging out...");
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};