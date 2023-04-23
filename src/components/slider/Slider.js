import React, { useState, useEffect } from 'react';
import './index.css';

function Slider({ list }) {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setSlideIndex(prevIndex =>
        prevIndex === list.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(slider);
  }, [list, slideIndex]);

  const handlePrev = () => {
    setSlideIndex(slideIndex => (slideIndex === 0 ? list.length - 1 : slideIndex - 1));
  };

  const handleNext = () => {
    setSlideIndex(slideIndex => (slideIndex === list.length - 1 ? 0 : slideIndex + 1));
  };

  return (
    <div className="slider">
      <div className="slides">
        {list.map((item, index) => (
          <div
            className={slideIndex === index ? 'slide active' : 'slide'}
            key={index}
          >
            <img className='sliderImage' src={item.image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="next" onClick={handleNext}>
        &#10095;
      </button>   
    </div>
  );
}

export default Slider;
