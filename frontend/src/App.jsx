import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import FAQs from "./pages/FAQs/FAQs";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import "./assets/styles/global.css";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({behavior: "smooth"});
      }
    }
  }, [location]);

  return null;
}

const App = () => {
  return (
    <Router>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;
