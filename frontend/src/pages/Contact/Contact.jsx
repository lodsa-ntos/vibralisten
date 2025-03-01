import React from "react";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import { PiUserCircleCheckDuotone } from "react-icons/pi";
import { LiaTimesCircle } from "react-icons/lia";

const Contact = () => {

  const [formData, setFormData] = useState({name: "", email: "", phome: "", subject: "", message: ""});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await axios.post("https://backend.com/api/contact", formData);
      if (response.status === 200) {
        setStatus("success");
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus(error);
      }
    } catch (error) {
      setStatus(error);
    }
  };
  return (
    <div className="container-contacts">
      <div className="card-contact1">
        <h3 className="title-contact-us">Contact us</h3>
        <p className="intro-contact-txt">Do you have any questions, suggestions or problems? <br />Get in touch with us!
          We're always looking to improve your experience. 
          Feel free to send us a message using the form on the right.<br /><br />
        </p>

        <p className="support-txt">
          <span className="technical-support-txt">Technical Support </span>
          <br />Need help with conversion? Send us a message.<br />
          <br /><span className="suggestions-feedback-txt">Suggestions and Feedback </span>
          <br /> Your opinion is important for improving the service.<br />
          <br /> <span className="report-problem-txt">Report a Problem </span>
          <br />Found an error? Let us know so we can fix it.
        </p>

        <div className="container-github-bnt">
        <a
            className="github-link"
            href="https://github.com/lodsa-ntos/youtube-to-mp3-converter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="github-space">
              <div className="github-icon-container">
                <BsGithub className="github-icon"/> 
              </div>
                <p className="contribute-subtitle">Contribute on GitHub</p>
            </div>
          </a>
        </div>
          
        
        <p className="open-source-github-txt">
          Our project is open-source! If you want to help with development, check out our repository on GitHub. 🚀
        </p>
      </div>

      {/*Form*/}
      <div className="card-contact2">
          <div className="contact-content-form">
            <form className="container-cell" onSubmit={handleSubmit}>
              <div className="container-name">
                <p className="title-name">Name</p>
                <input className="input-name" id="name_id" name="name" placeholder="Lod Carter" onChange={handleChange} required></input>
              </div>
              <div className="container-email">
                <p className="title-email">E-mail</p>
                <input className="input-email" id="email_id" name="email" placeholder="example@youremail.com" onChange={handleChange} required></input>
              </div>
              <div className="container-phone">
                <p className="title-phone">Phone</p>
                <input className="input-phone" id="phone_id" name="phone" placeholder="123 456 7890" onChange={handleChange} required></input>
              </div>
              <div className="container-subject">
                <p className="title-subject">Subject</p>
                <input className="input-subject" id="subject_id" name="subject" placeholder="Ex: Careers" onChange={handleChange} required></input>
              </div>
              <div className="container-message">
                <p className="title-message">Message</p>
                <textarea className="input-message" id="message_id" name="message" placeholder="Type your message here..." onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="send-message-bnt" id="button_id">
                {status === "loading" ? "Sending message..." : "Send Message"}
              </button>
            </form>

            {status === "success" && ( <div className="contact-message-form success-message"> <PiUserCircleCheckDuotone className="icon-success"/> 
            Message sent successfully! ✅
            </div>
            )}

            {status === "error" && (
              <div className="contact-message-form error-message">
                <LiaTimesCircle className="icon-error"/>
                <p>Backend is down. Copy this email: <strong>contact@vibralisten.com</strong></p>
                <button className="copy-email-btn" onClick={() => navigator.clipboard.writeText("contact@vibralisten.com")}>Copy</button>
              </div>
            )}
          </div>
      </div>
    </div>
  );
};

export default Contact;