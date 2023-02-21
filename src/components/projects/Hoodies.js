import GreyArrow from '../../images/projects/grey-arrow.svg';
import WhiteArrow from '../../images/projects/white-arrow.svg';
import HoodiesImg from '../../images/projects/hoodies/hoodies-img.png';

const Hoodies = () => {
  return (
    <div className="card hoodies-card">
      <h2>Hoodies</h2>
      <p>Experience the perfect blend of comfort and style with our hoodies.</p>
      <div className="links-container">
        <a className="visit-website-link" href="https://kunalp99.github.io/shopping-cart/" target='_blank' rel="noreferrer">Visit Website <img src={GreyArrow} alt="Visit Hoodies website" /></a>
        <a className="github-link" href="https://github.com/KunalP99/shopping-cart" target='_blank' rel="noreferrer">GitHub  <img src={WhiteArrow} alt="Visit Hoodies GitHub" /></a>
      </div>
      <img className='hoodies-img' src={HoodiesImg} alt="Hand holding phone with Hoodies website on it" />
    </div>
  );
} ;

export default Hoodies;