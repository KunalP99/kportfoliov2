import GreyLink from '../../images/projects/grey-link.svg';
import WhiteLink from '../../images/projects/white-link.svg';
import WhiteArrow from '../../images/projects/white-arrow.svg';
import HoodiesImg from '../../images/projects/hoodies/hoodies-img.png';

const Hoodies = ({setShowModal, setModalNum}) => {
  return (
    <div className='hoodies-container'>
      <div className="hoodies-card">
        <h2 className='project-title'>Hoodies</h2>
        <p className='project-slogan'>Experience the perfect blend of comfort and style with our hoodies.</p>
        <div className="links-container">
          <a className="visit-website-link" href="https://kunalp99.github.io/shopping-cart/" target='_blank' rel="noreferrer">Visit Website <img className='link-img' src={GreyLink} alt="Visit Hoodies website" /></a>
          <a className="github-link" href="https://github.com/KunalP99/shopping-cart" target='_blank' rel="noreferrer">GitHub  <img className='link-img' src={WhiteLink} alt="Visit Hoodies GitHub" /></a>
          <button onClick={() => {
            setShowModal(true);
            setModalNum(1); 
          }}>View more<img className='white-arrow' src={WhiteArrow} alt="View more information about games inventory project" /></button>
        </div>
        <img className='hoodies-img' src={HoodiesImg} alt="Hand holding phone with Hoodies website on it" />
      </div>
    </div>
  );
} ;

export default Hoodies;