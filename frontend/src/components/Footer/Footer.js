import React from "react";
import { Link } from "react-router-dom";
import getActivePage from "../Header/ActiveEffect";
import { BsGithub } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";
import "../Header/ActiveEffect";
import "./Footer.css";

const Footer = () => {
  const activePage = getActivePage();
  return (
    <>
      <div className="footer-content">
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
              <Link to="/home" className={activePage === "home" ? "nav-item-footer active" : "nav-item-footer"}>HOME</Link>
            </li>
            <li>
              <Link to="/about" className={activePage === "about" ? "nav-item-footer active" : "nav-item-footer"}>ABOUT</Link>
            </li>
            <li>
              <Link to="/faqs" className={activePage === "faqs" ? "nav-item-footer active" : "nav-item-footer"}>FAQS</Link>
            </li>
            <li>
              <Link to="/contact" className={activePage === "contact" ? "nav-item-footer active" : "nav-item-footer"}>CONTACT</Link>
            </li>
          </ul>
        </nav>

        {/* Contribute on GitHub */}
        <div className="footer-github-color">
          <a
            className="footer-github-link"
            href="https://github.com/lodsa-ntos/youtube-to-mp3-converter"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="footer-github-space">
              <div className="footer-github-icon-container">
                <BsGithub className="footer-github-icon"/> 
              </div>
              <p className="footer-contribute-subtitle">Contribute on GitHub</p>
            </div>
          </a>
        </div>
      </div>

      <div className="footer-all-rights">
        <div className="footer-left">
          <p className="footer-vibralisten">
            © 2025 VIBRALISTEN. All rights reserved 
          </p>
        </div>

        <div className="footer-center">
          <img
            src="Logo/music_symbol_dark_mode.svg"
            alt="Music Symbol"
            className="footer-logo-short"
          />
        </div>
        
        <div className="footer-rigth">
        <Link to="/therms"><span className="footer-terms"
            ><MdOutlinePrivacyTip className="footer-icon-terms" /> 
            Terms of Use
          </span></Link> | <Link to="/privacy"><span className="footer-privacy">Privacy Policy</span></Link>
        </div>
      </div>
    </>
  );
}

export default Footer;