import React from "react";
import Navbar from "./Components/navbar/NavBar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Services from "./Components/pages/Services";
import Footer from "./Components/footer/Footer";
import Contact from "./Components/pages/Contact";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css"
const App = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <div className="container">
      <Navbar/>
      {/* <Home />
      <About/>
      <Services/>
      <Contact/> */}
     <Footer/>
     
    </div>
  );
};

export default App;


