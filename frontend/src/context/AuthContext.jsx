import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => { 

  const [user, setUser] = useState(() => {

    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;

    } catch (error) {
      console.error("Error parsing user from localStorage: ", error.message);
      return null;
    }
  });

  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setTimeout(() => {
      window.location.href = "/"
    }, 0);
  };

  useEffect(() => {
    const checkUserSession = async () => {
      const storedToken= localStorage.getItem("token");

      if (storedToken) {
        try {
          const response = await fetch("http://localhost:3000/api/auth/me", {
            headers: {
              "Authorization": `Bearer ${storedToken}`
            }
          });

          if (response.ok) {
            const data = await response.json();
            setUser(data.user);
            setTimeout(() => {
              window.location.href = "/home"
            }, 0);
          } else {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            setUser(null);
          }

        } catch (error) {
          console.error("Error fetching user: ", error);
        }
      };
    };

    checkUserSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};