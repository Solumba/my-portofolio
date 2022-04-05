import React from 'react';
import './portofolio.css';
import IMG from '../../assets/data.jpg';
const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG} alt="data image" />
          </div>
          <h3>This is a portofolio item title</h3>
          <div className="portofolio__item-cta">
            <a href="https://github.com/Solumba" target="_blank" className="btn">Github</a>
            <a href="https://behance.com/olumbasolomon" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG} alt="data image" />
          </div>
          <h3>This is a portofolio item title</h3>
          <div className="portofolio__item-cta">
            <a href="https://github.com/Solumba" target="_blank" className="btn">Github</a>
            <a href="https://behance.com/olumbasolomon" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG} alt="data image" />
          </div>
          <h3>This is a portofolio item title</h3>
          <div className="portofolio__item-cta">
            <a href="https://github.com/Solumba" target="_blank" className="btn">Github</a>
            <a href="https://behance.com/olumbasolomon" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG} alt="data image" />
          </div>
          <h3>This is a portofolio item title</h3>
          <div className="portofolio__item-cta">
            <a href="https://github.com/Solumba" target="_blank" className="btn">Github</a>
            <a href="https://behance.com/olumbasolomon" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG} alt="data image" />
          </div>
          <h3>This is a portofolio item title</h3>
          <div className="portofolio__item-cta">
            <a href="https://github.com/Solumba" target="_blank" className="btn">Github</a>
            <a href="https://behance.com/olumbasolomon" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG} alt="data image" />
          </div>
          <h3>This is a portofolio item title</h3>
          <div className="portofolio__item-cta">
            <a href="https://github.com/Solumba" target="_blank" className="btn">Github</a>
            <a href="https://behance.com/olumbasolomon" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portofolio;