import React from "react";
import { Link } from "react-router-dom";
import getActivePage from "../Header/ActiveEffect";
import "../Header/ActiveEffect";

const Footer = () => {
  const activePage = getActivePage();
  return (
    <footer>
      {/* Logo */}
      <div className="footer-logo-container">
          <Link to="/home">
            <img
              src="Logo/music_symbol.svg"
              alt="Music Symbol"
              className="footer-logo-image"
            />
            <div className="footer-logo-text">
              <p className="slogan-footer">Listen. Feel. Download.</p>
              <h1 className="footer-logo">
                <span className="footer-vibra">VIBRA</span>
                <span className="footer-liste">LISTE</span>
                <span className="footer-vibra">N</span>
              </h1>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="nav-list-footer">
          <li>
              <Link to="/home" className={activePage === "home" ? "nav-item-footer active" : "nav-item-footer"}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={activePage === "about" ? "nav-item-footer active" : "nav-item-footer"}>About</Link>
            </li>
            <li>
              <Link to="/faqs" className={activePage === "faqs" ? "nav-item-footer active" : "nav-item-footer"}>FAQs</Link>
            </li>
            <li>
              <Link to="/contact" className={activePage === "contact" ? "nav-item-footer active" : "nav-item-footer"}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="footer-all-rights">© 2025 VIBRALISTEN. All rights reserved.</div>
    </footer>
  );
}

export default Footer;