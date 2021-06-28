import React from 'react';
import {StaticImage} from "gatsby-plugin-image";

function Headline(props) {
    return (
        <header className="Headline">
            <StaticImage className="background" src={"../img/Headline.jpg"} alt={""} placeholder={"blurred"}/>
            <div className="container">
                <h1>Нужны электрические щиты с автоматикой?</h1>
                <p>Мы изготовим электрические шкафы любой сложности, просто оставьте заявку и наш специалист вас
                    проконсультирует.</p>
                <a href="#services">
                    <button>Узнать больше</button>
                </a>
            </div>
        </header>
    );
}

export default Headline;
