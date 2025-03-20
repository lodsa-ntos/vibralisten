import { Children, useEffect } from "react";
import { PublicHome } from "./pages/Home/PublicHome";
import { Login } from "./pages/Authentication/Login/Login";
import { Signup } from "./pages/Authentication/Signup/Signup";
import { OTPVerification  } from "./pages/Authentication/VerifyOTP/OTPVerification";
import { UserHome } from "./pages/Home/UserHome";
import { useAuth } from "./provider/authProvider";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  Routes,
  useLocation
} from "react-router-dom";


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
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/",
      element: <div><PublicHome /></div>
    },
    {
      path: "/about",
      element: <div><PublicHome /></div>
    },
    {
      path: "/faqs",
      element: <div><PublicHome /></div>
    },
    {
      path: "/terms",
      element: <div><PublicHome /></div>
    },
    {
      path: "/privacy",
      element: <div><PublicHome /></div>
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAutheticatedOnly = [
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/about",
          element: <div><PublicHome /></div>
        },
        {
          path: "/faqs",
          element: <div><PublicHome /></div>
        },
        {
          path: "/terms",
          element: <div><PublicHome /></div>
        },
        {
          path: "/privacy",
          element: <div><PublicHome /></div>
        },
      ],
    },
  ];

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
