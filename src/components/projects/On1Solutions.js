import PurpleArrow from '../../images/projects/purple-arrow.svg';

const On1Solutions = () => {
  
  return (
    <div className="card on1-card" >
      <h2>On1 Solutions</h2>
      <p>Innovative technical solutions for key HR business challenges.</p>
      <div className="links-container">
        <a className="visit-website-link" href="https://on1solutions.com/" target='_blank' rel="noreferrer">Visit Website <img src={PurpleArrow} alt="Visit Weather App website" /></a>
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