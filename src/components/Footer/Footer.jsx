import React from 'react';
import './footer.css';
import { AiFillFacebook } from 'react-icons/ai';
import { TiSocialInstagram } from 'react-icons/ti';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Adrian
      </a>

      <ul className="permalinks">
        <li>
          {' '}
          <a href="#">Home</a>
        </li>
        <li>
          {' '}
          <a href="#about">About</a>
        </li>
        <li>
          {' '}
          <a href="#experience">Experience</a>
        </li>
        <li>
          {' '}
          <a href="#services">Services</a>
        </li>
        <li>
          {' '}
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          {' '}
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          {' '}
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <AiFillFacebook />
        </a>
        <a href="https://Instagram.com">
          <TiSocialInstagram />
        </a>
        <a href="https://Linkedin.com">
          <AiFillLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Adrian Henry. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
