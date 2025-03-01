import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollToTopButton from "../../components/Button/ScrollToTopButton/ScrollToTopButton";

const Preferences = () => {
  return (
    <>
      <main id="preference" className="preference-main">
        {/* spacing before the header */}
        <div className="home-above-header-spacing"></div>
        <Header />

        <div className="preference-container">
          <h1 className="preference-title">Preferences and Data Policy</h1>

          <div className="preference-box">
            <p className="text-about-preference">
              This policy explains how  <strong>VibraListen</strong> uses preferences to enhance your experience.
            </p>
          </div>

          <h2 className="subtitle-preference-section">1. What are Preferences?</h2>
          <p className="text-about-preference">
            Preferences are small text files stored on your device when you visit a website. 
            They help improve navigation and remember your settings.
          </p>

          <h2 className="subtitle-preference-section">
            2. Types of Preferences We Use
          </h2>
          <ul className="service-topcs">
            <li className="preference-brands">
              <strong>Essential Preferences: </strong>
              <p className="text-about-preference">
                Necessary for the website to function properly.
              </p>
            </li>
            <li className="preference-brands">
              <strong>Analytics Preferences </strong>
              <p className="text-about-preference">
                Help us understand how users interact with the website.
              </p>
            </li>
            <li className="preference-brands">
              <strong>Marketing Preferences: </strong>
              <p className="text-about-preference">
                Used to personalize ads and content.
              </p>
            </li>
            <li className="preference-brands">
              <strong>Customization Preferences: </strong>
              <p className="text-about-preference">
                Store user choices, such as language and theme settings.
              </p>
            </li>
          </ul>

          <h2 className="subtitle-preference-section">3. Managing Preferences</h2>
          <p className="text-about-preference">
            You can control or disable preferences through your browser settings. However, 
            disabling some preferences may affect the website's functionality.
          </p>

          <div className="preference-box">
            <p className="text-about-preference">
              Want more details? Read our{" "}
              <a className="more-info-preference" href="/privacy">
                Privacy Policy
              </a>{" "}
              or contact us at{" "}
              <a
                className="more-info-preference"
                href="mailto:support@vibralisten.com"
              >
                support@vibralisten.com
              </a>
              .
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

export default Preferences;
