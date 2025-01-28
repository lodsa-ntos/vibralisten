import React from "react";
import { FcIdea, FcFlashOn, FcHeadset, FcGlobe } from "react-icons/fc";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">

      <section className="container-benefits">
        <h2 className="title-bnfts">Benefits</h2>
        <div className="benefits-cards">
          <div className="card">
            <div className="icon-container">
              <FcIdea />
            </div>
            <h3>Free and No Ads</h3>
            <p>No distractions, no adverts. Just music.</p>
          </div>
          <div className="card">
            <div className="icon-container">
              <FcFlashOn />
            </div>
            <h3>Fast conversion</h3>
            <p>Convert YouTube videos to MP3 in seconds.</p>
          </div>
          <div className="card">
            <div className="icon-container">
            <FcHeadset />
            </div>
            <h3>High Quality</h3>
            <p>Choose the audio quality you prefer.</p>
          </div>
          <div className="card">
            <div className="icon-container">
            <FcGlobe />
            </div>
            <h3>Easy access</h3>
            <p>Access from any device and download your favourite music.</p>
          </div>
        </div>
      </section>

      <div className="about-content">
        <div className="container-black-wall">
          <div className="container-white-zone">
            <h1 className="about-title">about</h1>
          </div>
          <div className="body-text-container">
            <p className="body-text">
              <span className="vibra-word">VIBRA</span>
              <span className="liste-word">LISTE</span>
              <span className="vibra-word">N </span> 
              makes it simple to convert YouTube videos to MP3. 
              <br />
              Paste the link, click, and download 
              the audio in a few seconds, with total convenience.
            </p>
          </div>

          <div className="container-circles">
            <h1 className="title-circles">How it works?</h1>
            <div className="circle large"> </div>
            <div className="circle medium"> </div>
            <div className="circle small"> </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;