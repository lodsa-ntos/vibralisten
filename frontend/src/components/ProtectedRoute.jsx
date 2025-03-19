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
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    console.log("🔄 Loading user authentication...", isLoading);
    return <p className="flex text-center items-center justify-center mt-72">Loading...</p>;
  }

  if (!isAuthenticated) {
    console.warn("⚠️ Unauthorized access attempt. Redirecting to /login...");
    return <Navigate to="/login" replace />
  }

  console.log("✅ User authenticated. Granting access.");
  
  return <Outlet />;
};