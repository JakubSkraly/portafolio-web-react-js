import React from 'react';
import './Services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
    return (
        <section id='services'>
            <h5>Qué ofrezco</h5>
            <h2>SERVICIOS</h2>

            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>Desarrollo Web - Frontend</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>
                                Blogs
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>
                                Landing Page
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>
                                Páginas Informativas
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>
                                Páginas web multiplataforma
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>
                                Maquetación de páginas web
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>
                                Mejoramiento de la experiencia del usuario
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>
                                Mantenimiento de diseño de páginas web
                            </p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className="service__head">
                        <h3>Desarrollo Web - Backend</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>
                                CRM
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>
                                E-COMMERCE
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>
                                Aula Virtual
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>
                                Creación de API's
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>
                                Mantenimiento de base de datos
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>
                                Mantenimiento de Páginas dinámicas
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>
                                Asesorias de soporte a páginas web
                            </p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className="service__head">
                        <h3>Análisis Organizacional</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>
                                Diseño de Sistemas
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>
                                Desarrollo de Diagrama de Flujos
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>
                                Modelamiento de Procesos
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>
                                Modelamiento de Sistemas y Datos
                            </p>
                        </li>
                        
                    </ul>
                </article>
            </div>
        </section>
    );
}

export default Services;