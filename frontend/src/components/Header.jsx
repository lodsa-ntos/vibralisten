import React from "react";
import { useState, useEffect } from "react";
import getActivePage from "./ActiveEffect";
import { Link } from "react-router-dom";

const Header = () => {
  const activePage = getActivePage();

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [ visible, setVisible ] = useState(true);
  const [ isOpen, setIsOpen ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.screenY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <header className={`header ${ visible ? "visible" : "hidden"}`}>
        {/* Logo */}
        <div className="logo-container">
          <Link to="/#home">
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
        <nav className={`nav-bar ${isOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link to="/#home" onClick={closeMenu} className={activePage === "home" ? "nav-item active" : "nav-item"}>Home</Link>
            </li>
            <li>
              <Link to="/#about" onClick={closeMenu} className={activePage === "about" ? "nav-item active" : "nav-item"}>About</Link>
            </li>
            <li>
              <Link to="/#faqs" onClick={closeMenu} className={activePage === "faqs" ? "nav-item active" : "nav-item"}>FAQs</Link>
            </li>
            <li>
              <Link to="/#contact" onClick={closeMenu} className={activePage === "contact" ? "nav-item active" : "nav-item"}>Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="hamburguer-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
