import React, { useEffect, useState } from "react";
import "./imageSlide.css";

const ImageSlider = () => {
  const images = [
    { src: "https://images.wsj.net/im-810371/social", alt: "Image 1" },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCAfVgATBaPFFWX2WWJF6x-gVW4P1mdvfKA&usqp=CAU",
      alt: "Image 2",
    },
    { src: "https://images.wsj.net/im-809107/social", alt: "Image 3" },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjp5jjw8oTsE0TUtUJuo0ahese0svE0JV2Q&usqp=CAU",
      alt: "Image 4",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
