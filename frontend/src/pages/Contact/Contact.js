import React from "react";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="container-contacts">
      <div className="card-contact">
          <div className="contact-content">
            <h3 className="title-contact-us">Contact us</h3>
            <p className="intro-contact-txt">Do you have any questions, suggestions or problems? Get in touch with us!<br />
            <br />We're always looking to improve your experience. 
            Feel free to send us a <br />message using the form on the right.<br /><br />
            </p>

            <p className="support-txt">
            🔹<span className="technical-support-txt">Technical Support </span>- Need help with conversion? Send us a message.<br />
            🔹<span className="suggestions-feedback-txt">Suggestions and Feedback </span>- Your opinion is important for improving the service.<br />
            🔹<span className="report-problem-txt">Report a Problem </span>- Found an error? Let us know so we can fix it.
            </p>

            <div className="github-icon-container">
              <BsGithub className="github-icon"/> Contribute on GitHub
            </div>
            <p className="open-source-github-txt">
            Our project is open-source! If you want to help with development, check out our repository on GitHub. 🚀
            </p>
          </div>
            {/* social media ?*/}
      </div>
      <div className="card-contact">
          <form className="contact-content">
            <div className="container-cell">
              <div className="container-name">
                <p className="title-name">Name</p>
                <input className="input" id="name_id" name="Name" placeholder="Lod Carter"></input>
              </div>
              <div className="container-email">
                <p className="title-email">E-mail</p>
                <input className="input" id="email_id" name="E-mail" placeholder="example@youremail.com"></input>
              </div>
              <div className="container-phone">
                <p className="title-phone">Phone</p>
                <input className="input" id="phone_id" name="Phone" placeholder="123 456 7890"></input>
              </div>
              <div className="container-subject">
                <p className="title-subject">Subject</p>
                <input className="input" id="subject_id" name="Subject" placeholder="Ex: Careers"></input>
              </div>
              <div className="container-message">
                <p className="title-message">Message</p>
                <textarea className="input" id="message_id" placeholder="Type your message here..."></textarea>
              </div>
            </div>
            <button className="send-message-bnt">Send message</button>
          </form>
      </div>
    </div>
  );
};

export default Contact;