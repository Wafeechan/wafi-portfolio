import React, { useState } from 'react';
import './ImageSlider.css'; // Optional, for additional styling
import image1 from './assets/tempBG7.jpg'
import image2 from './assets/tempBG.jpg'
import image3 from './assets/tempBG8.png'

// Commented because the array was overridden by another similar array that was on the jsx where this slider was applied to.
// const images = [ 
//   { id: 1, url: image1 },
//   { id: 2, url: image2 },
//   { id: 3, url: image3 },
// ];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current slide index

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container relative w-full mx-auto overflow-hidden">
      <div className="slider relative flex transition-all duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className="slide max-w-full max-h-96 flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image.url})` }}
          ></div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="dots absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`dot w-3 h-3 rounded-full ${
              idx === currentIndex ? 'bg-white' : 'bg-gray-500'
            } cursor-pointer`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
