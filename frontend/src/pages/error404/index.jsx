import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Error404 = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    return (
        <div className="error-page">
            <div className="error-content">
                <h1 className="error-code">404</h1>
                <h4 className="error-message">Էջը չի գտնվել!</h4>
                <p className="error-text">Պահանջվող փաստաթուղթը չի գտնվել այս սերվերում:</p>
                <button className="error-button" onClick={goToHome}>հետ գնալ Գլխավոր Էջ</button>
            </div>
        </div>
    );
};
