import PurpleLink from '../../images/projects/purple-link.svg';
import BlackArrow from '../../images/projects/black-arrow.svg';

const On1Solutions = ({setShowModal, setModalNum}) => {
  return (
    <div className="card on1-card" >
      <h2 className='project-title'>On1 Solutions</h2>
      <p className='project-slogan'>Innovative technical solutions for key HR business challenges.</p>
      <div className="links-container">
        <a className="visit-website-link" href="https://on1solutions.com/" target='_blank' rel="noreferrer">Visit Website <img className='link-img' src={PurpleLink} alt="Visit Weather App website" /></a>
        <button onClick={() => {
          setShowModal(true);
          setModalNum(3); 
        }}>View more<img src={BlackArrow} alt="View more information about games inventory project" /></button>
      </div>
      <object
        className="on1-anim"
        type="image/svg+xml"
        data="https://gistcdn.githack.com/KunalP99/e197ac5eb95384ff32e20b2e6b8d2967/raw/e1b3275e7f3ae645991495d7c5303cdf2864bf1c/on1AnimationRainbow.svg"
      ></object>
    </div>
  );
};

export default On1Solutions;