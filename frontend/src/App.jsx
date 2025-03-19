import {
  Route,
  Routes,
  useLocation,
  Navigate
} from "react-router-dom";
import { useEffect } from "react";
import { PublicHome } from "./pages/Home/PublicHome";
import { Login } from "./pages/Authentication/Login/Login";
import { Signup } from "./pages/Authentication/Signup/Signup";
import { OTPVerification  } from "./pages/Authentication/VerifyOTP/OTPVerification";
import { UserHome } from "./pages/Home/UserHome";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAuth } from "./hook/useAuth";


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
  const { isAuthenticated, isLoading, checkSession } = useAuth();

  useEffect (() => {
    checkSession();
  }, []);

  return (
    <>
      <ScrollToSection />
        <Routes>
          {/* Protected Routes */}
          {isLoading ? (
            <Route path="*" element={<p className="flex text-center items-center justify-center mt-72">Loading...</p>} />
          ) : (
            <>
            {isAuthenticated ? (
              <Route element={<ProtectedRoute />} >
                <Route path="/home" element={<UserHome />} />
              </Route>
            ) : (
              <Route path="/home" element={<Navigate to="/login" replace />} />
            )}

            {/* Public Routes */}
            <Route path="/" element={<PublicHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verify-otp" element={<OTPVerification />} />
            </>
          )}
      </Routes>
    </>
  );
};

export default App;
