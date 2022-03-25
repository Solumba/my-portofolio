import React from 'react'
import CV from '../../assets/OlumbaSolomonCv.pdf';
import {BsFillCloudArrowDownFill} from 'react-icons/bs';
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn' download>Download CV <BsFillCloudArrowDownFill className='download__icon'/></a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA;