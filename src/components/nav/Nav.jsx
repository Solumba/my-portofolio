import React, {useState} from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser, BiBook, MdHomeRepairService, BsMessenger} from '../IconExports';
const Nav = () => {

  const [buttonState, updatebuttonState] = useState({
    page: "#top",
  });

  const activateButtonHandler = (pageName) => {
    updatebuttonState({
      page: pageName,
    });
  }

  return (
    <nav>
      <a onClick={()=>activateButtonHandler("#top")} className={buttonState.page === "#top" ? 'active' : ''} href="#top"><AiOutlineHome /></a>
      <a onClick={()=>activateButtonHandler("#about")}  className={buttonState.page === "#about" ? 'active' : ''} href="#about"><AiOutlineUser /></a>
      <a onClick={()=>activateButtonHandler("#experience")}  className={buttonState.page === "#experience" ? 'active' : ''} href="#experience"><BiBook /></a>
      <a onClick={()=>activateButtonHandler("#services")}  className={buttonState.page === "#services" ? 'active' : ''} href="#services"><MdHomeRepairService /></a>
      <a onClick={()=>activateButtonHandler("#contact")}  className={buttonState.page === "#contact" ? 'active' : ''} href="#contact"><BsMessenger /></a>
    </nav>
  )
}

export default Nav