import React from "react";
import './style/Header.css'

const Header = () => {
  return (
    <>
    <header>
       {/* Logo */}
      <div className="logo-container">
        <img className="logo-image" alt="Music Symbol" src="../../../public/Logo/music_symbol.png" />
        <div className="logo-text">
          <h1 className="logo">
            <span className="vibra">VIBRA</span>
            <span className="liste">LISTE</span>
            <span className="vibra">N</span>
          </h1>
          <p className="slogan">Listen. Feel. Download</p>
        </div>  
      </div>

      {/* Navigation */}
      <nav className="nav">
        <ul  className="nav-list">
        <li><a href ='/faqs'>FAQs</a></li>
        <li><a href ='/about'>About</a></li>
        <li><a href ='/contact'>contact</a></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header