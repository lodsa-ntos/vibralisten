import React from "react";
import './Header.css';

const Header = () => {
  return (
    <>
    <header>
       {/* Logo */}
      <div className="logo-container">
        <img src="Logo\music_symbol.png" alt="Music Symbol" className="logo-image" />
        <div className="logo-text">
          <p className="slogan ">Listen. Feel. Download.</p>
          <h1 className="logo">
            <span className="vibra">VIBRA</span>
            <span className="liste">LISTE</span>
            <span className="vibra">N</span>
          </h1>
        </div>  
      </div>

      {/* Navigation */}
      <nav>
        <ul  className="nav-list">
        <li><a href ='/faqs'>FAQs</a></li>
        <li><a href ='/about'>About</a></li>
        <li><a href ='/contact'>Contact</a></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header