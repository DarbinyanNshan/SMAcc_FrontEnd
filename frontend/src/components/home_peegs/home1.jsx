import React, { useEffect } from "react";
import "./style.css";
import home2 from "../../assets/images/home/home2.jpg";
import { useNavigate } from "react-router-dom";

export const Home1 = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/');
        window.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    };

    const paragraphs = [
        "✅ Գնահատել կազմակերպության ակտիվների իրացվելիության մակարդակը,",
        "✅ Գնահատել սեփական ու փոխառու միջոցների հարաբերակցությունը,",
        "✅ Գնահատել շահութաբերությունը։",
        "Ապահովագրեք Ձեր բիզնեսը հնարավոր ռիսկերից SM Accounting-ի հետ։"
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
                <h2>Բիզնես ռիսկերի վերլուծություն</h2>
                <h5>
                    Նախ նշենք, որ սա պոտենցիալ սպառնալիքների բացահայտման,
                    գնահատման և առաջնահերթության գործընթացն է, որոնք կարող են բացասաբար
                    ազդել բիզնեսի բնականոն աշխատանքային գործընթացի իրականացման վրա:
                </h5>
                <h6>Ռիսկերի մոնիթորինգը հնարավորություն է տալիս՝</h6>
                {paragraphs.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
                <button onClick={onClick}>Վերադարնալ</button>
            </div>
        </div>
    );
};
