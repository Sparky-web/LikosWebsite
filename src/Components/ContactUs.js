import React, {useState} from 'react';
import axios from "axios"

function Order(props) {

    const [name, setName] = useState("")
    const [contacts, setContacts] = useState("")
    const [message, setMessage] = useState("")

    const onSend = async (event) => {
        event.preventDefault()
        try {
            if(!name) alert("Заполните обязательные поля")
            else {
                await axios.post("https://us-central1-likostrade.cloudfunctions.net/app/sendRequest",
                    {
                        site: "likostrade.com | Плазменная резка",
                        contacts,
                        name,
                        message
                    }
                )
                alert("Ваша заявка успешно отправлена")
            }

        } catch (e) {
           alert("При отправки формы произошла ошибка")
        }
    }



    return (
        <section className="ContactUs" id="contactUs">
            <div className="container">
                <h2>Оставить заявку</h2>
                <div className="wrap">
                    <div className="card-white">
                        <div className="wrap">
                            <h5>Мы вам перезвоним</h5>
                            <p>Сообщите нам свои контакты и наш менеджер ответит на ваши вопросы и поможет сделать заказ</p>
                            <img src={require("../img/contact-us-pattern.png")} alt=""/>
                        </div>
                    </div>
                    <div className="card-black">
                        <form onSubmit={onSend}>
                            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Имя, Фамилия"/>
                            <input value={contacts} onChange={e => setContacts(e.target.value)} type="text" placeholder="Телефон: +7 (999) 123-45-67"/>
                            <textarea value={message} onChange={e => setMessage(e.target.value)} name="" id="" cols="30" rows="10" placeholder="Текст сообщения" />
                            <button type={"submit"}>Оставить заявку</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Order;
