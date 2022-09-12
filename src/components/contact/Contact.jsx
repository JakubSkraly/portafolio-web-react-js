import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Póngase en contacto</h5>
            <h2>Contácteme</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5 className='text-light'>josingaq@uch.pe</h5>
                        <a href="mailto:josingaq@uch.pe">
                            Enviar un mensaje
                        </a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5 className='text-light'>Jakub Skraly (Leonel)</h5>
                        <a href="https://m.me/Jakub.Skraly.XD/" target="_blank" rel="noreferrer">
                            Enviar un mensaje
                        </a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5 className='text-light'>+51 922652524</h5>
                        <a href="https://wa.me/51922652524" target="_blank" rel="noreferrer">
                            Enviar un mensaje
                        </a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name='nombre' placeholder='Nombre Completo' required />
                    <input type="email" name="email" placeholder="Email" required />
                    <textarea name="mensaje" rows="7" placeholder='Mensaje' required ></textarea>
                    <button type='submit' className='btn btn-primary'>
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;