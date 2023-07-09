import React from "react";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <h2 className="about-us-title">About Us</h2>

        <p className="about-us-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          fringilla tincidunt ante, sed efficitur sapien lobortis quis. Donec
          blandit consectetur ullamcorper. Aenean vitae felis elit. Nullam
          lacinia nulla id quam faucibus, non aliquet odio facilisis.
        </p>
        <p className="about-us-description">
          Morbi eu ligula turpis. Vestibulum vestibulum erat a dui semper, sed
          rhoncus justo varius. Fusce tincidunt lacus eget nisl consectetur
          venenatis. Praesent hendrerit enim vitae enim lobortis, at ultrices
          elit bibendum.
        </p>
        <p className="about-us-description">
          Etiam varius elit sed turpis venenatis, ac posuere tellus interdum.
          Aliquam efficitur tortor quis luctus pulvinar. Vivamus dictum
          sollicitudin mi id molestie.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
