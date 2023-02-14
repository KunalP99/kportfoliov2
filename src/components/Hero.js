import HtmlIcon from '../images/hero/html-icon.png';
import CssIcon from '../images/hero/css-icon.png';
import JsIcon from '../images/hero/js-icon.png';
import SassIcon from '../images/hero/sass-icon.png';
import ReactIcon from '../images/hero/react-icon.png';
import FigmaIcon from '../images/hero/figma-icon.png';
import CypressIcon from '../images/hero/cypress-icon.png';
import ArrowDown from '../images/hero/down-arrow.svg';

const Hero = () => {
  return (
    <div>
      <div className="hero-container">
        <h1 className='hero-name'>Kunal Patel</h1>
        <h1 className='hero-role'>Web Developer</h1>
        <div className='icon html-icon'>
          <img className='html-img' src={HtmlIcon} alt="HTML icon" />
        </div>
        <div className='icon css-icon'>
          <img className='css-img' src={CssIcon} alt="CSS icon" />
        </div>
        <div className='icon js-icon'>
          <img className='js-img' src={JsIcon} alt="JavaScript icon" />     
        </div>
        <div className='icon sass-icon'>
          <img className='sass-img' src={SassIcon} alt="SASS icon" />
        </div>
        <div className='icon react-icon'>
          <img className='react-img' src={ReactIcon} alt="React icon" />
        </div>
        <div className='icon figma-icon'>
          <img className='figma-img' src={FigmaIcon} alt="Figma icon" />
        </div>
        <div className='icon cypress-icon'>
          <img className='cypress-img' src={CypressIcon} alt="Cypress icon" />
        </div>
      </div>
      <div className='hero-recent-work-container'>
        <p>Take a look at my recent work</p>
        <img src={ArrowDown} alt="Scroll down to recent works" />
      </div>
    </div>
    
  );
};

export default Hero;