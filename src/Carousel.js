import './CSS/fonts.css'
import './CSS/button.css'
import './CSS/carousel.css';
import React, { useState } from 'react';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; 

  function nextSlide() {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  function prevSlide() {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  return (
    <div className="carousel">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <div className="slide slide1">1</div>
        <div className="slide slide2">2</div>
        <div className="slide slide3">3</div>
        <div className="slide slide4">4</div>
        <div className="slide slide5">5</div>
      </div>
      <button className="testbutton prev" onClick={prevSlide}>Left</button>
      <button className="testbutton next" onClick={nextSlide}>Right</button>
      <h1 className='txt'>Test</h1>
    </div>
  );
}

