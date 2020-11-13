import React, {useState} from 'react';

function Navbar(props) {
    const [isToggled, setIsToggled] = useState(false)
    const toggle = () => setIsToggled(!isToggled)

    return (
        <nav className="Navbar">
            <div className="logo">Ликос</div>
            <div className="toggler" onClick={toggle}>
                <img src="https://img.icons8.com/windows/32/FFFFFF/menu.png"/>
            </div>
            <div className="collapse" style={{opacity: isToggled ? "1" : "0"}}>
                <img className="toggler" onClick={toggle} src="https://img.icons8.com/ios-glyphs/30/FFFFFF/multiply.png"/>
                <ul>
                    <a href="#contactUs"><li>Оставить заявку</li></a>
                    <a href="#works"><li>Работы</li></a>
                    <a href="#guarantees"><li>Гарантии</li></a>
                    <a href="#contacts"><li>Контакты</li></a>
                    <a href="#services"><li>Услуги</li></a>
                </ul>
                <a href="tel:+73432675196" className="phone">+7 (343) 267 51 96</a>
            </div>
        </nav>
    );
}

export default Navbar;
