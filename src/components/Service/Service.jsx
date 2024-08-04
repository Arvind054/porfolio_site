import React from 'react'
import './Service.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
function Service() {
  return (
    <div className='Services' id='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
          {Services_data.map((service, index)=>{
             return(
                <div className='services-format' key = {index}>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className='services-readMore'>
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
             )
          })}
      </div>
    </div>
  )
}

export default Service;
