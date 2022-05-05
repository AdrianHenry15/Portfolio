/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Resume from '../../assets/Images/Resume 5.4.pdf';

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
