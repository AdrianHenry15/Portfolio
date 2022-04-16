import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaRegFolderOpen} from 'react-icons/fa'

const About = () => {
  return (
   <section id='about'>
     <h5>Get To Know</h5>
     <h2>About Me</h2>

     <div className="container about__container">
       <div className="about__me">
         <div className="about__me-image">
           <img src="nothing" alt="nothing" />
         </div>
       </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Entry-Level Developer</small>
            </article>
            <article className="about__card">
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>100 clients Worldwide</small>
            </article>
            <article className="about__card">
              <FaRegFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>50+ Completed Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Neque placeat sed amet architecto possimus, 
            exercitationem deleniti nisi magni eos. Veritatis quia autem 
            expedita dignissimos veniam? Aut error tempora rem autem.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

     </div>
   </section>
  )
}

export default About
