import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/Images/port-1.png';
import IMG2 from '../../assets/Images/port-2.png';
import IMG3 from '../../assets/Images/port-3.png';
import IMG4 from '../../assets/Images/port-4.png';
import IMG5 from '../../assets/Images/port-5.png';
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
    title: 'EXAMPLE',
    description: 'This is a description',
    tools: '(These are the tools)',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'EXAMPLE',
    description: 'This is a description',
    tools: '(These are the tools)',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'EXAMPLE',
    description: 'This is a description',
    tools: '(These are the tools)',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'EXAMPLE',
    description: 'This is a description',
    tools: '(These are the tools)',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'EXAMPLE',
    description: 'This is a description',
    tools: '(These are the tools)',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'EXAMPLE',
    description: 'This is a description',
    tools: '(These are the tools)',
    github: 'https://github.com',
    demo: 'https://github.com'
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
