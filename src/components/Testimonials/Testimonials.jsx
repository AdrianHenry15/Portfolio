import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/Images/img-me.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'John Oliver',
    review: 'This is a review'
  },
  {
    avatar: AVTR1,
    name: 'John Oliver',
    review: 'This is a review'
  },
  {
    avatar: AVTR1,
    name: 'John Oliver',
    review: 'This is a review'
  },
  {
    avatar: AVTR1,
    name: 'John Oliver',
    review: 'This is a review'
  }
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {data.map(({ avatar, name, review }) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
