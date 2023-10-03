import HtmlIcon from '../images/devicons/html-icon.png';
import CssIcon from '../images/devicons/css-icon.png';
import JsIcon from '../images/devicons/js-icon.png';
import SassIcon from '../images/devicons/sass-icon.png';
import ReactIcon from '../images/devicons/react-icon.png';
import JestIcon from '../images/devicons/jest-icon.png';
import TypescriptIcon from '../images/devicons/typescript-icon.png';
import ArrowDown from '../images/devicons/down-arrow.svg';

const Hero = ({ scrollIntoViewOffset }) => {
  return (
    <section id='hero'>
      <div className='hero-container'>
        <h1 className='hero-name'>Kunal Patel</h1>
        <h1 className='hero-role'>Web Developer</h1>
        <div className='icon html-icon' title='HTML'>
          <img className='html-img' src={HtmlIcon} alt='HTML icon' />
        </div>
        <div className='icon css-icon' title='CSS'>
          <img className='css-img' src={CssIcon} alt='CSS icon' />
        </div>
        <div className='icon js-icon' title='JavaScript'>
          <img className='js-img' src={JsIcon} alt='JavaScript icon' />
        </div>
        <div className='icon sass-icon' title='SASS'>
          <img className='sass-img' src={SassIcon} alt='SASS icon' />
        </div>
        <div className='icon react-icon' title='React'>
          <img className='react-img' src={ReactIcon} alt='React icon' />
        </div>
        <div className='icon jest-icon' title='Jest'>
          <img className='jest-img' src={JestIcon} alt='Jest icon' />
        </div>
        <div className='icon typescript-icon' title='Typescript'>
          <img
            className='typescript-img'
            src={TypescriptIcon}
            alt='Typescript icon'
          />
        </div>
      </div>
      <div className='hero-recent-work-container'>
        <p>Take a look at my recent work</p>
        <button onClick={() => scrollIntoViewOffset('#projects', 100)}>
          <img src={ArrowDown} alt='Scroll down to recent works' />
        </button>
      </div>
    </section>
  );
};

export default Hero;
