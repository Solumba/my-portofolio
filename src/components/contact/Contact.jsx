import React from 'react';
import './contact.css';
import {HiOutlineMail, BsMessenger, ImWhatsapp} from '../../components/IconExports';

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>olumbasolomon08</h5>
            <a href="mailto:olumbasolomon08@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Olumba Solomon</h5>
            <a href="https://m.me/olumba.solomon" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon' />
            <h4>Email</h4>
            <h5>+23490**28**52</h5>
            <a href="https://api.whatsapp.com/send?phone=+2349080284052">Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name="name" placeholder="John Doe" required/>
          <input type="email" name="email" placeholder="example@gmail.com" required/>
          <textarea name="message" rows="7" placeholder='your message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact