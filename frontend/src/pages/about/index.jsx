import React from "react";
import "./style.css";
import SliderService from "../../components/slider2/SliderService";



export const About = () => {


    return <>
        <div className="about-us">
            <div className="about-img">
                <div className="about-text">
                    <h1>Մեր Մասին</h1>
                    <h6><span>Գլխավոր</span> / Մեր Մասին</h6>
                </div>
            </div>
            <SliderService/>
        </div>
    </>

}
