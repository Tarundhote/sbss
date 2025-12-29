import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Services";
import Contact from "../pages/Contact";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">SBSS FOUNDATION</div>

        <div className="menu" onClick={toggleMenu}>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
        </div>

        <ul className={isMenuOpen ? "navbar-links active" : "navbar-links"}>
          <li>
            <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="service"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default NavBar;