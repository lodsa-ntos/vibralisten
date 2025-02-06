import React from "react";
import "./Header.css";
import "./ActiveEffect";
import getActivePage from "./ActiveEffect";

const Header = () => {
  const activePage = getActivePage();
  return (
    <React.Fragment>
      <header>
        {/* Logo */}
        <div className="logo-container">
          <a href="#home">
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
          </a>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="nav-list">
            <li>
              <a to="#home" className={activePage === "home" ? "nav-item active" : "nav-item"}>Home</a>
            </li>
            <li>
              <a to="#about" className={activePage === "about" ? "nav-item active" : "nav-item"}>About</a>
            </li>
            <li>
              <a to="#faqs" className={activePage === "faqs" ? "nav-item active" : "nav-item"}>FAQs</a>
            </li>
            <li>
              <a to="#contact" className={activePage === "contact" ? "nav-item active" : "nav-item"}>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
