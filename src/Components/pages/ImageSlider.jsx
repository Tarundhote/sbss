import React, { useState, useEffect, useRef } from "react";
import "./ImageSlider.css"; 

const ImageSlider = () => {
  const images = ["skill1.png", "skill2.png", "skill3.png", "skill4.png"];
  
  // We add a clone of the first image to the end for the seamless loop effect
  const extendedImages = [...images, images[0]];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  const goToNext = () => {
    // If we are at the clone (last index), don't do anything until reset
    if (currentIndex === extendedImages.length - 1) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const goToPrevious = () => {
    if (currentIndex === 0) {
      // Loop back to the real last image (index 3)
      // Note: seamless backward looping requires a clone at the front too, 
      // but for simplicity, we just slide back to the last image here.
      setIsTransitioning(true);
      setCurrentIndex(images.length - 1);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleTransitionEnd = () => {
    // If we have slid to the Clone (last item), instantly snap back to real 0
    if (currentIndex === images.length) {
      setIsTransitioning(false); // Turn off animation
      setCurrentIndex(0); // Snap to start
    }
  };

  // Re-enable transition after snapping back to 0
  useEffect(() => {
    if (currentIndex === 0 && isTransitioning === false) {
      // Small delay to let React render the snap, then turn animation back on
      setTimeout(() => {
        setIsTransitioning(true);
      }, 20);
    }
  }, [currentIndex, isTransitioning]);

  // Auto-play
  useEffect(() => {
    timeoutRef.current = setTimeout(goToNext, 3000);
    return () => clearTimeout(timeoutRef.current);
  });

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        style={{
          // FIX: Added backticks for template literal
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((image, index) => (
          <div key={index} className="slide">
            {/* FIX: Added backticks for alt text */}
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="nav-button prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="nav-button next" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;