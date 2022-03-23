import React from 'react'
import {BsLinkedin, AiFillGithub, AiFillBehanceCircle} from 'react-icons/bs';
import {BsLinkedin, AiFillGithub, AiFillBehanceCircle} from 'react-icons/bs';
import {BsLinkedin, AiFillGithub, AiFillBehanceCircle} from 'react-icons/bs';
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