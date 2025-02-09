import React from "react";
import Header from "../../components/Header/Header";
import About from "../About/About";
import FAQs from "../FAQs/FAQs";
import Contact from "../Contact/Contact";
import Footer from "../../components/Footer/Footer";
import ButtonConvert from "../../components/Button/buttonConvert";
import ScrollToTopButton from "../../components/Button/ScrollToTopButton/ScrollToTopButton";
import "../../assets/styles/global.css";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="container-layout">
        <section id="home" className="home-section">
          {/* spacing before the header */}
          <div className="home-above-header-spacing"></div>
          <Header />
          {/* spacing below the header */}
          <div className="home-below-header-spacing"></div>
          {/* featured-title */}
          <h1>
            <span className="home-tilte1">Convert YouTube videos to </span> <span className="home-tilte2">MP3</span> in
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

          <div className="spacing-between-link-box-btn"></div>

          <p className="impact-phrase">
          🎵 Download your favorite tracks effortlessly. Enjoy music your way!
          </p>
        
        </section>

        {/* About Section */}
          <section id="about" className="about-section">
            <About />
          </section>

        {/* FAQs Section */}
          <section id="faqs" className="faqs-section">
            <FAQs />
          </section>
      </div>
      
        {/* Contact Section */}
        <section id="contact" className="contact-section">
              <Contact />
          </section>
        
        {/* Footer Section*/}
        <footer id="footer" className="footer-section">
            <Footer />
        </footer>

        <ScrollToTopButton />

    </div>
  );
};

export default Home;
