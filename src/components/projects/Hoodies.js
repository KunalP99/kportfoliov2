import GreyArrow from '../../images/projects/grey-arrow.svg';
import WhiteArrow from '../../images/projects/white-arrow.svg';
import HoodiesImg from '../../images/projects/hoodies/hoodies-img.png';

const Hoodies = () => {
  return (
    <div className="card hoodies-card">
      <h2>Hoodies</h2>
      <p>Where comfort meets fashion.</p>
      <div className="links-container">
        <a className="visit-website-link" href="https://games-inventory.onrender.com/" target='_blank' rel="noreferrer">Visit Website <img src={GreyArrow} alt="Visit Hoodies website" /></a>
        <a className="github-link" href="https://github.com/KunalP99/inventory-management" target='_blank' rel="noreferrer">GitHub  <img src={WhiteArrow} alt="Visit Hoodies GitHub" /></a>
      </div>
      <img className='hoodies-img' src={HoodiesImg} alt="Hand holding phone with Hoodies website on it" />
    </div>
  );
} ;

export default Hoodies;