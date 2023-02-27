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
import AboutImg7 from '../images/about/about-img-7.jpg';
import AboutImg8 from '../images/about/about-img-8.jpg';

// Video 
import AboutVid1 from '../images/about/about-vid-1.mp4';
import AboutVid2 from '../images/about/about-vid-2.mp4';


const About = () => {
  return (
    <section id='about' className="about-container">
      <h2>About Me</h2>
      <p>Upon completing my degree in Computer Science from Brunel University, I discovered a keen interest in Web Development. I was fascinated by the challenge of building user-friendly and visually appealing websites.</p>
      <p>After several months of dedicated study, I started my first position as a freelance Frontend Developer at On1 Solutions. During my time there, I successfully applied my knowledge to develop a complete website.</p>
      <p>Motivated to expand my skillset, I embarked on learning React and more recently, I have been exploring Express and MongoDB.</p>
      <p>Dedicated to this craft, I am excited to continue on this journey and see what more this field has to offer.</p>

      {/* Creates an infinite slider with autoplay  */}
      <Swiper
        loop={true}
        centeredSlides={true}
        slidesPerView={1.8}
        speed={15000}
        simulateTouch={false}
        breakpoints= {{
          700: {
            slidesPerView: 2
          },
          1000: {
            slidesPerView: 2.8
          },
          1500: {
            slidesPerView: 3.8
          }
        }}
        autoplay={{
          delay: 1,
          reverseDirection: false,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="about-swiper"
        
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
        <SwiperSlide>
          <img src={AboutImg7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={AboutImg8} />
        </SwiperSlide>
      </Swiper>
      <Interests />
    </section>
  );
};

export default About;