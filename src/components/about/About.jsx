import React from 'react';
import './About.css';
// import MeAbout from '../../assets/img/me-about.jpg';
import MeAbout from '../../assets/img/me_about.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Conóceme</h5>
            <h2>SOBRE MÍ</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={MeAbout} alt="MeAbout" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experiencia</h5>
                            <small>6+ Meses Trabajando</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clientes</h5>
                            <small>2+ En el mundo</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Proyectos</h5>
                            <small>3+ Completados</small>
                        </article>
                    </div>

                    <p>Soy un estudiante Universitario del 9° ciclo de la carrera
                        de Ingeniería de Sistemas e Informática en la
                        Universidad de Ciencias y Humanidades, actualmente estoy en el
                        décimo superior de la carrera y participo en el programa 
                        Oracle One Next Education, cuento con experiencia en
                        trabajo de equipos y desarrollo de páginas web
                    </p>
                   

                    <a href="#contact" className='btn btn-primary'>
                        Contactame
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;