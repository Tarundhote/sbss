import React from "react";
import "./AboutSection.css"; // Import the CSS file

const AboutSection = () => {
  return (
    <section className="about-section">
      {/* Text Content */}
      <div className="about-content">
        <h2 className="about-title">About</h2>
        <p className="about-text">
          Trust Ease Solution is dedicated to nurturing the development and influence of
          Non-Governmental Organizations (NGOs), Non-Profit Organizations (NPOs),
          Voluntary Organizations, Social Organizations, and Trusts & Societies.
        </p>
        <p className="about-text">
          We specialize in reinvigorating dormant organizations, ensuring adherence
          to regulations, and amplifying the effectiveness of existing NGOs.
        </p>
        <p className="about-highlight">
          Choose Trust Ease Solution as your trusted NGO consultant in Indore
          for comprehensive support and strategic guidance.
        </p>
      </div>

      {/* Image Section */}
      <div className="about-image-container">
        <img
          src="dilsunSir3.jpg" // Replace with actual image path
          alt="Helping Hands"
          className="about-image"
        />
      </div>
    </section>
  );
};

export default AboutSection;
