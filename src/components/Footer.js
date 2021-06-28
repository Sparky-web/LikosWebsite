import React from 'react';

function Footer(props) {

    return (
        <footer id="contacts" className="Footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <h5>Ликос</h5>
                        <ul>
                            <li><a href="#works">Работы</a></li>
                            <li><a href="#services">Услуги</a></li>
                            <li><a href="#contactUs">Гарантии</a></li>
                            <li><a href="#aboutUs">О нас</a></li>
                            <li><a href="#contactUs">Оставить заявку</a></li>
                        </ul>
                    </div>
                    <div className="contacts">
                        <h5>Контакты</h5>
                        <div className="contacts-wrap">
                            <p>Адрес офиса:</p>
                            <p>{"г.Екатеринбург, ул. Мартовская, дом 8"}</p>
                        </div>
                        <div className="contacts-wrap">
                            <p>Телефон:</p>
                            <p>{"+7 (343) 267 51 96"}</p>
                        </div>
                        <div className="contacts-wrap">
                            <p>Email</p>
                            <p>{"lykos@mail.com"}</p>
                        </div>
                    </div>
                    <div>
                        <div style={{"position": "relative", overflow: "hidden"}}>
                            <iframe loading="lazy" title="yandex-maps"
                                    src={"https://yandex.ru/map-widget/v1/-/CCUeqHWTOB"}
                                    frameBorder="1" allowFullScreen="true" style={{"position": "relative"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
