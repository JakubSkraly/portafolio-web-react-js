import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/jose-leonel-inga-quintana/" target="_blank" rel="noreferrer">
                <BsLinkedin />
            </a>
            <a href="https://github.com/JakubSkraly" target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/_jakub_skraly_/" target="_blank" rel="noreferrer">
                <GrInstagram />
            </a>
        </div>
    );
}

export default HeaderSocials;