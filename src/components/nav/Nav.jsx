import React from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser, BiBook, MdHomeRepairService, BsMessenger} from '../IconExports';
const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><BiBook /></a>
      <a href="#services"><MdHomeRepairService /></a>
      <a href="#contact"><BsMessenger /></a>
    </nav>
  )
}

export default Nav