import React from "react";
import Header from "../../components/Header/Header";
import About from "../About/About"
import ButtonConvert from "../../components/Button/Button";
import "../../assets/styles/global.css";
import "./Home.css";

const Home = () => {
  return (
    <div>
    <section className="home-section">
      {/* spacing before the header */}
      <div className="home-above-header-spacing"></div>
      <Header />
      {/* spacing below the header */}
      <div className="home-below-header-spacing"></div>
      {/* featured-title */}
      <h1>
        <span className="featured-title">Convert YouTube videos to MP3</span> in
        seconds.
      </h1>
      {/* Space below the featured title */}
      <div className="home-below-featured-title"></div>
      {/* subtitle */}
      <p className="subtitle">Fast, simple and free. Just paste the link.</p>
      {/* Space below the subtitle */}
      <div className="home-below-subtitle"></div>
      {/* Button */}
      <ButtonConvert />
    </section>

    {/* About Section*/}
      <section className="about-section">
        <About />
      </section>
    </div>
  );
};

export default Home;
