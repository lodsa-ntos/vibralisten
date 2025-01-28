import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">

      <section className="container-benefits">
        <h2 className="title-bnfts">Benefits</h2>
        <div className="benefits-cards">
          <div className="card">
            <h3>Free and No Ads</h3>
            <p>No distractions, no adverts. Just music.</p>
          </div>
          <div className="card">
            <h3>Fast conversion</h3>
            <p>Convert YouTube videos to MP3 in seconds.</p>
          </div>
          <div className="card">
            <h3>High Quality</h3>
            <p>Choose the audio quality you prefer.</p>
          </div>
          <div className="card">
            <h3>Easy access</h3>
            <p>Access from any device and download your favourite music.</p>
          </div>
        </div>
      </section>

      <div className="about-content">
        <div className="wrapper">
          <span className="big-title">about</span>
          <span className="overlay-vibra-word">VIBRA</span>
          <span className="overlay-liste-word">LISTE</span>
          <span className="overlay-bold-n">N</span>
        </div>

        <div className="body-text">
          <p>
          VibraListen makes it simple to convert YouTube 
          videos to MP3. 
          <br />
          Paste the link, click, and download 
          the audio in a few seconds, with total convenience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;