import React from 'react';
import './about.css';
import ME from '../../assets/cover.png';
import {BsFillAwardFill, RiUserSmileLine, BsFolderPlus, MdMessage} from '../../components/IconExports';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about_me_img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsFillAwardFill className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ years freelancing</small>
            </article>

            <article className='about__card'>
              <RiUserSmileLine className="about__icon"/>
              <h5>Clients</h5>
              <small>20+ Local</small>
            </article>

            <article className='about__card'>
              <BsFolderPlus className="about__icon"/>
              <h5>Experience</h5>
              <small>40+ completed projects</small>
            </article>
          </div>
          <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, vero atque. Laboriosam vero quidem laudantium doloribus consequatur provident nulla in est tempore blanditiis repudiandae ea, vel, quaerat at voluptatum consequuntur.
          </p>

          <a href="#contact" className="btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About