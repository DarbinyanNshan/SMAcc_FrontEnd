import React from "react";
import "./style.css";

import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai"
import { useNavigate } from "react-router-dom";

import { RiMapPinLine } from "react-icons/ri";
import { FiPhoneForwarded } from "react-icons/fi";
import { GrMailOption } from "react-icons/gr";



export const Footer = () => {
  const navigate = useNavigate();

  const onHome = () => {
    navigate('/');
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

  const onService = () => {
    navigate('/services');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onContact = () => {
    navigate('/contact');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="footer">
        <div className="footer_contact">
          <h2>Կապ Մեզ Հետ</h2>
          <div className="footer-content">
            <p>
              <span><RiMapPinLine /> </span>ք. Երևան, Հրաչյա Քոչար 147/1
            </p>
            <p>
              <span> <FiPhoneForwarded /> </span>+374 (11)468 282
            </p>
            <p>
              <span><GrMailOption /> </span>info@smaccounting.am
            </p>
          </div>
        </div>
        <div className="website">
          <h2>Բաժանորդագրվել</h2>
          <div className="website_icon">
            <div className="fa">
              <a
                href="https://www.facebook.com/smaccountingarmenia"
                aria-label="Facebook"
              >
                <BiLogoFacebook />
              </a>
            </div>
            <div className="in">
              <a href="https://www.instagram.com/smaccounting.am/" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
            <div className="li">
              <a href="https://www.linkedin.com/company/sm-accounting/" aria-label="LinkedIn">
                <BiLogoLinkedin />
              </a>
            </div>
            {/* <div className="yt">
                <a href="https://www.instagram.com/smaccounting.am/" aria-label="YouTube">
                  <AiFillYoutube />
                </a>
              </div> */}
            <div className="twit">
              <a href="#" aria-label="Twitter">
                <AiOutlineTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_text">
        <div className="pages_link">
          <div>
            <button onClick={onHome}>Գլխավոր</button>
          </div>
          <div>
            <button onClick={onAbout}>Մեր Մասին</button>
          </div>
          <div>
            <button onClick={onService}>Ծառայություներ</button>
          </div>
          <div>
            <button onClick={onContact}>Կապ</button>
          </div>
        </div>
      </div>
    </>
  );
};
