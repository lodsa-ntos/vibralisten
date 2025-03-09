import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

export const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    console.log(isLoading);
    return <p className="flex text-center items-center justify-center mt-72">Loading...</p>;
  }

  console.log("🔍 isAuthenticated: ", isAuthenticated);

  console.log("🔍 User Context: ", useAuth());

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace/>;
};