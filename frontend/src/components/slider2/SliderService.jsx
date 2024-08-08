import React from 'react';
import './style.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaMoneyBillAlt } from "react-icons/fa";
import { FaChartBar } from 'react-icons/fa';
import { FaCalculator } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";



const SliderService = () => {
    const services = [
        {
            icon: FaChartBar,
            heading: "Ֆինանսական պլանավորում",
            description: "Ֆինանսական պլանավորումը ներառում է բյուջետավորում, խնայողություն, ներդրումներ և կենսաթոշակային պլանավորում՝ ապահովելով կայունություն և աճ:"
        }, 
        {
            icon: FaMoneyBillAlt,
            heading: "Ներդրումների կառավարում ",
            description: "Ներդրումների մոնիթորինգը և պորտֆելի օպտիմալացումը ներառում է ռիսկերի և եկամուտների հավասարակշռում:"
        }, 
        {
            icon: FaCalculator,
            heading: "Հարկերի պլանավորում ",
            description: "Հարկային պարտավորությունների նվազեցումը ներառում է հարկերի օպտիմալացում և ֆինանսական կառավարման ռազմավարությունների կիրառումը:"
        }, 
        {
            icon: FaUniversity,
            heading: "Բիզնես վարկ",
            description: "Բիզնես վարկը կապիտալը ձեռք բերելու միջոց է, որն օգնում է ընդլայնել գործունեությունը կամ ֆինանսավորել նախագծեր:"
        }, 
        {
            icon: FaShieldAlt,
            heading: "Ապահովագրական խորհրդատվություն",
            description: "Ապահովագրական խորհրդատվությունը ներառում է համապատասխան ապահովագրական պլանների ընտրություն և ռիսկերի կառավարում՝ անձնական կամ կազմակերպական կարիքների համար:"
        }, 
        {
            icon: FaHome,
            heading: "Կենսաթոշակային պլանավորումը",
            description: "Կենսաթոշակային պլանավորումը ներառում է ապագա կենսաթոշակային եկամուտների ապահովման ռազմավարությունների մշակումը և ֆինանսական միջոցների օպտիմալացումը:"
        },
        
    ];

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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

    return (
        <div className="slider-container">
            <div className='slider2_content'>
            <h1>Մեր ծառայությունների</h1>
            <Slider {...settings} className="home_content3">
                {services.map((service, index) => (
                    <div key={index} className="home_content3_item">
                        <div className="home_content3_title">
                            <service.icon className="service-icon" />
                            <h2>{service.heading}</h2>
                        </div>
                        <p>{service.description}</p>
                    </div>
                ))}
            </Slider>
            </div>
           
        </div>
    );
};

export default SliderService;
