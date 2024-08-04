import React from 'react'
import './Contact.css'

import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bcb25040-adb6-4b7e-8d7a-e3cd6d78e9f1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='Contact' id='contact'>
      <div className="contact-title">
        <h1>Contact</h1>
       
      </div>
      <div className="contect-section">
        <div className="contact-Left">
          <h1>Contact Me</h1>
          <p>Contact me through:</p>
          <div className="contact-details">
            <div className="contact-detail">
             <a href="https://www.linkedin.com/in/arvind-choudhary-18a23728a/"><i className="fa-brands fa-linkedin"></i></a>Arvind Choudhary
            </div>
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>arvindChoudhary054@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 1234567890</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p> jaipur, Rajasthan, India 302026</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
          <label htmlFor="">your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your Email' name='email' required/>
          <label htmlFor="">Write your message</label>
         <textarea name="message" rows={8} placeholder='Enter your Message' required></textarea>
         <button className='contact-submit' type='submit'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
