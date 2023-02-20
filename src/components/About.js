import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

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

// Video 
import AboutVid1 from '../images/about/about-vid-1.mp4';
import AboutVid2 from '../images/about/about-vid-2.mp4';


const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vero dolor culpa recusandae illo illum reiciendis quisquam explicabo amet possimus! Quibusdam minima quisquam temporibus ex magni. Dignissimos similique ut aperiam?</p>

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
      </Swiper>
    </div>
  );
};

export default About;