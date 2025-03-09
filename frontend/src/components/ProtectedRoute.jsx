import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

export const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <p className=" flex text-center items-center justify-center mt-72">Loading...</p>
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace/>;
};