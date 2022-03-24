import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillBehanceCircle} from 'react-icons/ai';
const HeaderSocialLinks = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="http://github.com" target="_blank"><AiFillGithub /></a>
        <a href="http://behance.com" target="_blank"><AiFillBehanceCircle /></a>
    </div>
  )
}

export default HeaderSocialLinks;