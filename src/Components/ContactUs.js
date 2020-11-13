import React from 'react';
import firebase from "firebase"
import "firebase/functions"

function Order(props) {
    const onSend = (event) => {

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
                        <form action="#">
                            <input type="text" placeholder="Имя, Фамилия"/>
                            <input type="text" placeholder="Телефон: +7 (999) 123-45-67"/>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Текст сообщения" />
                            <div className="checkbox">
                                <input type="checkbox" name="" id=""/>
                                <p>Принимаю соглашение на обработку персональных данных</p>
                            </div>
                            <a href=""><button>Оставить заявку</button></a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Order;
