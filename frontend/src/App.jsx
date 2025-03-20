import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import { useEffect } from "react";
import { PublicHome } from "./pages/Home/PublicHome";
import { Login } from "./pages/Authentication/Login/Login";
import { Signup } from "./pages/Authentication/Signup/Signup";
import { OTPVerification  } from "./pages/Authentication/VerifyOTP/OTPVerification";
import { UserHome } from "./pages/Home/UserHome";


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
    <>
      <ScrollToSection />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-otp" element={<OTPVerification />} />
          <Route path="/home" element={<UserHome />} />
      </Routes>
    </>
  );
};

export default App;
