import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Interests from './Interests';

// Import Swiper styles
import 'swiper/css';

// Images
import AboutImg1 from '../images/about/about-img-1.jpg';
import AboutImg2 from '../images/about/about-img-2.jpg';
import AboutImg3 from '../images/about/about-img-3.jpg';
import AboutImg4 from '../images/about/about-img-4.jpg';
import AboutImg5 from '../images/about/about-img-5.jpg';
import AboutImg6 from '../images/about/about-img-6.jpg';

// Video
import AboutVid1 from '../images/about/about-vid-1.mp4';
import AboutVid2 from '../images/about/about-vid-2.mp4';

const About = () => {
  return (
    <section id='about' className='about-container'>
      <h2>About Me</h2>
      <ul>
        <li>
          Discovered my passion for web development after graduating from Brunel
          University.
        </li>
        <li>
          Started as a Frontend Developer at On1 Solutions where I designed,
          developed and launched their website.
        </li>
        <li>
          Successfully completed an internship at FashionAI, collaborating
          closely with a team of developers and designers, developing and
          maintaining the AI powered platform.
        </li>
        <li>
          Currently learning React, TypeScript, Jest, Next.js and keen to
          further my skill set.
        </li>
      </ul>

      {/* Creates an infinite slider with autoplay  */}
      <Swiper
        loop={true}
        centeredSlides={true}
        slidesPerView={1.8}
        speed={15000}
        simulateTouch={false}
        breakpoints={{
          700: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 2.8,
          },
        }}
        autoplay={{
          delay: 1,
          reverseDirection: false,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className='about-swiper'
      >
        <SwiperSlide>
          <img src={AboutImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={AboutImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <video src={AboutVid1} autoPlay={true} loop={true} muted />
        </SwiperSlide>
        <SwiperSlide>
          <img src={AboutImg3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={AboutImg4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={AboutImg5} />
        </SwiperSlide>
        <SwiperSlide>
          <video src={AboutVid2} autoPlay={true} loop={true} muted />
        </SwiperSlide>
        <SwiperSlide>
          <img src={AboutImg6} />
        </SwiperSlide>
      </Swiper>
      <Interests />
    </section>
  );
};

export default About;
