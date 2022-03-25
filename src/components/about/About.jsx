import React from 'react';
import './about.css';
import ME from '../../assets/me.jpg';
import {BsFillAwardFill, RiUserSmileLine, BsFolderPlus, BsMessenger, AiOutlineMessage} from '../../components/IconExports';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
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
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum laboriosam expedita. Non iusto quam corrupti unde facilis vero neque iste nihil, dolor provident, cupiditate illo facere cumque quasi est.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk <AiOutlineMessage />
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About