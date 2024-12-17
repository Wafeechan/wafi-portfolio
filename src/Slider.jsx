// Slider.jsx
import React, { useState } from 'react';
import './Slider.css'; // CSS file for styling (optional)

const ImageSlider = ({ images, width, height }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div
      className="slider-container relative overflow-hidden"
      style={{ maxWidth: width, height: height }}
    >
      <div
        className="slider relative flex transition-all duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="slide w-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image.url})`, height: height }}
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
