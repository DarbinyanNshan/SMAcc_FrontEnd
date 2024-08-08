import React, { useEffect } from "react";
import "./style.css";
import home2 from "../../assets/images/home/home2.jpg";
import { useNavigate } from "react-router-dom";

export const Home2 = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/');
        window.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    };

    const paragraphs = [
        "🔹 Գործատուն իրավունք ունի իր մոտ կազմակերպելու աշխատանքային պրակտիկա՝ կնքելով մինչև երկու ամիս ժամկետով պայմանագիր աշխատանքային պրակտիկա անցնող անձի հետ ոչ ավելի, քան մեկ անգամ` առանց երկարաձգման իրավունքի:",
        "🔹 Գործատուի մոտ փորձնակների թիվը չի կարող գերազանցել տվյալ պահին աշխատողների թվի տասը տոկոսը:",
        "🔹 Գործատուի մոտ աշխատանքային փորձառություն ձեռք բերելու ժամանակահատվածը փորձնակի համար աշխատանքային ստաժ չի համարվում:",
        "🔹 Փորձնակը գործատուի մոտ աշխատանքի է ներգրավվում և աշխատանքային փորձառություն է ձեռք բերում ոչ ավելի, քան շաբաթական հինգ օր, օրական չորս ժամ և շաբաթական քսան ժամ տևողությամբ՝ պահպանելով հանգստի և սնվելու համար ընդմիջումները:"
    ];

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.home_peges_img, .home_peges_content');
            elements.forEach(e => {
                const rect = e.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    if (e.classList.contains('home_peges_img')) {
                        e.classList.add('in_view_img');
                    } else if (e.classList.contains('home_peges_content')) {
                        e.classList.add('in_view_content')
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="home_peges">
            <img className="home_peges_img" src={home2} alt="2" />
            <div className="home_peges_content">
            <h2>Փորձնակի պայմանագիր</h2>
                {paragraphs.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
                <button onClick={onClick}>Վերադարնալ</button>
            </div>
        </div>
    );
};
