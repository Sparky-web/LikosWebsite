import React from 'react';
import {StaticImage} from "gatsby-plugin-image";

function Guarantees(props) {
    const data = [
        {
            name: "Специалисты",
            text: "За 8 лет работы у нас образовался штаб лучших, квалифицированных специалистов, каждый из которых хорошо знает свое дело.",
            img: <StaticImage placeholder="blurred"
                              layout="fixed"
                              src={"../img/shield.svg"}
                              alt={""}/>
        },
        {
            name: "Довольные клиенты",
            text: "У нас десятки довольных клиентов, среди которых множество крупных компаний, на чьих заводах работает наше оборудование",
            img: <StaticImage placeholder="blurred"
                              layout="fixed"
                              src={"../img/star.svg"}
                              alt={""}/>
        },
        {
            name: "Надежность",
            text: "Мы гарантируем качественную сборку и пусконаладку нашего оборудования, с нами вы можете быть уверены в надежности",
            img: <StaticImage placeholder="blurred"
                              layout="fixed"
                              src={"../img/shield2.svg"}
                              alt={""}/>
        }
    ]

    const cards = data.map((el, i) => {
        return (
            <div className="card" key={i}>
                {el.img}
                <h5>{el.name}</h5>
                <p>{el.text}</p>
            </div>
        )
    })

    return (
        <section className="Guarantees" id="guarantees">
            <div className="container">
                <h2>Гарантии</h2>
                <div className="wrap">
                    {cards}
                </div>
            </div>
        </section>
    );
}

export default Guarantees;
