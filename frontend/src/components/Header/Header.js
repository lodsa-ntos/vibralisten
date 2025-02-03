import React from "react";
import "./Header.css";
import "./ActiveEffect";
import { Link } from "react-router-dom";
import getActivePage from "./ActiveEffect";

const Header = () => {
  const activePage = getActivePage();
  return (
    <>
      <header>
        {/* Logo */}
        <div className="logo-container">
          <Link to="/home">
            <img
              src="Logo/music_symbol.svg"
              alt="Music Symbol"
              className="logo-image"
            />
            <div className="logo-text">
              <p className="slogan ">Listen. Feel. Download.</p>
              <h1 className="logo">
                <span className="vibra">VIBRA</span>
                <span className="liste">LISTE</span>
                <span className="vibra">N</span>
              </h1>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="nav-list">
          <li>
              <Link to="/home" className={activePage === "home" ? "nav-item active" : "nav-item"}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={activePage === "about" ? "nav-item active" : "nav-item"}>About</Link>
            </li>
            <li>
              <Link to="/faqs" className={activePage === "faqs" ? "nav-item active" : "nav-item"}>FAQs</Link>
            </li>
            <li>
              <Link to="/contact" className={activePage === "contact" ? "nav-item active" : "nav-item"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
