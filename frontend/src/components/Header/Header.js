import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        {/* Logo */}
        <div className="logo-container">
          <Link to="/home">
            <img
              src="Logo/music_symbol.png"
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
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
