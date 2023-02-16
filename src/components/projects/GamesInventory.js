import OrangeArrow from '../../images/projects/orange-arrow.svg';
import WhiteArrow from '../../images/projects/white-arrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';

// Images
import InventoryImg1 from '../../images/projects/inventory/inventory-img-1.png';
import InventoryImg2 from '../../images/projects/inventory/inventory-img-2.png';
import InventoryImg3 from '../../images/projects/inventory/inventory-img-3.png';
import InventoryImg4 from '../../images/projects/inventory/inventory-img-4.png';
import InventoryImg5 from '../../images/projects/inventory/inventory-img-5.png';
import InventoryImg6 from '../../images/projects/inventory/inventory-img-6.png';
import InventoryImg7 from '../../images/projects/inventory/inventory-img-7.png';
import InventoryImg8 from '../../images/projects/inventory/inventory-img-8.png';
import InventoryImg9 from '../../images/projects/inventory/inventory-img-9.png';
import InventoryImg10 from '../../images/projects/inventory/inventory-img-10.png';

const GamesInventory = () => {
  return (
    <div className="games-inventory-card">
      <h2>Games Inventory</h2>
      <p>Take control of your games, never misplace a title again.</p>
      <div className="links-container">
        <a className="visit-website-link" href="https://games-inventory.onrender.com/">Visit Website <img src={OrangeArrow} alt="Visit games inventory website" /></a>
        <a className="github-link" href="https://github.com/KunalP99/inventory-management" target='_blank' rel="noreferrer">GitHub  <img src={WhiteArrow} alt="Visit games inventory GitHub" /></a>
      </div>
      <Swiper
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        speed={9000}
        simulateTouch={false}
        breakpoints={{
          500: {
            slidesPerView: 4
          },
          1000: {
            slidersPerView: 3
          },
        }}
        autoplay={{
          delay: 1,
          reverseDirection: false,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={InventoryImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InventoryImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InventoryImg3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InventoryImg4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InventoryImg5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InventoryImg6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InventoryImg7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InventoryImg8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InventoryImg9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InventoryImg10} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GamesInventory;