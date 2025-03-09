import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

export const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    console.log("🔄 Loading user authentication...");
    return <p className="flex text-center items-center justify-center mt-72">Loading...</p>;
  }

  console.log("🔍 isAuthenticated: ", isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace/>;
};