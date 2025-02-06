import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollToTopButton from "../../components/Button/ScrollToTopButton/ScrollToTopButton";
import "../../assets/styles/global.css";
import "./Privacy.css";

const Privacy = () => {
  return (
    <>
      <main id="privacy">
        <div className="privacy-section">
          {/* spacing before the header */}
          <div className="home-above-header-spacing"></div>
          <Header />
          {/* spacing below the header */}
          <div className="home-below-header-spacing"></div>

          <h1>Privacy Policy</h1>

          <h4>1. Collecting information</h4>
          <ul className="service-topcs">
            <li>Personal Data</li>

            <div>
            VIBRALISTEN does not require registration to use the service, so we do not collect personally identifiable information.
            </div>

            <li>Usage Data</li>

            <div>
            We may collect anonymised information about how the service is used (for example, which videos are converted, IP address, browser and time of use) to improve the user experience and monitor site performance.
            </div>

            <li>Cookies</li>

            <div>
            We use cookies to store preferences and improve navigation. You can disable cookies in your browser settings, but this may affect some functionalities of the site.
            </div>
          </ul>

          <h4>2. Use of information</h4>
          <div>
          The information collected is used to:
          </div>
          <ul className="service-topcs">
            <li>Improve and optimise the service offered.</li>

            <li>Monitor and analyse the use of the site.</li>
            <li>Communicate updates and relevant information (if applicable).</li>
          </ul>

          <h4>3. Sharing Information</h4>
          <div>
          We do not sell, trade or transfer your personal information to third parties. Anonymous information may be shared with partners for analytical and service improvement purposes, but always without identifying individual users.
          </div>

          <h4>4. Security</h4>
          <div>
          We employ appropriate security measures to protect information from unauthorised access, alteration or destruction. However, no system is 100% secure, and we cannot guarantee the absolute security of data.
          </div>

          <h4>5. Your Rights</h4>
          <div>
          You have the right to request access, correction or deletion of the data we hold, in accordance with applicable laws. As we do not collect personally identifiable data for the use of the service, these requests may be limited.

          </div>

          <h4>6. Changes to the Privacy Policy</h4>
          <div>
          This policy may be updated from time to time. Changes will be published on this page and, if significant, we will notify users via the website.
          </div>

          <h4>7. Contact</h4>
          <div>
          If you have any questions or requests relating to privacy, please contact us using the contact form or by e-mail: support@vibralisten.com.
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
