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
            const elements = document.querySelectorAll('.contact_border');
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
                <div className="contact_img">
                    <div className="contact_text">
                        <h1>ԿԱՊ ՄԵԶ ՀԵՏ</h1>
                        <h6><span>Գլխավոր</span> / Կապ</h6>
                    </div>
                </div>
                <div className="contact_info">
                    <div className="contact_border">
                        <div className="contact_icon"><RiHomeOfficeFill /></div>
                        <h2 className="contact_title">Office  Addres</h2>
                        <p className="cotact_text">ք. Երևան, Դավիթ Անհաղթ 11/6</p>
                    </div>
                    <div className="contact_border">
                        <div className="contact_icon"><FaPhone /></div>
                        <h2 className="contact_title">CONTACT NUMBER</h2>
                        <p className="cotact_text"> +374 (88) 000 000</p>
                    </div>
                    <div className="contact_border">
                        <div className="contact_icon"><IoIosMail /> </div>
                        <h2 className="contact_title">EMAIL ID</h2>
                        <p className="cotact_text">info@smaccounting.am</p>
                    </div>
                </div>
                <div className="contact_me">
                    <img src={messeg_img} alt="" />

                    <form className="contact_form"
                        ref={form}
                        onSubmit={sendEmail}>
                    <h2 className="messeg_title" >Ուղարկեք մեզ հաղորդագրություն</h2>

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
                                className="contact_btn">
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
                <div className="contact_map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.2301660845555!2d44.5269981758766!3d40.203942771474566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd2d69a4f031%3A0x4b097a3c8a52eaa7!2s11%20Davit%20Anhaght%20Street%2C%20Yerevan%200014!5e0!3m2!1sru!2sam"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
            </div>
        </>
    );
};
