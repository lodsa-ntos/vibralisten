import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollToTopButton from "../../components/Button/ScrollToTopButton/ScrollToTopButton";
import "../../assets/styles/global.css";
import "./Cookies.css";

const Cookies = () => {
  return (
    <>
      <main id="cookies" className="cookies-main">
        {/* spacing before the header */}
        <div className="home-above-header-spacing"></div>
          <Header />

        <div className="cookies-container">
          <h1 className="cookies-title">Cookies Policy</h1>

          <div className="cookies-box">
            <p className="text-about-cookies">
            This Cookies Policy explains how <strong>VibraListen</strong> uses cookies to enhance your experience.
            </p>
          </div>

          <h2 className="subtitle-cookies-section">1. What are Cookies?</h2>
          <p className="text-about-cookies">
          Cookies are small text files stored on your device when you visit a website. They help improve navigation and remember user preferences.
          </p>

          <h2 className="subtitle-cookies-section">2. Types of Cookies We Use</h2>
          <ul className="service-topcs">
            <li className="cookies-brands"><strong>Essential Cookies: </strong> Necessary for site functionality.</li>
            <li className="cookies-brands"><strong>Analytics Cookies: </strong>Help us understand how users interact with the website.</li>
            <li className="cookies-brands"><strong>Marketing Cookies: </strong> Used to personalize ads and content.</li>
            <li className="cookies-brands"><strong>Preference Cookies: </strong> Store user choices, like language and theme settings.</li>
          </ul>

          <h2 className="subtitle-cookies-section">3. Managing Cookies</h2>
          <p className="text-about-cookies">
          You can control or disable cookies via browser settings. However, disabling some cookies may affect functionality.
          </p>

          <div className="cookies-box">
            <p className="text-about-cookies">
            Want more details? Read our <a className="more-info-cookies" href="/privacy">Privacy Policy</a>or contact us at 
            <a className="more-info-cookies" href="mailto:support@vibralisten.com">support@vibralisten.com</a>.
            </p>
          </div>
        </div>
      </main>
      {/* Footer Section*/}
      <Footer className="footer-section--page" />

      <ScrollToTopButton />
    </>
  );
};

export default Cookies;
