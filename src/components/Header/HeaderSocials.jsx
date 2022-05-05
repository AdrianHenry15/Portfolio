import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/adrian-henry-199595207/"
        target="_blank"
        rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/AdrianHenry15" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/theadrianhenry/" target="_blank" rel="noreferrer">
        <FiInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
