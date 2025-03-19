import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { useEffect } from "react";

export const ProtectedRoute = () => {
  const { isAuthenticated, isLoading, checkSession } = useAuth();

  useEffect (() => {
    if (!isAuthenticated && !isLoading) {
      console.log("🔄 Checking session...");
      checkSession();
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return <p className="flex text-center items-center justify-center mt-72">Loading...</p>;
  }

  console.log("✅ User authenticated. Granting access.");
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};