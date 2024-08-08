import React from "react";
import { Route, Routes } from "react-router-dom";

import { NavBar } from "../../components/navbar";
import Home  from "../../pages/home";
import { About } from "../../pages/about";
import { Service } from "../../pages/service";
import { ContactUs } from "../../pages/contact";
import { Footer } from "../../components/footer";


import { Home1 } from "../../components/home_peegs/home1";
import { Home2 } from "../../components/home_peegs/home2";
import { Home3 } from "../../components/home_peegs/home3";
import { Error404 } from "../../pages/error404";


export const Router = () => {


    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Service />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/1" element={<Home1/>} />
                <Route path="/2" element={<Home2/>} />
                <Route path="/3" element={<Home3/>} />
                <Route path="*"  element={<Error404/>} />
            </Routes>
            <Footer/>
        </div>
    )
}