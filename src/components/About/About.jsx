import React from 'react'
import './About.css'
import theme_pattern from '../..//assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'
function About() {
  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>About Me</h1>
        
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          
          <p>I am an ECE undergraduate at the Indian Institute of Information Technology Tiruchirappalli (IIIT Trichy), passionate about development with a keen interest in competitive coding and Electronics and Communication. I enjoy solving complex problems and continually enhancing my skills in these areas.</p>
          </div>
         
       
      </div>
     
    </div>
  )
}

export default About
