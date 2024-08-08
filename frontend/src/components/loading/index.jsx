import React from "react";
import './style.css';

import Logo from '../../assets/images/logo_Sm.jpg';

export default function LoadingPage() {
    return(
    <div className="loading">
        <img src={Logo} alt="Logo" className="mainLogo"/>
    </div>);
};