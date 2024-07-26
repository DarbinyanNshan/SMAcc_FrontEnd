import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./style.css"; 
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
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

  useEffect(() => {
    const slides = document.querySelectorAll('.slick-slide');
    slides.forEach((slide, index) => {
      const h3 = slide.querySelector('h3');
      const p = slide.querySelector('p');
      const buttons = slide.querySelectorAll('.btn_slider1');

      if (index === currentSlide && isAnimating) {
        h3.style.animation = 'fadeInUp 1s ease-in-out forwards 0.5s';
        p.style.animation = 'fadeInUp 1s ease-in-out forwards 1s';
        buttons.forEach((button, btnIndex) => {
          button.style.animation = `homeContenhbtn 1s ease-in-out forwards ${1.5 + btnIndex * 0.2}s`;
        });
      } else {
        h3.style.animation = '';
        p.style.animation = '';
        buttons.forEach((button) => {
          button.style.animation = '';
        });
      }
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
            <button className="btn_slider1">About Me</button>
            <button className="btn_slider2">Contact Us</button>
          </div>
        </div>
        <div className="slide">
          <img src={img2} alt="Slide 2" />
          <div className={`overlay center-text ${currentSlide === 1 && isAnimating ? 'animate' : ''}`}>
            <h3>Professional Accounting Services</h3>
            <p>Helping you achieve financial success</p>
            <button className="btn_slider1">Abote Me</button>
            <button className="btn_slider2">Contact Us</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
