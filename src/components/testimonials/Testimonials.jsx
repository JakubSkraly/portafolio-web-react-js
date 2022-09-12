import React from 'react';
import './Testimonials.css';
import Avatar1 from '../../assets/img/avatar1.jpg';
import Avatar2 from '../../assets/img/avatar2.jpg';
import Avatar3 from '../../assets/img/avatar3.jpg';
import Avatar4 from '../../assets/img/avatar4.jpg';

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
        name: 'Tina Snow',
        review: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Molestiae consequuntur 
                reiciendis itaque suscipit exercitationem 
                vel maiores est odio saepe, tempore omnis 
                veritatis illum repellat dicta? Molestiae 
                deserunt sed exercitationem repudiandae!`,
    },
    {
        avatar: Avatar2,
        name: 'Ernest Achiever',
        review: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Molestiae consequuntur 
                reiciendis itaque suscipit exercitationem 
                vel maiores est odio saepe, tempore omnis 
                veritatis illum repellat dicta? Molestiae 
                deserunt sed exercitationem repudiandae!`,
    },
    {
        avatar: Avatar3,
        name: 'Kwame Despite',
        review: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Molestiae consequuntur 
                reiciendis itaque suscipit exercitationem 
                vel maiores est odio saepe, tempore omnis 
                veritatis illum repellat dicta? Molestiae 
                deserunt sed exercitationem repudiandae!`,
    },
    {
        avatar: Avatar4,
        name: 'Shatta Wale',
        review: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Molestiae consequuntur 
                reiciendis itaque suscipit exercitationem 
                vel maiores est odio saepe, tempore omnis 
                veritatis illum repellat dicta? Molestiae 
                deserunt sed exercitationem repudiandae!`,
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review de Clientes</h5>
            <h2>Testimonios</h2>

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