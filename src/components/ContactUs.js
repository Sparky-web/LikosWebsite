import React, {useState} from 'react';
import axios from "axios"
import {StaticImage} from "gatsby-plugin-image";
import pattern from "../img/contact-us-pattern.png"

function Order(props) {

    const [name, setName] = useState("")
    const [contacts, setContacts] = useState("")
    const [message, setMessage] = useState("")

    const onSend = async (event) => {
        event.preventDefault()
        try {
            if (!name) alert("Заполните обязательные поля")
            else {
                await fetch("https://185.60.50.230/orders", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        email: contacts,
                        comment: message + "\n\nВнимание! Этот заказ с сайта сборки шкафов!",
                        site: "Ликос | Сборка шкафов"
                    })
                })
                alert("Ваша заявка успешно отправлена")
            }

        } catch (e) {
            alert("При отправки формы произошла ошибка")
        }
    }


    return (
        <section className="ContactUs" id="contactUs">
            <StaticImage src={"../img/ContactUs.jpg"} alt={""} class={"background"} placeholder={"blurred"}/>
            <div className="container">
                <h2>Оставить заявку</h2>
                <div className="wrap">
                    <div className="card-white">
                        <div className="wrap">
                            <h5>Мы вам перезвоним</h5>
                            <p>Сообщите нам свои контакты и наш менеджер ответит на ваши вопросы и поможет сделать
                                заказ</p>
                            <img src={pattern} alt=""/>
                        </div>
                    </div>
                    <div className="card-black">
                        <form onSubmit={onSend}>
                            <input value={name} onChange={e => setName(e.target.value)} type="text"
                                   placeholder="Ваше имя"/>
                            <input value={contacts} onChange={e => setContacts(e.target.value)} type="text"
                                   placeholder="Ваш телефон"/>
                            <textarea value={message} onChange={e => setMessage(e.target.value)} name="" id="" cols="30"
                                      rows="10" placeholder="Детали заказа"/>
                            <button type={"submit"}>Оставить заявку</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Order;
