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
                    <a href=""><li>Оставить заявку</li></a>
                    <a href=""><li>Работы</li></a>
                    <a href=""><li>Отзывы</li></a>
                    <a href=""><li>Контакты</li></a>
                    <a href=""><li>Услуги</li></a>
                </ul>
                <a href="tel:+73432342322" className="phone">+7 (343) 234 23 22</a>
            </div>
        </nav>
    );
}

export default Navbar;
