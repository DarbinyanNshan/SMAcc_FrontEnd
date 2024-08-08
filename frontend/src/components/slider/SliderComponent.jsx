import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./style.css"; 

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";

import { useNavigate } from "react-router-dom";

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();


  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    afterChange: (current) => {
      setCurrentSlide(current);
      setTimeout(() => setIsAnimating(true), 50); 
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
  const onContact = () => {
    navigate('/contact');
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const onAbout = () => {
  navigate('/about');
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
};


useEffect(() => {
  const slides = document.querySelectorAll('.slick-slide');
  slides.forEach((slide, index) => {
    const h3 = slide.querySelector('h3');
    const p = slide.querySelector('p');
    const buttons = slide.querySelectorAll('.btn_slider1');
    if (h3) {
      h3.style.animation = index === currentSlide && isAnimating ? 'fadeInUp 1s ease-in-out forwards 0.5s' : '';
    }
    if (p) {
      p.style.animation = index === currentSlide && isAnimating ? 'fadeInUp 1s ease-in-out forwards 1s' : '';
    }
    buttons.forEach((button, btnIndex) => {
      if (button) {
        button.style.animation = index === currentSlide && isAnimating ? `homeContenhbtn 1s ease-in-out forwards ${1.5 + btnIndex * 0.2}s` : '';
      }
    });
  });
}, [currentSlide, isAnimating]);


  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={img1} alt="Slide 1" />
          <div className={`overlay ${currentSlide === 0 && isAnimating ? 'animate' : ''}`}>
            <h3>Let New Tech Move Your Business Forward</h3>
            <p>Embrace innovation and technology </p>
            <button onClick={onAbout} className="btn_slider1">Մեր Մասին</button>
            <button onClick={onContact} className="btn_slider2">ԿԱՊ</button>
          </div>
        </div>
        <div className="slide">
          <img src={img2} alt="Slide 2" />
          <div className={`overlay center-text ${currentSlide === 1 && isAnimating ? 'animate' : ''}`}>
            <h3>Professional Accounting Services</h3>
            <p>Helping you achieve financial success</p>
            <button  onClick={onAbout}  className="btn_slider1">Մեր Մասին</button>
            <button onClick={onContact}  className="btn_slider2">ԿԱՊ</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
