/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './about.scss';
import { FaAward } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaRegFolderOpen } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Brand Svg icons
import {
  faJava,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faPython
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#000000" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPython} color="#EFD81D" />
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Full Stack Software Developer</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Clients Worldwide</small>
            </article>
            <article className="about__card">
              <FaRegFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>75+ Completed Projects</small>
            </article>
          </div>

          <p>
            Full Stack Software Developer leveraging a background in Hospitality and Audio
            Production to build a more Intuitive User experience on The Web. With each project, the
            aim is to gain more knowledge about Programming, Software Development, Engineering, and
            the benefits of Each User. Excited to spend time learning more about building better
            Experiences for Users and leveraging skills to help a High Level Team.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
