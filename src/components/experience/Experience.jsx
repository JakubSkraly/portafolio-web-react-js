import React from 'react';
import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
    return (
        <section id="experience">
            <h5>Conocimientos</h5>
            <h2>MI EXPERIENCIA</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>
                                    Avanzado
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Java Script</h4>
                                <small className='text-light'>
                                    Avanzado
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>
                                    Intermedio
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>
                                    Intermedio
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>
                                    Básico
                                </small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>
                                    Avanzado
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>
                                    Intermedio
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>C#</h4>
                                <small className='text-light'>
                                    Intermedio
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>
                                    Básico
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Spring Boot</h4>
                                <small className='text-light'>
                                    Básico
                                </small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__frontend">
                    <h3>Database</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>SQL</h4>
                                <small className='text-light'>
                                    Intermedio
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>
                                    Intermedio
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>MariaDB</h4>
                                <small className='text-light'>
                                    Intermedio
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>
                                    Básico
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>
                                    Básico
                                </small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Metodologias</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>SCRUM Fundamentals</h4>
                                <small className='text-light'>
                                    Intermedio
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Rational Unified Process</h4>
                                <small className='text-light'>
                                    Intermedio
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>PMBOK</h4>
                                <small className='text-light'>
                                    Intermedio
                                </small>
                            </div>
                        </article>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;