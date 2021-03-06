/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './nav.css';
// react icons
import { FaHome } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { GiBookCover } from 'react-icons/gi';
import { RiContactsBookFill } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';
import { RiSuitcaseLine } from 'react-icons/ri';

import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}>
        <FaUserAlt />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}>
        <FaLaptopCode />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#services' ? 'active' : ''}>
        <GiBookCover />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActiveNav('#testimonials')}
        className={activeNav === '#testimonials' ? 'active' : ''}>
        <RiSuitcaseLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}>
        <RiContactsBookFill />
      </a>
      <a
        href="#footer"
        onClick={() => setActiveNav('#footer')}
        className={activeNav === '#footer' ? 'active' : ''}>
        <HiUserGroup />
      </a>
    </nav>
  );
};

export default Nav;
