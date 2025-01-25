import React from "react";
import './style/Header.css'

const Header = () => {
  return (
    <>
    <header>
      <div className="vibralisten">
        <span className="vibralisten-txt">
          <span className="vibra">VIBRA</span>
          <span>LISTE</span>
          <span className="vibra">N</span>
        </span>
      </div>
      <b className="listen-feel-download">Listen. Feel. Download</b>
      <img className="music-symbol" alt="" src="music_symbol" />
      <b className="faqs">FAQs</b>
      <b className="about">About</b>
      <b className="contact">Contact</b>

    </header>
    </>
  );
}

export default Header