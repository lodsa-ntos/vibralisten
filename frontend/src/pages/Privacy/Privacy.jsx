import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollToTopButton from "../../components/Button/ScrollToTopButton/ScrollToTopButton";
import "../../assets/styles/global.css";
import "./Privacy.css";

const Privacy = () => {
  return (
    <>
      <main id="privacy" className="privacy-main">
        {/* spacing before the header */}
        <div className="home-above-header-spacing"></div>
          <Header />

        <div className="privacy-container">
          <h1 className="privacy-policy-title">Privacy Policy</h1>

          <div className="privacy-box">
            <p className="text-about-privacy">
              Your privacy is important to us. This Privacy Policy explains how <strong>VibraListen</strong> collects, uses, and protects your information. 
            </p>
          </div>

          <h2 className="subtitle-privacy-section">1. Collecting information</h2>
          <ul className="service-topcs">
            <li className="privacy-brands">Personal Data</li>

            <p className="text-about-privacy">
              <strong>VIBRALISTEN</strong> does not require registration to use the service, so we do not collect personally identifiable information. We collect only the necessary data to improve our services, such as anonymous usage statistics.
            </p>

            <li className="privacy-brands">Usage Data</li>

            <p className="text-about-privacy">
              We may collect anonymised information about how the service is used (for example, which videos are converted, IP address, browser and time of use) to improve the user experience and monitor site performance.  Your data is used to enhance user experience and ensure security. We do not share personal data with third parties.
            </p>

            <li className="privacy-brands">Cookies & Tracking</li>

            <p className="text-about-privacy">
              We use cookies to store preferences and improve navigation. You can disable cookies in your browser settings, but this may affect some functionalities of the site. We use cookies to personalize content and improve performance. Read more about our <a className="more-info-privacy" href="/preferences">Cookies Policy</a>.
            </p>
          </ul>

          <h2 className="subtitle-privacy-section">2. Use of information</h2>
          <p className="text-about-privacy">
            The information collected is used to:
          </p>
          <ul className="service-topcs">
            <li className="privacy-brands">Improve and optimise the service offered.</li>
            <li className="privacy-brands">Monitor and analyse the use of the site.</li>
            <li className="privacy-brands">Communicate updates and relevant information (if applicable).</li>
          </ul>

          <h2 className="subtitle-privacy-section">3. Sharing Information</h2>
          <p className="text-about-privacy">
            We do not sell, trade or transfer your personal information to third parties. Anonymous information may be shared with partners for analytical and service improvement purposes, but always without identifying individual users.
          </p>

          <h2 className="subtitle-privacy-section">4. Security</h2>
          <p className="text-about-privacy">
            We employ appropriate security measures to protect information from unauthorised access, alteration or destruction. However, no system is 100% secure, and we cannot guarantee the absolute security of data.
          </p>

          <h2 className="subtitle-privacy-section">5. User Rights</h2>
          <p className="text-about-privacy">
            You have the right to request access, correction or deletion of the data we hold, in accordance with applicable laws. As we do not collect personally identifiable data for the use of the service, these requests may be limited. You have the right to access, modify, or delete your data. Contact us for any privacy concerns.
          </p>

          <h2 className="subtitle-privacy-section">6. Changes to the Privacy Policy</h2>
          <p className="text-about-privacy">
            This policy may be updated from time to time. Changes will be published on this page and, if significant, we will notify users via the website.
          </p>

          <div className="privacy-box">
            <p className="text-about-privacy">
              Need more details? Contact us at <a className="more-info-privacy" href="mailto:privacy@vibralisten.com">privacy@vibralisten com</a>.
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

export default Privacy;
