import React, { useEffect, useRef } from "react";
import "./style.css";

import messeg_img from "../../assets/images/messegimg.jpg"

import { FaPhone } from "react-icons/fa";
import { RiHomeOfficeFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";

import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
    const form = useRef("");

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.contact-border');
            elements.forEach(e => {
                const rect = e.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    e.classList.add('in-view');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_avjh2ws',
            'template_3sxoptj',
            form.current,
            'G_GFIiShl_BuU3IBw')
            .then(() => {
                toast.success('Your messeg has been sent!', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }, () => {
                toast.error('You could not edit the messeg!', {
                    position: "bottom-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
        e.target.reset();

    };
    return (
        <>
            <div className="contact">
                <div className="contact-img">
                    <div className="contact-text">
                        <h1>ԿԱՊ ՄԵԶ ՀԵՏ</h1>
                        <h6><span>Գլխավոր</span> / Կապ</h6>
                    </div>
                </div>
                <div className="contact-info">
                    <div className="contact-border">
                        <div className="contact-icon"><RiHomeOfficeFill /></div>
                        <h2 className="contact-title">Office  Addres</h2>
                        <p className="cotact-text"> ք. Երևան, Հրաչյա Քոչար 147/1</p>
                    </div>
                    <div className="contact-border">
                        <div className="contact-icon"><FaPhone /></div>
                        <h2 className="contact-title">CONTACT NUMBER</h2>
                        <p className="cotact-text"> +374 (11) 488 282</p>
                        <p className="cotact-text"> +374 (11) 468 282</p>

                    </div>
                    <div className="contact-border">
                        <div className="contact-icon"><IoIosMail /> </div>
                        <h2 className="contact-title">EMAIL ID</h2>
                        <p className="cotact-text">info@smaccounting.am</p>
                    </div>
                </div>
                <div className="contact-me">
                    <img src={messeg_img} alt="" />

                    <form className="contact-form"
                        ref={form}
                        onSubmit={sendEmail}>
                    <h2 className="messeg-title" >Ուղարկեք մեզ հաղորդագրություն</h2>

                        <div className="input-box">
                            <div className="input-field">
                                <input type="text"
                                    name="user_name"
                                    placeholder="Ձեր Անունը"
                                    required
                                />
                                <span className="focus"></span>
                            </div>
                            <div className="input-field" >
                                <input type="email"
                                    placeholder="Էլ․Հասցե"
                                    name="user_email"
                                    required />
                                <span className="focus"></span>
                            </div>
                        </div>
                        <div className="textarea-field"
                        >
                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                placeholder="Ձեր Հախորդագրությունը"
                                required
                            />
                            <span className="focus"></span>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="contact-btn">
                                Ուղարկել
                            </button>
                        </div>
                        <ToastContainer
                            position="bottom-center"
                            autoClose={4000}
                            limit={1}
                            hideProgressBar={false}
                            newestOnTop
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                    </form>
                </div>
                <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1865.0076900942845!2d44.50562924612217!3d40.20316991008341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd387fb7fd3f%3A0xc540c6ec2630aead!2sHrachya%20Kochar%20St%2C%20Yerevan!5e0!3m2!1sru!2sam!4v1722245166997!5m2!1sru!2sam"
                width="600" 
                height="450" 
                style={{border:"0"}}
                 allowfullscreen="" 
                 loading="lazy" 
                 referrerpolicy="no-referrer-when-downgrade"
                 ></iframe>
        </div>
            </div>
        </>
    );
};
