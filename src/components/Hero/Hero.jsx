import React from 'react'
import './Hero.css'
import ReactDOM from 'react-dom'
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { TypeAnimation } from 'react-type-animation';

import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div id='home' className='Hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'am Arvind Choudhary</span>,
      <br /><TypeAnimation
      sequence={[
        
        'FullStack Developer',
        1000, 
        'ReactJs Develpoer',
        1000,
        'Web Designer',
        1000,
        
      ]}
      wrapper="div"
      speed={40}
      style={{ fontSize: '35px', display: 'inline-block' }}
      repeat={Infinity}
      
    /></h1>
      
 
      <AnchorLink className='anchor-link' offset={50} href='#about'>
        <div className='Hero-down'>
      ↓
        </div>
        </AnchorLink>
     
    </div>
  )
}

export default Hero
