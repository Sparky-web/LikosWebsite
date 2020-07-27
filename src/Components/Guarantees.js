import React from 'react';

function Guarantees(props) {
    const data = [
        {
            name: "Специалисты",
            text: "За 8 лет работы у нас образовался штаб лучших, квалифицированных специалистов, каждый из которых хорошо знает свое дело.",
            img: "shield.svg"
        },
        {
            name: "Довольные клиенты",
            text: "У нас десятки довольных клиентов, среди которых множество крупных компаний, на чьих заводах работает наше оборудование",
            img: "star.svg"
        },
        {
            name: "Надежность",
            text: "Мы гарантируем качественную сборку и пусконаладку нашего оборудования, с нами вы можете быть уверены в надежности",
            img: "shield2.svg"
        }
    ]

    const cards = data.map((el, i) => {
        return (
            <div className="card" key={i}>
                <img src={require("../img/" + el.img)} alt=""/>
                <h5>{el.name}</h5>
                <p>{el.text}</p>
            </div>
        )
    })

    return (
        <section className="Guarantees">
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
