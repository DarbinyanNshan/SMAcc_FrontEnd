import React, { useEffect } from "react";
import "./style.css"

import home4 from "../../assets/images/home/home4.jpg"
import { useNavigate } from "react-router-dom";

export const Home3 = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/');
        window.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    };

    const paragraphs = [
        "📈 Պայմանագրում հստակ սահմանվում է կատարվող աշխատանքների կամ մատուցվող ծառայությունների ցանկը։ Աշխատանքի արդյունքի մատակարարումը վավերացվում է կողմերի միջև կնքվող հանձնման-ընդունման ակտով։",
        "📈 Կարևորը աշխատանքի արդյունքն է, ոչ թե գործընթացը։ Պատվիրատուն իրավունք չունի միջամտել աշխատանքի կատարման ընթացքին։ Պատվիրատուի մասնակցությունը գործընթացին սահմանափակվում է միջանկյալ հանձնման-ընդունման գործընթացներով։",
        "📈 Պայմանագրում սահմանվում են աշխատանքի մեկնարկի ու ավարտի ամսաթվերը, սակայն Կատարողը ինքնուրույն է որոշում, թե ինչ գրաֆիկով է աշխատելու։",
        "📈 Պայմանագիրը կարող է նախատեսել աշխատանքային պայմանների ապահովումը Պատվիրատուի կողմից, սակայն դա պարտադիր պայման չէ։",
        "📈 Կատարողը կարող է ներգրավել երրորդ անձանց աշխատանքների կատարմանը։",
        "📈 Վարձատրության չափը, պայմանները (օրինակ կանխավճար և վերջնական մարում հանձնման-ընդունման ակտը ստորագրելուց հետո) սահմանվում է պայմանագրով։",
        "📈 Պատվիրատուն պարտավոր է կատարել օրենքով սահմանված պահումները (եկամտային հարկ, կենսաթոշակային հատկացումներ, դրոշմանիշային վճար) պայմանագրով սահմանված վճարից։ Պահումները կատարվում են վճարման ամսում։",
        "📈 Այս տեսակի պայմանագրերը պետք է ունենան կատարման հստակ ժամկետներ։"
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

    return <>
        <div className="home_peges">
            <img  className="home_peges_img" src={home4} alt="4" />
            <div className="home_peges_content">
            <h2> 😉 Խոսենք Քաղաքացիաիրավական Պայմանագրի մասին 🤝</h2>
            {paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
            ))}
            <button onClick={onClick}>Վերադարնալ</button>
            </div>
           
        </div>
    </>

}