import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const ProtectedRoute = () => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <p className=" flex text-center items-center justify-center mt-72">Loading...</p>
  }

  return user ? <Outlet /> : <Navigate to="/login" replace/>;
};