import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone, FaComments } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" data-aos="zoom-in-up" 
    data-aos-duration="1000">
      <div className="footer-left">
        <div className="logo">
          {/* <img src="logo.png" alt="Trust Ease Solution" /> */}
          <h2>SBSS FOUNDATION</h2>
          <p>Empowering NGOs for Lasting Change</p>
        </div>
        <p className="copyright">Copyright ©2025 by SBSS FOUNDATION.</p>
      </div>

      <div className="footer-center">
        <h3>Check Out Brochures</h3>
        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>

      <div className="footer-right">
        <h3>Inquiries</h3>
        <p><FaMapMarkerAlt /> 264 Ambikapuri Extension , 60 Feet Airport Goad, Indore , M.P. 452005</p>
        <p><FaEnvelope /> trusteasesolution@gmail.com</p>
        <p><FaPhone /> +919752541428</p>
      </div>
    </footer>
  );
};

export default Footer;

