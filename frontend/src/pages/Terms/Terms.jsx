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

          <h2>1. Introduction</h2>
          <div>
            Welcome to VIBRALISTEN! These Terms of Use govern access to and use
            of our website, which offers an online tool for converting YouTube
            videos into MP3 files. By using this service, you agree to these
            terms. If you do not agree to any of the terms, please do not use
            the site.
          </div>

          <h2>2. Use of Service</h2>
          <ul className="service-topcs">
            <li>Functionality</li>

            <div>
              VIBRALISTEN lets you convert public YouTube videos to MP3 quickly
              and easily.
            </div>

            <li>User Responsibility</li>

            <div>
              You are solely responsible for your use of the service. Make sure you have the necessary rights or permissions to convert and download YouTube content.
            </div>

            <li>Legal Use</li>

            <div>
              The service should only be used for legal purposes. Any use that violates copyright, intellectual property laws or other regulations will be the sole responsibility of the user.
            </div>
          </ul>

          <h2>3. Intellectual property</h2>
          <div>
          All content, design, graphics, logos and other elements on the website are the property of VIBRALISTEN or its licensors. Unauthorised use of these materials may infringe copyright laws and other proprietary rights.
          </div>

          <h2>4. Limitation of Liability</h2>
          <ul className="service-topcs">
            <li>Conversion and Quality</li>

            <div>
            VIBRALISTEN endeavours to provide high quality conversions, but does not guarantee that the process will be free of errors or interruptions.
            </div>

            <li>Exclusion of Liability</li>

            <div>
            In no event shall VIBRALISTEN be liable for direct, indirect, incidental or consequential damages arising out of the use of the service or the inability to use it.
            </div>

            <li>Changes to the Service</li>

            <div>
            We reserve the right to modify or discontinue the service at any time without prior notice.
            </div>
          </ul>

          <h2>5. Modifications to the Terms</h2>
          <div>
          We may update these Terms of Use from time to time. Changes will be posted on the site and, by continuing to use the service, you agree to the revised terms.
          </div>

          <h2>Contacting Us</h2>
          <div>
          If you have any questions or suggestions about these Terms of Use, please contact us via our contact form or send an e-mail to: support@vibralisten.com.
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
