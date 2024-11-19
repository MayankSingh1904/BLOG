import React, { useState, useEffect } from "react";
import "./slider.css";
import img1 from "../assets/6.jpg";
import img2 from "../assets/7.jpg";
import img3 from "../assets/8.jpg";
import img4 from "../assets/9.jpg";


const SlideShow = () => {
  const images = [
    img1, // Local image path (make sure it's in the public folder)
    img2,img3,img4
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow">
      <div className="slide-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="prev" onClick={goToPrevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={goToNextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default SlideShow;

