import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/cover.png';
import {BsArrowDownSquareFill} from 'react-icons/bs';
import HeaderSocialLinks from './HeaderSocialLinks';

const Header = () => {
  return (
    <header id='top'>
      <div className="container header__container">
        <h4>Hello! I'm</h4>
        <h1>Solomon Olumba</h1>
        <h5 className="text-light">Frontend Developer (React JS)</h5>
        <CTA />
        <HeaderSocialLinks />
        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'><BsArrowDownSquareFill /></a> 
      </div>
    </header>
  )
}

export default Header