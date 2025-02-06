import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import FAQs from "./pages/FAQs/FAQs";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Therms from './pages/Therms/Therms';
import Privacy from './pages/Privacy/Privacy';
import './assets/styles/global.css'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/therms" element={<Therms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
