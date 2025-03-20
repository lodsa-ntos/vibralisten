import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../provider/authProvider";

export const Logout = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken();
    navigate("/", { replace: true });
  }

  setTimeout(() => {
    handleLogout();
  }, 3 * 1000);

  return (
    <p>Logout Page</p>
  );
}