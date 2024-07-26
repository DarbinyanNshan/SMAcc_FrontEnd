import React from "react";
import { Route, Routes } from "react-router-dom";

import { NavBar } from "../../components/navbar";
import { Home } from "../../pages/home";
import { About } from "../../pages/about";
import { Service } from "../../pages/service";
import { ContactUs } from "../../pages/contact";


export const Router = () => {


    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Service />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
        </div>
    )
}