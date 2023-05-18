import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import TeaVarieties from './layouts/TeaVarieties';

const images = [
  './img/banner/banner_1.jpg',
  './img/banner/banner_2.jpg'
];

const Home = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselHover, setCarouselHover] = useState(false);

  const nextImage = () => {
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  console.log(images[currentImageIndex]);

  return (
    <>
      <div className="carousel">
        <button className="carousel__prev" onClick={prevImage}>
          <IoIosArrowBack className={carouselHover ? 'carousel_prev_icon' : 'carousel_icon_none'} onMouseOver={() => setCarouselHover(true)} onMouseLeave={() => setCarouselHover(false)} />
        </button>
        <img className="carousel__image" src={images[currentImageIndex]} alt="Carousel" onMouseOver={() => setCarouselHover(true)} onMouseLeave={() => setCarouselHover(false)} />
        <button className="carousel__next" onClick={nextImage}>
          <IoIosArrowForward className={carouselHover ? 'carousel_next_icon' : 'carousel_icon_none'} onMouseOver={() => setCarouselHover(true)} onMouseLeave={() => setCarouselHover(false)} />
        </button>
      </div>
      <div>
        <TeaVarieties />
      </div>
    </>
  );
};


export default Home;