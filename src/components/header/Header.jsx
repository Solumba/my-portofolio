import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg';
import HeaderSocialLinks from './HeaderSocialLinks';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi I'm</h5>
        <h1>Solomon Olumba</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocialLinks />
        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a> 
      </div>
    </header>
  )
}

export default Header