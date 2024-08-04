import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

function Footer() {
    return (
        <div className='Footer'>
           
                <hr />
                <div className="footer-bottom">
                    <p className="footer-bottom-left">Arvind Choudhary &copy;All rights reserved</p>
                   <p>Made with &#9829; by Arvind</p>
                    <div className="footer-bottom-right">
                        <p>term of Services</p>
                        <p>Privacy POlicy</p>
                        
                    </div>
                </div>
           

        </div>
    )
}

export default Footer
