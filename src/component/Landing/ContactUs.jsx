import React from "react";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-us-content">
        <h2 className="contact-us-title">Contact Us</h2>
        <p className="contact-us-description">
          Have a question or a news tip? Reach out to us using the contact
          information below or fill out the form, and we'll get back to you as
          soon as possible.
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-icon">&#9990;</span>
            <span className="contact-text">Phone: +962 779576700</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">&#9993;</span>
            <span className="contact-text">Email: haroun@news-website.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">&#127968;</span>
            <span className="contact-text">
              Address: haroun Street, amman, jordan
            </span>
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit" onClick={(e) => e.preventDefault()}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
