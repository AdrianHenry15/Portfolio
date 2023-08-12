/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Resume = "https://docs.google.com/document/d/10d3Q5nhyrs0hrI89HexLWA9bp-UIHz-1IIohI518c6k/edit?usp=sharing"

const CTA = () => {
  return (
    <div className="cta">
      <a target='_blank' rel='noreferrer' href={Resume} download className="btn">
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Connect
      </a>
    </div>
  );
};

export default CTA;
