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
        <div className="black-wall">
          <div className="about-white-zone">
            <h1 className="about-title">about</h1>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;