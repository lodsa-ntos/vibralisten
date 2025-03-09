import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const ProtectedRoute = () => {
  const { user } = useContext(AuthContext);

  if (user === null) {
    return <p>Loading...</p>
  }

  return user ? <Outlet /> : <Navigate to="/login" replace/>;
};