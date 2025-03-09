import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => { 
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Verifica se existe uma sessão salva no localStorage
  // Checks if there is a session saved in localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
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
      setTimeout(() => {
        // Redirecionar após home
        // Redirect after home
        window.location.href = "/home";
      }, 100);

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
      setUser(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setTimeout(() => {
        // Redirecionar após home
        // Redirect after home
        window.location.href = "/home";
      }, 100);

    } catch (error) {
      console.error("Login error: ", error.response.data.message);
      throw new Error(error.response.data.message || "Login failed");
    }
  };

  // Função de Logout
  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};