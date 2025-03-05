import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const PublicHome = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (user) {
    navigate("/home");
    return null;
  }

  return (
    <div>
      <h1>🎵 Welcome to VibraListen!</h1>
      <p>Explore and discover new vibes.</p>

      
    </div>
  );
};