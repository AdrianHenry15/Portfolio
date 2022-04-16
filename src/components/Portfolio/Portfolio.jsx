import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Images/port-1.png";
import IMG2 from "../../assets/Images/port-2.png";
import IMG3 from "../../assets/Images/port-3.png";
import IMG4 from "../../assets/Images/port-4.png";
import IMG5 from "../../assets/Images/port-5.png";
import IMG6 from "../../assets/Images/port-6.png";

const Portfolio = () => {
 return (
  <section id="portfolio">
   <h5>My Recent Work</h5>
   <h2>Portfolio</h2>

   <div className="container portfolio__container">
    <article className="portfolio__item">
     <div className="portfolio__item-image">
      <img src={IMG1} alt="port-1" />
     </div>
     <h3>This is a portfolio item title</h3>
     <a
      href="https://github.com/AdrianHenry15/blob"
      className="btn"
      target="_blank"
      rel="noreferrer"
     >
      Github
     </a>
     <a
      href="https://rocky-wave-46848.herokuapp.com/"
      className="btn btn-primary"
      target="_blank"
      rel="noreferrer"
     >
      Live Demo
     </a>
    </article>
    <article className="portfolio__item">
     <div className="portfolio__item-image">
      <img src={IMG2} alt="port-2" />
     </div>
     <h3>This is a portfolio item title</h3>
     <a
      href="https://github.com/AdrianHenry15/blob"
      className="btn"
      target="_blank"
      rel="noreferrer"
     >
      Github
     </a>
     <a
      href="https://rocky-wave-46848.herokuapp.com/"
      className="btn btn-primary"
      target="_blank"
      rel="noreferrer"
     >
      Live Demo
     </a>
    </article>
    <article className="portfolio__item">
     <div className="portfolio__item-image">
      <img src={IMG3} alt="port-3" />
     </div>
     <h3>This is a portfolio item title</h3>
     <a
      href="https://github.com/AdrianHenry15/blob"
      className="btn"
      target="_blank"
      rel="noreferrer"
     >
      Github
     </a>
     <a
      href="https://rocky-wave-46848.herokuapp.com/"
      className="btn btn-primary"
      target="_blank"
      rel="noreferrer"
     >
      Live Demo
     </a>
    </article>
    <article className="portfolio__item">
     <div className="portfolio__item-image">
      <img src={IMG4} alt="port-4" />
     </div>
     <h3>This is a portfolio item title</h3>
     <a
      href="https://github.com/AdrianHenry15/blob"
      className="btn"
      target="_blank"
      rel="noreferrer"
     >
      Github
     </a>
     <a
      href="https://rocky-wave-46848.herokuapp.com/"
      className="btn btn-primary"
      target="_blank"
      rel="noreferrer"
     >
      Live Demo
     </a>
    </article>
    <article className="portfolio__item">
     <div className="portfolio__item-image">
      <img src={IMG5} alt="port-5" />
     </div>
     <h3>This is a portfolio item title</h3>
     <a
      href="https://github.com/AdrianHenry15/blob"
      className="btn"
      target="_blank"
      rel="noreferrer"
     >
      Github
     </a>
     <a
      href="https://rocky-wave-46848.herokuapp.com/"
      className="btn btn-primary"
      target="_blank"
      rel="noreferrer"
     >
      Live Demo
     </a>
    </article>
    <article className="portfolio__item">
     <div className="portfolio__item-image">
      <img src={IMG6} alt="port-6" />
     </div>
     <h3>This is a portfolio item title</h3>
     <a
      href="https://github.com/AdrianHenry15/blob"
      className="btn"
      target="_blank"
      rel="noreferrer"
     >
      Github
     </a>
     <a
      href="https://rocky-wave-46848.herokuapp.com/"
      className="btn btn-primary"
      target="_blank"
      rel="noreferrer"
     >
      Live Demo
     </a>
    </article>
   </div>
  </section>
 );
};

export default Portfolio;
