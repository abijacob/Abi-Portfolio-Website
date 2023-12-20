import React from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaBookOpen } from "react-icons/fa6";
import { RiServiceLine } from "react-icons/ri";
import { MdContacts } from "react-icons/md";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FcAbout /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBookOpen /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContacts /></a>
    </nav>
  )
}

export default Nav