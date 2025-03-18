import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { useEffect } from "react";

export const ProtectedRoute = () => {
  const { isAuthenticated, isLoading, checkSession } = useAuth();

  useEffect (() => {
    if (!isAuthenticated) {
      checkSession();
    }
  }, [isAuthenticated]);

  if (isLoading) {
    console.log("🔄 Loading user authentication...", isLoading);
    return <p className="flex text-center items-center justify-center mt-72">Loading...</p>;
  }

  console.log("🔍 isLoading: ", isLoading);
  console.log("🔍 isAuthenticated: ", isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace/>;
};