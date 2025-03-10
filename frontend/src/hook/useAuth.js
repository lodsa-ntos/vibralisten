import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("❌ useAuth is missing.");
  }

  return {
    user: context.user,
    isAuthenticated: !!context.user,
    isLoading: context.isLoading,
    setUser: context.setUser,
    login: context.login,
    logout: context.logout,
  };
}