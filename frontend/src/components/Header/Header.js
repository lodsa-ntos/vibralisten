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
              <Link to="/home" className="nav-item active">Home</Link>
            </li>
            <li>
              <Link to="/faqs" className="nav-item">FAQs</Link>
            </li>
            <li>
              <Link to="/about" className="nav-item">About</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-item">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
