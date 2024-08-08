import React, { useEffect } from "react";
import "./style.css";
import SliderComponent from "../../components/slider/SliderComponent";

import home1 from "../../assets/images/home/home1.jpg";
import home2 from "../../assets/images/home/home2.jpg";
import home3 from "../../assets/images/home/home3.jpg";
import home4 from "../../assets/images/home/home4.jpg";

import { FaChevronRight } from "react-icons/fa";



import { useNavigate } from "react-router-dom";
import SliderService from "../../components/slider2/SliderService";

const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.home_1_img, .home_content1, .content_img_title, .content_number, .home2_item, .home_content_title');
            elements.forEach(e => {
                const rect = e.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    if (e.classList.contains('home_1_img')) {
                        e.classList.add('in_view1');
                    } else if (e.classList.contains('home_content1')) {
                        e.classList.add('in_view2');
                    } else if (e.classList.contains('content_img_title')) {
                        e.classList.add('in_view3');
                    } else if (e.classList.contains('content_number')) {
                        e.classList.add('in_view4');
                    } else if (e.classList.contains('home2_item')) {
                        e.classList.add('in_view5');
                    } else if (e.classList.contains('home_content_title')) {
                        e.classList.add('in_view6');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        const numbers = document.querySelectorAll('.number');
        const counters = Array(numbers.length);
        const intervals = Array(counters.length);
        counters.fill(0);

        numbers.forEach((number, index) => {
            intervals[index] = setInterval(() => {
                if (counters[index] === parseInt(number.dataset.num)) {
                    clearInterval(counters[index])
                } else {
                    counters[index] += 1;
                    number.innerHTML = counters[index];
                }
            }, 50)
        })
    }, []);


    const homeContent = [
        {
            img: home2,
            title: "Բիզնես ռիսկերի վերլուծություն",
            description: "👉 Նախ նշենք, որ սա պոտենցիալ սպառնալիքների բացահայտման, գնահատման և առաջնահերթության գործընթացն է, որոնք կարող են բացասաբար ազդել բիզնեսի բնականոն աշխատանքային գործընթացի իրականացման վրա:",
            path: '/1'
        },
        {
            img: home3,
            title: " Փորձնակի պայմանագիր ",
            description: "🔹 Գործատուն իրավունք ունի իր մոտ կազմակերպելու աշխատանքային պրակտիկա՝ կնքելով մինչև երկու ամիս ժամկետով պայմանագիր աշխատանքային պրակտիկա անցնող անձի հետ ոչ ավելի...",
            path: '/2'
        },
        {
            img: home4,
            title: " Քաղիրավական Պայմանագիր",
            description: "📈Պայմանագրում հստակ սահմանվում է կատարվող աշխատանքների կամ մատուցվող ծառայությունների ցանկը։ Աշխատանքի արդյունքի մատակարարումը վավերացվում է կողմերի միջև կնքվող հանձնման-ընդունման ակտով։",
            path: '/3'
        },
    ];

    const onServic = () => {
        navigate('/services');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className="home">
            <SliderComponent />
            <div className="home_1">
                <img className="home_1_img" src={home1} alt="" />
                <div className="home_content1">
                    <h2><span>SM Accounting</span>-ն իր հաճախորդին առաջարկում է ծառայությունների լայն շրջանակ </h2>
                    <p>
                        SM Accounting-ի որակավորված հաշվապահները կօգնեն Ձեր ընկերությանը ներդնել հաշվապահական ավտոմատացված համակարգ, վարել գրագետ ֆինանսական և հարկային հաշվառում՝ միջազգային ստանդարտների և հարկային օրենսգրքի համաձայն</p>
                    <div className="home_sevice">
                        <div className="home_content1_2">
                            <h3>Մեր Ծառայություներ</h3>
                            <p><span><FaChevronRight /></span>Հաշվապահական հաշվառման վարում</p>
                            <p><span><FaChevronRight /></span> Հաշվապահական բազայի վերականգնում</p>
                            <p><span><FaChevronRight /></span>Հարկային խորհրդատվություն</p>
                            <p><span><FaChevronRight /></span>Հարկային պլանավորում</p>
                            <p><span><FaChevronRight /></span>Հարկային ստուգումների ուղեկցում</p>
                        </div>
                        <div className="home_content1_2">
                            <h3>Մեր  առաքելությունը</h3>
                            <p><span><FaChevronRight /></span>Ֆինանսական հուսալիություն</p>
                            <p><span><FaChevronRight /></span>  Հաշվապահական ճշտություն</p>
                            <p><span><FaChevronRight /></span>Ծառայության որակ</p>
                            <p><span><FaChevronRight /></span>Տնտեսական անվտանգություն</p>
                        </div>
                    </div>
                    <button onClick={onServic}>Իմանալ ավելին </button>
                </div>
            </div>
            <div className="home_content_img">
                <div className="content_img_1">
                    <h4 className="content_img_title">Մեր ընկերությանը վարկանիշը</h4>
                    <div className="content_number">
                        <div className="number" data-num="15"></div>
                        <p>Years Experience</p>
                    </div>
                    <div className="content_number">
                        <div className="number" data-num="230"></div>
                        <p>Happy Client   </p>
                    </div>
                    <div className="content_number">
                        <div className="number" data-num="400"></div>
                        <p>Project Completed </p>
                    </div>
                </div>
            </div>
            <div className="home_content_title">
                <h2><span>SM Accounting</span> ընկերության աշխատակազմը համալրված է ՀՀ ՖՆ-ի կողմից որակավորված մասնագետներով</h2>
                <p>«SM Accounting»   ՍՊ ընկերությունը հիմնադրվել է 2017 թվականին՝ նպատակ ունենալով մատուցել որակյալ և պրոֆեսիոնալ հաշվապահական ծառայություններ։ Հիմնադրման ժամանակից ի վեր ընկերությունը գործընկեր է դարձել տարբեր ոլորտներում գործունեություն իրականացնող կազմակերպությունների հետ։ Հաշվապահական գրասենյակը, մասնագիտանալով ֆինանսական, հաշվապահական և հարկային ծառայությունների մատուցման բնագավառներում, համագործակցում է ինչպես հայաստանյան, այնպես էլ արտասահմանյան կազմակերպությունների հետ։</p>
            </div>
            <div className="home_content2">
                {homeContent.map((item, index) => (
                    <div key={index} className="home2_item">
                        <img src={item.img} alt={`home${index + 1}`} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button onClick={() => handleNavigation(item.path)}>Կարդալ ավելին</button>
                    </div>
                ))}
            </div>
            <SliderService/>
        </div>
    );
};

export default Home;
