import HtmlIcon from '../images/hero/html-icon.png';
import CssIcon from '../images/hero/css-icon.png';
import JsIcon from '../images/hero/js-icon.png';
import SassIcon from '../images/hero/sass-icon.png';
import ReactIcon from '../images/hero/react-icon.png';
import GitIcon from '../images/hero/git-icon.png';
import CypressIcon from '../images/hero/cypress-icon.png';
import ArrowDown from '../images/hero/down-arrow.svg';

const Hero = ({scrollIntoViewOffset}) => {
  return (
    <section id='hero'>
      <div className="hero-container">
        <h1 className='hero-name'>Kunal Patel</h1>
        <h1 className='hero-role'>Web Developer</h1>
        <div className='icon html-icon' title='HTML'>
          <img className='html-img' src={HtmlIcon} alt="HTML icon" />
        </div>
        <div className='icon css-icon' title='CSS'>
          <img className='css-img' src={CssIcon} alt="CSS icon" />
        </div>
        <div className='icon js-icon' title='JavaScript'>
          <img className='js-img' src={JsIcon} alt="JavaScript icon" />     
        </div>
        <div className='icon sass-icon' title='SASS'>
          <img className='sass-img' src={SassIcon} alt="SASS icon" />
        </div>
        <div className='icon react-icon' title='React'>
          <img className='react-img' src={ReactIcon} alt="React icon" />
        </div>
        <div className='icon git-icon' title='Git'>
          <img className='figma-img' src={GitIcon} alt="Figma icon" />
        </div>
        <div className='icon cypress-icon' title='Cypress'>
          <img className='cypress-img' src={CypressIcon} alt="Cypress icon" />
        </div>
      </div>
      <div className='hero-recent-work-container'>
        <p>Take a look at my recent work</p>
        <button onClick={() => scrollIntoViewOffset('#projects', 100)}>
          <img src={ArrowDown} alt="Scroll down to recent works" />
        </button> 
      </div>
    </section>
    
  );
};

export default Hero;