/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './header.css';
import CTA from './CTA';
import Logo from '../../assets/Images/logo-s.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Adrian Henry</h1>
        <h5 className="text-light">Fullstack Software Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="logo">
          <img className="logo-item" src={Logo} alt="logo" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
