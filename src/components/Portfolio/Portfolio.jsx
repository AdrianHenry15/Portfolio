import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/Images/port-1.png';
import IMG2 from '../../assets/Images/port-2.png';
import IMG3 from '../../assets/Images/port-3.png';
import IMG4 from '../../assets/Images/port-4.png';
import IMG6 from '../../assets/Images/port-6.png';

// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Open Source Kanban',
    description: 'Social Media App',
    tools: '(Javascript, HandlebarsJS, CSS, NodeJS, ExpressJS)',
    github: 'https://github.com/AdrianHenry15/Group-Project-2',
    demo: 'https://oskdb.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'GitPokemon',
    description: 'Connect Your Github with a Pokemon',
    tools: '(Javascript, HTML, CSS, jQuery)',
    github: 'https://github.com/AdrianHenry15/Pokemon-App',
    demo: 'https://adrianhenry15.github.io/Pokemon-App/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Taskinator',
    description: 'A Task Tracker App',
    tools: '(Javascript, CSS, HTML, Web Storage API)',
    github: 'https://github.com/AdrianHenry15/Taskinator-Website',
    demo: 'https://adrianhenry15.github.io/Taskinator-Website/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Task Master Pro',
    description: 'A Task Creation Application',
    tools: '(Javascript, HTML, CSS, jQuery)',
    github: 'https://github.com/AdrianHenry15/Task-Master-Pro-App',
    demo: 'https://adrianhenry15.github.io/Task-Master-Pro-App/'
  },
  {
    id: 5,
    image: IMG6,
    title: 'Git Book',
    description: 'Open Source Project Finder App',
    tools: '(Javascript, HTML, CSS)',
    github: 'https://github.com/AdrianHenry15/Git-Book',
    demo: 'https://adrianhenry15.github.io/Git-Book/'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <Swiper
        className="container portfolio__container"
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ id, image, title, description, tools, github, demo }) => {
          return (
            <SwiperSlide key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <i className="portfolio__desc">{description}</i> <br />
              <small className="portfolio__tools">
                <i>{tools}</i>
              </small>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
