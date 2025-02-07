import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollToTopButton from "../../components/Button/ScrollToTopButton/ScrollToTopButton";
import "../../assets/styles/global.css";
import "./Terms.css";

const Terms = () => {
  return (
    <>
      <main id="terms">
        {/* spacing before the header */}
        <div className="home-above-header-spacing"></div>
          <Header />

        <div className="terms-container">

          <h1>Terms of use</h1>

          <div className="terms-box">
            <p>
              Welcome to <strong>VIBRALISTEN</strong>! These Terms of Use govern access to and use
              of our website, which offers an online tool for converting YouTube
              videos into MP3 files. By using this service, you agree to these
              terms. If you do not agree to any of the terms, please do not use
              the site.
            </p>
          </div>

          <h2>1. Use of Service</h2>
          <ul className="service-topcs">
            <li>Acceptance of Terms</li>

            <p>
            By accessing this website, you agree to comply with these terms. If you do not agree, please do not use our services.
            </p>

            <li>User Responsibility</li>

            <p>
              You are solely responsible for your use of the service. You agree not to misuse our platform and to respect copyright laws when downloading content.
            </p>

            <li>Legal Use</li>

            <p>
              The service should only be used for legal purposes. Any use that violates copyright, intellectual property laws or other regulations will be the sole responsibility of the user.
            </p>
          </ul>

          <h2>2. Intellectual property</h2>
          <p>
          All content, design, graphics, logos and other elements on the website are the property of VIBRALISTEN or its licensors. Unauthorised use of these materials may infringe copyright laws and other proprietary rights.
          </p>

          <h2>3. Limitation of Liability</h2>
          <ul className="service-topcs">
            <li>Conversion and Quality</li>

            <p>
            <strong>VIBRALISTEN</strong> endeavours to provide high quality conversions, but does not guarantee that the process will be free of errors or interruptions.
            </p>

            <li>Exclusion of Liability</li>

            <p>
            In no event shall <strong>VIBRALISTEN</strong> be liable for direct, indirect, incidental or consequential damages arising out of the use of the service or the inability to use it.
            </p>

            <li>Changes to the Service</li>

            <p>
            We reserve the right to modify or discontinue the service at any time without prior notice.
            </p>
          </ul>

          <h2>4. Modifications to the Terms</h2>
          <p>
          We may update these Terms of Use from time to time. Changes will be posted on the site and, by continuing to use the service, you agree to the revised terms.
          </p>

          <h2>5. Changes to Terms</h2>
          <p>
          We may update these terms from time to time. The latest version will always be available on this page.
          </p>

          <div className="terms-box">
            <p>
              If you have any questions or suggestions about these Terms of Use, please contact us via our contact form or send an e-mail to <a href="mailto:support@vibralisten.com">support@vibralisten.com</a>.
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

export default Terms;
