import React from 'react';
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
    return (
        <footer>
            <a href="#home" className='footer__logo' onClick={() => window.scrollTo(0, 0)}>
                Jakub Skraly
            </a>

            <ul className="footer__links">
                <li><a href="#home" onClick={() => window.scrollTo(0, 0)}>Home</a></li>
                <li><a href="#about">Conóceme</a></li>
                <li><a href="#experience">Conocimientos</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#portafolio">Portafolio</a></li>
                <li><a href="#voluntariados">Voluntariados</a></li>
                <li><a href="#contact">Contáctame</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/Jakub.Skraly.XD/" target="_blank" rel="noreferrer">
                    <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/_jakub_skraly_/" target="_blank" rel="noreferrer">
                    <FiInstagram />
                </a>
                <a href="https://twitter.com/JosLeonelIngaQ2/" target="_blank" rel="noreferrer">
                    <IoLogoTwitter />
                </a>
            </div>

            <div className="footer__copyright">
                <small>
                    &copy; Jakub Skraly. Todos los derechos reservados.
                </small>
            </div>
        </footer>
    );
}

export default Footer;