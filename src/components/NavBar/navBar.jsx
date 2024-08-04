import React, { useRef } from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './NavBar.css';

import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import nav_underline from '../../assets/nav_underline.svg'
const NavBar = () => {
  const styles = {color:"red"};
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu  = ()=>{
    menuRef.current.style.right = "0";
  }
  const closeMenu  = ()=>{
    menuRef.current.style.right = "-350px";
  }
  return (
    <div className='navBar'>
 <h3 className='logo'>Arvind</h3>
 <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className="navMenu">
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>{setMenu("home")}} style={menu === "home" ? styles : {}}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>{setMenu("About")}}style={menu === "About" ? styles : {}}>About</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>{setMenu("projects")}}style={menu === "projects" ? styles : {}}>Projects</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>{setMenu("skills")}}style={menu === "skills" ? styles : {}}>Skills</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Education'><p onClick={()=>{setMenu("Education")}}style={menu === "Education" ? styles : {}}>Education</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>{setMenu("Contact")}}style={menu === "Contact" ? styles : {}}>Contact</p></AnchorLink></li>
      </ul>
      
    </div>
  )
}

export default NavBar
