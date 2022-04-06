import React, { useRef } from 'react';
import './contact.css';
import {HiOutlineMail, BsMessenger, ImWhatsapp} from '../../components/IconExports';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gbj47oc', 'template_m71jjf7', form.current, 'TyjLiTQUvhvpEtW6J')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

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

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="John Doe" required/>
          <select name="subject">
            <option value="Graphic Design">logo design</option>
            <option value="Web Development">web development</option>
            <option value="Content Editing">content editing</option>
          </select>
          <input type="email" name="email" placeholder="example@gmail.com" required/>
          <textarea name="message" rows="7" placeholder='your message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
          <span className="sent">message sent</span>
        </form>
      </div>
    </section>
  )
}

export default Contact;