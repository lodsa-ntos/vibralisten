import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";
import Home from "./pages/Home/Home";
import FAQs from "./pages/FAQs/FAQs";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import Preferences from "./pages/Preferences/Preferences";
import PrefBanner from "./components/PrefBanner/PrefBanner";
import SignInLayout from "./pages/Authentication/Login/SignInLayout";
import SignUpLayout from "./pages/Authentication/Register/SignUpLayout";
import ForgotPassword from "./pages/Authentication/ForgotPass/ForgotPassword";
import { useAuth } from "./hook/useAuth";
import "./assets/styles/global.css";

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

// Componente para rotas protegidas
// Component for protected routes
const ProtectedRoute = ({ element }) => {
  const { user } = useAuth();

  return user ? element : <Navigate to="/" replace />;
};

// Componente para redirecionar utilizadores logados para /home se já estiverem autenticado
// Component to redirect logged-in users to /home if they are already authenticated
const PublicRoute = ({ element }) => {
  const { user } = useAuth();

  return user ? <Navigate to="/home" replace /> : element;
};

const App = () => {
  
  return (
    <>
      <Router>
        <PrefBanner />
        <ScrollToSection />
        <Routes>
          <Route path="/" element={<SignInLayout />} />
          <Route path="/signup" element={<SignUpLayout />} />
          <Route path="/forgotpasswordpage" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
