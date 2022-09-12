import React from 'react';
import './Portafolio.css';
import EncriptadorImg from '../../assets/img/encriptador-java-script.png'
import AhorcadoImg from '../../assets/img/ahorcado-java-script.png';
import Proyecto1 from '../../assets/img/portfolio1.jpg';
import Proyecto2 from '../../assets/img/portfolio2.jpg';
import Proyecto3 from '../../assets/img/portfolio3.jpg';
import Proyecto4 from '../../assets/img/portfolio4.jpg';

const Portafolio = () => {
    return (
        <section id='portafolio'>
            <h5>Proyectos</h5>
            <h2>PORTAFOLIO</h2>

            <div className="container portafolio__container">
                <article className='portafolio__item'>
                    <div className="portafolio__item-image">
                        <img src={EncriptadorImg} alt="EncriptadorImg" />
                    </div>
                    <h3>Encriptador de texto con JS</h3>
                    <div className="portafolio__item-buttons">
                        <a href="https://github.com/JakubSkraly/encriptador-java-script" target='_blank' rel="noreferrer" className='btn'>
                            GitHub
                        </a>
                        <a href="https://jakubskraly.github.io/encriptador-java-script/" target='_blank' rel="noreferrer" className='btn btn-primary'>
                            Live Demo
                        </a>
                    </div>
                </article>

                <article className='portafolio__item'>
                    <div className="portafolio__item-image">
                        <img src={AhorcadoImg} alt="AhorcadoImg" />
                    </div>
                    <h3>Juego del Ahorcado de con JS</h3>
                    <div className="portafolio__item-buttons">
                        <a href="https://github.com/JakubSkraly/ahorcado-java-script" target='_blank' rel="noreferrer" className='btn'>
                            GitHub
                        </a>
                        <a href="https://jakubskraly.github.io/ahorcado-java-script/" target='_blank' rel="noreferrer" className='btn btn-primary'>
                            Live Demo
                        </a>
                    </div>
                </article>

                <article className='portafolio__item'>
                    <div className="portafolio__item-image">
                        <img src={Proyecto1} alt="Proyecto1" />
                    </div>
                    <h3>Encriptador de texto con JS</h3>
                    <div className="portafolio__item-buttons">
                        <a href="https://github.com/JakubSkraly/encriptador-java-script" target='_blank' rel="noreferrer" className='btn'>
                            GitHub
                        </a>
                        <a href="https://jakubskraly.github.io/encriptador-java-script/" target='_blank' rel="noreferrer" className='btn btn-primary'>
                            Live Demo
                        </a>
                    </div>
                </article>

                <article className='portafolio__item'>
                    <div className="portafolio__item-image">
                        <img src={Proyecto2} alt="Proyecto2" />
                    </div>
                    <h3>Encriptador de texto con JS</h3>
                    <div className="portafolio__item-buttons">
                        <a href="https://github.com/JakubSkraly/encriptador-java-script" target='_blank' rel="noreferrer" className='btn'>
                            GitHub
                        </a>
                        <a href="https://jakubskraly.github.io/encriptador-java-script/" target='_blank' rel="noreferrer" className='btn btn-primary'>
                            Live Demo
                        </a>
                    </div>
                </article>

                <article className='portafolio__item'>
                    <div className="portafolio__item-image">
                        <img src={Proyecto3} alt="Proyecto3" />
                    </div>
                    <h3>Encriptador de texto con JS</h3>
                    <div className="portafolio__item-buttons">
                        <a href="https://github.com/JakubSkraly/encriptador-java-script" target='_blank' rel="noreferrer" className='btn'>
                            GitHub
                        </a>
                        <a href="https://jakubskraly.github.io/encriptador-java-script/" target='_blank' rel="noreferrer" className='btn btn-primary'>
                            Live Demo
                        </a>
                    </div>
                </article>

                <article className='portafolio__item'>
                    <div className="portafolio__item-image">
                        <img src={Proyecto4} alt="Proyecto4" />
                    </div>
                    <h3>Encriptador de texto con JS</h3>
                    <div className="portafolio__item-buttons">
                        <a href="https://github.com/JakubSkraly/encriptador-java-script" target='_blank' rel="noreferrer" className='btn'>
                            GitHub
                        </a>
                        <a href="https://jakubskraly.github.io/encriptador-java-script/" target='_blank' rel="noreferrer" className='btn btn-primary'>
                            Live Demo
                        </a>
                    </div>
                </article>
            </div>
            {/* 2:20 */}
        </section>
    );
}

export default Portafolio;