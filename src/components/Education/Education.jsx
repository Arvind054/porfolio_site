import React from 'react'
import './Education.css'

function Education() {
  return (
    <div id='Education' className='Education'>
      <div className="Education-title">
        <h1>Education</h1>
      </div>
      <div className="sub-Education">
        <h1>B.tect-Electronics and Communication</h1>
        <div className='sub-Education-part'>
          <span>Indian Institute Of Information Technology, Trichy, India</span>
          <span>2023-27</span>
        </div>
      </div>
      <div className="sub-Education">
        <h1>Higher Secondary</h1>
        <div className='sub-Education-part'>
          <span>Asian World School, Jaipur</span>
          <span>2022</span>
        </div>
      </div>
      <div className="sub-Education">
        <h1>10th Class</h1>
        <div className='sub-Education-part'>
          <span>RadClffe School jaipur</span>
          <span>2020</span>
        </div>
      </div>
    </div>
  )
}

export default Education
