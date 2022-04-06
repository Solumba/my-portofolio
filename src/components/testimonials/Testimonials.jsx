import React from 'react'
import './testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg';
import Avatar2 from '../../assets/avatar2.jpg';
import Avatar3 from '../../assets/avatar3.jpg';
import Avatar4 from '../../assets/avatar4.jpg';
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Client Review</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={Avatar1} alt="client image" />
          </div>
          <h5 className="client__name">Damian Sandall</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus architecto ea harum ratione quae! Explicabo, delectus nihil iste sequi expedita, 
            animi vero, illo dolorum possimus at modi quibusdam perspiciatis.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={Avatar3} alt="client image" />
          </div>
          <h5 className="client__name">Damian Sandall</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus architecto ea harum ratione quae! Explicabo, delectus nihil iste sequi expedita, 
            animi vero, illo dolorum possimus at modi quibusdam perspiciatis.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={Avatar2} alt="client image" />
          </div>
          <h5 className="client__name">Damian Sandall</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus architecto ea harum ratione quae! Explicabo, delectus nihil iste sequi expedita, 
            animi vero, illo dolorum possimus at modi quibusdam perspiciatis.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={Avatar4} alt="client image" />
          </div>
          <h5 className="client__name">Damian Sandall</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus architecto ea harum ratione quae! Explicabo, delectus nihil iste sequi expedita, 
            animi vero, illo dolorum possimus at modi quibusdam perspiciatis.
          </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials;