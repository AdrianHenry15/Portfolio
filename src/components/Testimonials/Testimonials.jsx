import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/Images/John-Rivers-pic.png';
import AVTR2 from '../../assets/Images/Shannon-Gravitte.jpg';

// import Swiper core and required modules
import { EffectCoverflow, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'John Rivers',
    title: 'Owner of Four Rivers Smokehouse',
    contactNum: '407-256-8089'
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Shannon Gravitte',
    title: 'Vice President of Advent Health',
    contactNum: '407-443-4441'
  }
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Personal & Professional</h5>
      <h2>References</h2>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="container testimonials__container"
        spaceBetween={40}>
        {data.map(({ id, avatar, name, title, contactNum }) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__title">{title}</small>
              <small className="client__contactNum">{contactNum}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
