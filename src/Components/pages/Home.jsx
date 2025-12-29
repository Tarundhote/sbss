import React from "react";
import "./home.css"
import ImageSlider from "./ImageSlider";
function Home() {
  return (
    <div className="parent" >
      <div className="img1  " >
        {/* <img src="skill2.png" alt="" /> */}
        <ImageSlider/>
      </div>
    </div>
  );
}

export default Home;
