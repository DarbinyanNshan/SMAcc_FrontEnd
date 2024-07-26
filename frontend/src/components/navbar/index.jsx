import React, { useState, useEffect } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo_Sm.png";
import { BiMap, BiTimeFive } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="info">
        <div className="contact-data">
          <p className="time">
            <span><BiTimeFive /></span>Երկ. - Ուրբ. 09:00-18:00
          </p>
          <p className="mail">
            <span><GoMail /></span> info@smaccounting.am
          </p>
          <p className="phone-number">
            <span><FiPhoneCall /></span>+374 (88)000 000
          </p>
        </div>
        <div className="address">
          <p className="map-text">
            <span><BiMap /></span> ք. Երևան, Դավիթ Անհաղթ 11/6
          </p>
        </div>
      </div>
      <nav className={`navbar ${isFixed ? "fixed" : ""}`}>
        <div className="logo">
          <img src={logo} alt="*" />
        </div>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Գլխավոր</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>Մեր Մասին</NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>Ծառայություներ </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Կապ </NavLink>
        </div>
        <div className={`new-toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
        </div>
      </nav>
    </>
  );
};
