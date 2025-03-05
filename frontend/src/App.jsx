import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { PublicHome } from "./pages/Home/PublicHome";
import UserHome from "./pages/Home/UserHome";
import { AuthProvider } from "./context/AuthContext";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToSection />
        <Routes>
          <Route path="/" element={<PublicHome />} />
          <Route path="/home" element={<UserHome />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
