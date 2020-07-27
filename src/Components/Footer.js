import React, {useState} from 'react';
import VizSensor from 'react-visibility-sensor';

function Footer(props) {
    const [src, setSrc] = useState("")

    return (
        <footer id="contacts" className="Footer">
            <div className="container">
                <VizSensor className="visSens" onChange={(isVisible) => {
                    console.log(isVisible)
                    if (isVisible) {
                        setSrc("https://yandex.ru/map-widget/v1/-/CCQlI8UJOB")
                    }
                }}><div className="visSens"/>
                </VizSensor>
                <div className="footer-grid">
                    <div>
                        <h5>OKWood</h5>
                        <ul>
                            <li><a href="#works">Работы</a></li>
                            <li><a href="#reviews">Отзывы</a></li>
                            <li><a href="#services">Услуги</a></li>
                            <li><a href="#aboutUs">О нас</a></li>
                            <li><a href="#contactUs">Оставить заявку</a></li>
                            <li><a href="#contacts">Контакты</a></li>
                        </ul>
                    </div>
                    <div className="contacts">
                        <h5>Контакты</h5>
                        <div className="contacts-wrap">
                            <p>Адрес офиса:</p>
                            <p>{"г.Москва, **"}</p>
                        </div>
                        <div className="contacts-wrap">
                            <p>Телефон:</p>
                            <p>{"**"}</p>
                        </div>
                        <div className="contacts-wrap">
                            <p>Email</p>
                            <p>{"**"}</p>
                        </div>
                    </div>
                    <div>
                        <div style={{"position":"relative",overflow:"hidden"}}>
                            <iframe title="yandex-maps" src={src}
                                    frameBorder="1" allowFullScreen="true" style={{"position":"relative"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
