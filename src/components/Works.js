import React from 'react';

import {StaticImage} from "gatsby-plugin-image"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block"}}
            onClick={onClick}
        ><img src="https://img.icons8.com/windows/32/000000/right.png"/></div>
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", left: "-35px"}}
            onClick={onClick}
        >
            <img src="https://img.icons8.com/windows/32/000000/left.png"/>
        </div>
    );
}

function Works(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };

    const data = [
        {
            name: "ВРУ",
            date: "19.02.2021",
            img: <StaticImage placeholder="blurred"
                              layout="fixed" src="../img/ВРУ.jpg" alt={"ВРУ"}/>
        },
        {
            name: "Шкаф управления компрессором",
            date: "09.05.2021",
            img: <StaticImage placeholder="blurred"
                              layout="fixed" src="../img/упр.компрессором.jpg" alt={"упр.компрессором"}/>
        },
        {
            name: "Шкаф управления вентеляцией",
            date: "12.11.2020",
            img: <StaticImage placeholder="blurred"
                              layout="fixed" src={"../img/Вентеляция.jpg"} alt={"Вентеляция"}/>
        },
        {
            name: "Шкаф с АВР",
            date: "01.03.2021",
            img: <StaticImage placeholder="blurred"
                              layout="fixed"
                              src={"../img/image 1.jpg"}
                              alt={"Шкаф с АВР"}/>
        }
    ]
    const cards = data.map((el, i) => (
        <div className="wrap" key={i}>
            <div className="card">
                <div className="img-wrap">
                    {el.img}
                </div>
                <div className="bottom">
                    <div>
                        <h3>{el.name}</h3>
                        <p>Сделанно: {el.date}</p>
                    </div>
                    <a href="#contactUs">
                        <button>Оставить заявку</button>
                    </a>
                </div>
            </div>
        </div>
    ))
    return (
        <section className="Works" id="works">
            <div className="container">
                <h2>Наши работы</h2>
                <Slider {...settings}>
                    {cards}
                </Slider>
            </div>
        </section>
    );
}

export default Works;
