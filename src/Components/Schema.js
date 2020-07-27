import React, {useState} from 'react';

function WorkingScheme(props) {
    const [data, setData] = useState([
        {
            title: "Оставьте заявку",
            description: "Просто заполните форму на сайте, опишите что нужно сделать, наши специалисты оценят количество работы и перезвонят вам для обсуждения деталей."
        },
        {
            title: "Обсуждение деталей",
            description: "Наш специалист свяжется с вами для обсуждения деталей, или поможет сделать выбор."
        },
        {
            title: "Сборка шкафа",
            description: "После оформления заказа, наша команда незамедлительно приступит к выполнению работы."
        },
        {
            title: "Доставка и пусконаладка",
            description: "Наши специалисты доставят шкаф на объект и запустят его."
        },
        {
            title: "Поздравляем",
            description: "Оборудование поставлено и налаженно, оно надежно будет выполнять свою работу."
        }
    ])

    return (
        <section className="Schema" id="working">
            <h2>Схема работы</h2>
            <div className="container">
                <div className="timeline">
                    {data.map((el, i) => (
                        <dl className="timeline--entry" key={i}>
                            <dt className="timeline--entry__title">{el.title}</dt>
                            <dd className="timeline--entry__detail">{el.description}</dd>
                        </dl>
                    ))}
                </div>
            </div>
            <a href="#order" className="btn">Оставить заявку</a>
        </section>
    );
}

export default WorkingScheme;
