import React from 'react';
import CV from '../../assets/cv/Inga Quintana José Leonel - CV.pdf';

const HeaderButtons = () => {
    return (
        <div className='header__buttons'>
            <a href={CV} download className='btn'>
                Descargar CV
            </a>
            <a href="#contact" className='btn btn-primary'>
                Hablemos
            </a>
        </div>
    );
}

export default HeaderButtons;