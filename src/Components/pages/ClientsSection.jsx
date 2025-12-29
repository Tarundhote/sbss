import React from "react";
import "./ClientsSection.css";

const ClientsSection = () => {
  const clients = [
    "Give For IT Foundation",
    "Seekhega India Foundation",
    "Give India Foundation",
    "Amal Foundation",
    "Seekho India Pvt. Ltd",
    "India Grow and Earn Pvt Ltd",
    "Smile Foundation",
    "Indian Awaz Foundation",
    "Amar Jyoti Siksha Samiti",
    "Help Foundation",
    "SEBI Foundation",
    "MAHARISHI Foundation",,
  ];

  return (
    <section className="clients-section" data-aos="zoom-in"
    data-aos-duration="1000">
      {/* <div className="background-shape"></div> */}
      <h2>
        We've <span className="highlight">5000+</span> Clients & Trusted Partners
        Across India
      </h2>
      <div className="clients-list">
        {clients.map((client, index) => (
          <div key={index} className="client">
            {client}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
