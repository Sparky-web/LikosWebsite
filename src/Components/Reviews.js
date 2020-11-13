import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
        ><img src="https://img.icons8.com/windows/32/000000/right.png"/></div>
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "-35px"}}
            onClick={onClick}
        >
            <img src="https://img.icons8.com/windows/32/000000/left.png"/>
        </div>
    );
}

function Reviews() {
    const [modal, setModal] = React.useState(false);
    const toggle = () => setModal(!modal);

    const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    const reviews = [
        {
            name: `ООО "Агропром Екб"`,
            text: "Большое спасибо сотрудникам компании за скорость работы и индивидуальный подход! В Москве подключить безлимитный домашний интернет предлагают более 300 провайдеров, конкуренция большая. Ребята быстро и качествено создали макет и разместили в указанных районах. Стало намного больше пользователей, оформили рекламу сразу на год – так выгоднее."
        },
        {
            name: `ООО ""`,
            text: "Открыл мужскую парикмахерскую, хотелось заявить о себе нестандартным образом. Друзья посоветовали рекламу на зеркалах пескоструем. Каждый день люди пользуются лифтом, смотрятся на себя в зеркало и видят рекламу. Сразу стало много клиентов!"
        },
        {
            name: "Алексей К.",
            text: "Оперативно и качественно! Цены оказались более выгодными, чем в других местах. Рекламу заказали месяц назад, подводим предварительные итоги. Уже увеличилось число обращений к нам. Приятно общаться с ребятами из агенства. Смело рекомендую."
        }]
    const reviewElements = reviews.map((el, i) => {
        return (
            <div key={i} className="review-wrap">
                <div className="review">
                    <h5>{el.name}</h5>
                    <p>{el.text}</p>
                </div>
            </div>
        )
    })
    return (
        <section className="Reviews" id="reviews">
            <div className="container">
                <h2>Отзывы</h2>
                <Slider {...settings}>
                    {reviewElements}
                </Slider>
            </div>
        </section>
    );
}

export default Reviews;
