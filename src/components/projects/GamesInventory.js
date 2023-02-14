import OrangeArrow from '../../images/projects/orange-arrow.svg';
import WhiteArrow from '../../images/projects/white-arrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// Images
import InventoryImg1 from '../../images/projects/inventory/inventory-img-1.png';
import InventoryImg2 from '../../images/projects/inventory/inventory-img-2.png';
import InventoryImg3 from '../../images/projects/inventory/inventory-img-3.png';

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
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          stretch: 0,
          modifier: 1,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
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
      </Swiper>
    </div>
  );
};

export default GamesInventory;