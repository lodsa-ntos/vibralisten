import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
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
import useAuth from "./hook/useAuth";
import VerifyCode from "./pages/Authentication/VerifyCode/VerifyCode";
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
const PrivateRoute = ({ element }) => {
  const { user } = useContext(AuthContext);

  return user ? element : <Navigate to="/" />;
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

          {/*Rotas públicas: Apenas para utilizadores não logados*/}
          {/*Public routes: For non-logged in users only*/}
          <Route path="/" element={<PublicRoute element={<SignInLayout />} />} />
          <Route path="/signup" element={<PublicRoute element={<SignUpLayout />} />} />
          <Route path="/forgotpasswordpage" element={<PublicRoute element={<ForgotPassword />} />} />
          <Route path="/verify-code" element={<PublicRoute element={<VerifyCode />} />} />

          <Route path="/home" element={<PrivateRoute element={<Home />} />} />

          {/*Rotas protegidas: Apenas para utilizadores logados*/}
          {/*Protected routes: Only for logged in users*/}
          <Route path="/faqs" element={<ProtectedRoute element={<FAQs />} />} />
          <Route path="/about" element={<ProtectedRoute element={<About />} />} />
          <Route path="/contact" element={<ProtectedRoute element={<Contact />} />} />
          <Route path="/terms" element={<ProtectedRoute element={<Terms />} />} />
          <Route path="/privacy" element={<ProtectedRoute element={<Privacy />} />} />
          <Route path="/preferences" element={<ProtectedRoute element={<Preferences />} />} />

          {/*Redireciona para a página principal caso a rota não exista*/}
          {/*Redirects to the home page if the route doesn't exist*/}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
