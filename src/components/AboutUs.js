import React from 'react';
import {StaticImage} from "gatsby-plugin-image";

function AboutUs(props) {
    return (
        <section className="AboutUs" id="aboutUs">
            <StaticImage src={"../img/AboutUs.jpg"} alt={""} className={"background"}/>
            <div className="container">
                <h2>О нас</h2>
                <div className="text">
                    <p>Мы производим сборку электрических щитов и шкафов с автоматикой различной степени сложности.</p>
                    <p>В нашей команде собраны конструктора, проектанты, сборщики высокой квалификации, за плечами
                        которых многолетний успешный опыт в разработке, комплектовании, сборке, установке и пуске
                        электроустановок "под ключ". </p>
                    <p>Сборка щитов - наша профессия.</p>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;