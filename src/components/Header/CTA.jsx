/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React from 'react';
import Resume from '../../assets/Images/Resume 4.15.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Connect
      </a>
    </div>
  );
};

export default CTA;
