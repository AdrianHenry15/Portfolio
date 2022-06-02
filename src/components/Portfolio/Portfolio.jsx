import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/Images/port-1.png';
import IMG2 from '../../assets/Images/port-2.png';
import IMG3 from '../../assets/Images/port-3.png';
import IMG4 from '../../assets/Images/port-4.png';
import IMG5 from '../../assets/Images/port-6.png';
import IMG6 from '../../assets/Images/blob_app.png';
import IMG7 from '../../assets/Images/calendar_app.png';
import IMG8 from '../../assets/Images/run_buddy.png';
import IMG9 from '../../assets/Images/weather_app.png';
import IMG10 from '../../assets/Images/work_day_app.png';
import IMG11 from '../../assets/Images/zoo_keepr.png';
import IMG12 from '../../assets/Images/budget_app.png';
import IMG13 from '../../assets/Images/food_fest_app.png';
import IMG14 from '../../assets/Images/planit.png'

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
    image: IMG14,
    title: 'Plan-It Organizer',
    description: 'Note Organization Application',
    tools: '(React, GraphQl, Tailwind CSS, JWTs, MongoDB, Mongoose, Express, Apollo, Bcrypt)',
    github: 'https://github.com/AdrianHenry15/Plan-It-Organizer',
    demo: 'https://plan-it-organizer.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG13,
    title: 'Food Festival',
    description: 'Food Festival Progressive Web Application',
    tools:
      '(Javascript, ExpressJS, Vercel, NodeJS, Mongoose, Service Worker, Webpack, File-Loader, Image-Webpack-Analyzer, SW- Precache-Webpack, Webpack-PWA-Manifest)',
    github: 'https://github.com/AdrianHenry15/food-festival',
    demo: 'https://adrianhenry15.github.io/food-festival/'
  },
  {
    id: 3,
    image: IMG12,
    title: 'Budget Tracker',
    description: 'Budget Tracking Progressive Web Application',
    tools:
      '(Javascript, ExpressJS, Vercel, NodeJS, Mongoose, IndexedDB, Service Worker, Bootstrap, MongoDB)',
    github: 'https://github.com/AdrianHenry15/Track-Buddy-Budget-Tracker',
    demo: 'https://track-buddy-budget-tracker.vercel.app/'
  },
  {
    id: 4,
    image: IMG11,
    title: 'ZooKeepr',
    description: 'Animal Enthusiast App',
    tools: '(Javascript, ExpressJS, Vercel, NodeJS)',
    github: 'https://github.com/AdrianHenry15/zookeepr',
    demo: 'https://zookeepr.vercel.app/'
  },
  {
    id: 5,
    image: IMG10,
    title: 'iPlanner',
    description: 'A Work Day Scheduler',
    tools: '(Javascript, HTML, CSS. MomentJS)',
    github: 'https://github.com/AdrianHenry15/iPlanner',
    demo: 'https://adrianhenry15.github.io/iPlanner/'
  },
  {
    id: 6,
    image: IMG9,
    title: '4Cast Weather App',
    description: 'A Weather Application',
    tools: '(Javascript, HTML, CSS, OpenWeather API)',
    github: 'https://github.com/AdrianHenry15/4Cast',
    demo: 'https://adrianhenry15.github.io/4Cast/'
  },
  {
    id: 7,
    image: IMG8,
    title: 'Run Buddy',
    description: 'Fitness Training Services Website',
    tools: '(HTML, CSS)',
    github: 'https://github.com/AdrianHenry15/Run-Buddy-Website',
    demo: 'https://adrianhenry15.github.io/Run-Buddy-Website/'
  },
  {
    id: 8,
    image: IMG7,
    title: 'A Calendar App',
    description: 'Local Time Calendar Scheduler',
    tools: '(Javascript, HTML, CSS, MomentJS, jQuery)',
    github: 'https://github.com/AdrianHenry15/Calendar-Application',
    demo: 'https://adrianhenry15.github.io/Calendar-Application/'
  },

  {
    id: 9,
    image: IMG6,
    title: 'Blob',
    description: 'Application For Social Blogging',
    tools:
      '(Javascript, NodeJS, ExpressJS, dotenv, MySQL, Sequelize, bcrypt, HandlebarsJS, Heroku, JawsDB)',
    github: 'https://github.com/AdrianHenry15/blob',
    demo: 'https://rocky-wave-46848.herokuapp.com/'
  },
  
  {
    id: 10,
    image: IMG5,
    title: 'Git Book',
    description: 'Open Source Project Finder App',
    tools: '(Javascript, HTML, CSS)',
    github: 'https://github.com/AdrianHenry15/Git-Book',
    demo: 'https://adrianhenry15.github.io/Git-Book/'
  },
 
  {
    id: 11,
    image: IMG4,
    title: 'Task Master Pro',
    description: 'A Task Creation Application',
    tools: '(Javascript, HTML, CSS, jQuery)',
    github: 'https://github.com/AdrianHenry15/Task-Master-Pro-App',
    demo: 'https://adrianhenry15.github.io/Task-Master-Pro-App/'
  },
  
  {
    id: 12,
    image: IMG3,
    title: 'Taskinator',
    description: 'A Task Tracker App',
    tools: '(Javascript, CSS, HTML, Web Storage API)',
    github: 'https://github.com/AdrianHenry15/Taskinator-Website',
    demo: 'https://adrianhenry15.github.io/Taskinator-Website/'
  },

  {
    id: 13,
    image: IMG2,
    title: 'GitPokemon',
    description: 'Connect Your Github with a Pokemon',
    tools: '(Javascript, HTML, CSS, jQuery)',
    github: 'https://github.com/AdrianHenry15/Pokemon-App',
    demo: 'https://adrianhenry15.github.io/Pokemon-App/'
  },
  {
    id: 14,
    image: IMG1,
    title: 'Open Source Kanban',
    description: 'Social Media App',
    tools: '(Javascript, HandlebarsJS, CSS, NodeJS, ExpressJS)',
    github: 'https://github.com/AdrianHenry15/Group-Project-2',
    demo: 'https://oskdb.herokuapp.com/'
  },
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
