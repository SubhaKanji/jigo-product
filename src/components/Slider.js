// Slider.js
import React, { useState, useEffect } from 'react';
import { LuArrowLeftCircle } from "react-icons/lu";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { CiPlay1 } from "react-icons/ci";
import { TbPlayerPause } from "react-icons/tb";
import { BsFullscreen } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";
const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52-MjUk4zchX1dZUKR68t00L_ep0gejKE2Q&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIXZwkRKLkEV4Y6Z-QG00iFSIkdBVzgtXKA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6e4LWSd8vFE3BJHu8leoUOpYFimB0YxhMtg&usqp=CAU'
];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 3000); // Change slide every 3 seconds
    }
    return () => clearInterval(intervalId);
  }, [isPlaying]);

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentImage(index);
  };

  const togglePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <img
          className="w-full transition-transform duration-300 transform"
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
        />
      </div>
      <button
        className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-gray-200 text-black px-1 py-1 rounded-full"
        onClick={prevSlide}
      >
        <MdKeyboardArrowLeft  className='w-5 h-5'/>
       
      </button>
      <button
        className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-gray-200 text-black px-1 py-1 rounded-full"
        onClick={nextSlide}
      >
        <MdChevronRight className='w-5 h-5' />
      

      </button>
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {images.map(({}, index) => (
          <button
            key={index}
            src={images[currentImage]}
            className={`inline-block w-4 h-4 mx-1 rounded-full ${
              currentImage === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div> */}
      <button
        className="absolute bottom-4 left-4 text-black  px-3 py-1 rounded-full"
        onClick={togglePlay}
      >
        {isPlaying ?<TbPlayerPause className='w-8 h-8 ' /> : <CiPlay1 className='w-8 h-8'/>  }
      </button>
      <button
        className="absolute bottom-4 right-4 text-black  px-3 py-1 rounded-full">

      <BsFullscreen className='text-2xl' />

      </button>
    </div>
  );
};

export default Slider;