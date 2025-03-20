import { Children, useEffect } from "react";
import { PublicHome } from "./pages/Home/PublicHome";
import { Login } from "./pages/Authentication/Login/Login";
import { Signup } from "./pages/Authentication/Signup/Signup";
import { OTPVerification  } from "./pages/Authentication/VerifyOTP/OTPVerification";
import { UserHome } from "./pages/Home/UserHome";
import { Logout } from "./pages/Authentication/Logout/Logout";
import { useAuth } from "./provider/authProvider";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import {
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
  const routesForPublic = [ { path: "/", element: <PublicHome /> }, ];

  // Define routes accessible only to authenticated users
  const routesForAutheticatedOnly = [
    {
      path: "/home",
      // Wrap the component in ProtectedRoute
      element: <ProtectedRoute />, 
      children: [
        {
          path: "/home",
          element: <UserHome />
        },
        {
          path: "logout",
          element: <Logout />
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAutheticatedOnly = [
    {
      path: "/",
      element: <PublicHome />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/verify-otp",
      element: <OTPVerification />
    },
  ];

  // Combine and conditionally include routes based on authentication status
  return (
    <>
      <ScrollToSection />
      <Routes>
        {routesForPublic.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {!token && routesForNotAutheticatedOnly.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
        ))}
          
        {routesForAutheticatedOnly.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children && route.children.map((child, childIndex) => (
                <Route key={childIndex} path={child.path} element={child.element} />
            ))}
          </Route>
        ))}
      </Routes>
    </>
  );
}

export default App;
