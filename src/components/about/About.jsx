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
            <h2>Sobre mí</h2>

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
                            <small>6+ Meses Trajanado</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clientes</h5>
                            <small>2+ En el mundo</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projectos</h5>
                            <small>3+ Completados</small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Neque esse nostrum nam,
                        praesentium numquam, animi in qui placeat
                        fugit laudantium cupiditate tenetur. Hic,
                        nostrum veritatis maxime blanditiis nulla
                        autem veniam?
                    </p>

                    <a href="#contact" className='btn btn-primary'>
                        Hablemos
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;