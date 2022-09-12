import React from 'react';
import './Testimonials.css';
import Avatar1 from '../../assets/img/calandria.png';
import Avatar2 from '../../assets/img/cp.jfif';
import Avatar3 from '../../assets/img/pronabec.jpg';
import Avatar4 from '../../assets/img/kp.jfif';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
    {
        avatar: Avatar1,
        name: 'Calandria',
        review: `A inicios de mis actividades académicas universitarias 
                decidí unirme como voluntario a la organización Calandria, 
                ya que me permitía no solo capacitarme, sino que capacitar 
                a otras personas sobre temas que se consideran tabúes en la sociedad actual, 
                fue una experiencia muy reconfortante y útil para mi vida personal.`,
    },
    {
        avatar: Avatar2,
        name: 'Comparte Perú',
        review: `Participe como voluntario digital en la organización 
                Comparte Perú durante el inicio de la Pandemia 
                con el fin de apoyar de manera digital a la recaudación 
                de fondos para que los niños de bajos recursos puedan 
                disfrutar la época navideña que debido a la situación 
                fue muy limitante poder desarrollar este tipo de actividades festivas.`,
    },
    {
        avatar: Avatar3,
        name: 'PRONABEC',
        review: `Participe en el programa de Mentoría 
                Entre Pares organizada por PRONABEC, 
                como voluntario Mentee Líder con el objetivo 
                de poder ayudar a los nuevos becarios a adaptarse al 
                mundo universitario, siendo esta muy diferente a la etapa escolar,
                aprendi mucho de los nuevos talentos 
                y gracias a eso pude fortalecer mis habilidades comunicativas.`,
    },
    {
        avatar: Avatar4,
        name: 'Asociación KP',
        review: `Es una asociación civil sin fines de lucro
                 que promueve la tenencia responsable de 
                 mascotas y lleva ayuda voluntaria a diversos 
                 albergues mediante visitas y donaciones en Lima,
                 participe como voluntario digital para el apoyo de 
                 la construción de una casa albergue para animales sin hogar.`,
    },
]

const Testimonials = () => {
    return (
        <section id='voluntariados'>
            <h5>Voluntariados Realizados</h5>
            <h2>ORGANIZACIONES</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt={name} />
                                </div>
                                <h5 className='client__name'>
                                    {name}
                                </h5>
                                <small className="client__review">
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
}

export default Testimonials;