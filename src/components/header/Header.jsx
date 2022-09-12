import React from 'react';
import './Header.css';
import HeaderButtons from './HeaderButtons';
// import ME from '../../assets/img/me.png';
import ME from '../../assets/img/SJ.svg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hola! Soy</h5>
                <h1>JOSÉ LEONEL</h1>
                <h5 className="text-light">
                    Desarrollador Web
                </h5>
                <HeaderButtons />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className="scroll__down">
                    Contáctame
                </a>
            </div>
        </header>
    );
}

export default Header;