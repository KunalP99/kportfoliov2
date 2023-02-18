import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';

// Images
import AboutImg1 from '../images/about/about-img-1.jpg';
import AboutImg2 from '../images/about/about-img-2.jpg';

// Video 
import AboutVid1 from '../images/about/about-vid-1.mp4';


const About = () => {

  // const aboutSwiper = new Swiper('.s2', {});

  // console.log(document.querySelector('.swiper'));

  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vero dolor culpa recusandae illo illum reiciendis quisquam explicabo amet possimus! Quibusdam minima quisquam temporibus ex magni. Dignissimos similique ut aperiam?</p>

      <Swiper
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        speed={15000}
        simulateTouch={false}
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
          <img src={AboutImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={AboutImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={AboutImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={AboutImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <video src={AboutVid1} autoPlay="true" loop="true" muted />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default About;