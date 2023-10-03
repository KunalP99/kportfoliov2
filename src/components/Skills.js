import HtmlIcon from '../images/devicons/html-icon.png';
import CssIcon from '../images/devicons/css-icon.png';
import JsIcon from '../images/devicons/js-icon.png';
import SassIcon from '../images/devicons/sass-icon.png';
import ReactIcon from '../images/devicons/react-icon.png';
import JestIcon from '../images/devicons/jest-icon.png';
import TypescriptIcon from '../images/devicons/typescript-icon.png';
import GitIcon from '../images/devicons/git-icon.png';
import NextIcon from '../images/devicons/nextjs-icon.png';
import MuiIcon from '../images/devicons/mui-icon.png';
import FigmaIcon from '../images/devicons/figma-icon.png';

export const Skills = () => {
  return (
    <section id='skills' className='skills-container'>
      <h2>Skills</h2>
      <div className='skills-icon-container'>
        <div className='skill-container'>
          <img src={TypescriptIcon} alt='TypeScript' />
          <p>TypeScript</p>
        </div>
        <div className='skill-container'>
          <img src={JsIcon} alt='JS' />
          <p>JavaScript</p>
        </div>
        <div className='skill-container'>
          <img src={HtmlIcon} alt='HTML' />
          <p>HTML</p>
        </div>
        <div className='skill-container'>
          <img src={CssIcon} alt='CSS' />
          <p>CSS</p>
        </div>

        <div className='skill-container'>
          <img src={SassIcon} alt='SASS' />
          <p>SASS</p>
        </div>
        <div className='skill-container'>
          <img src={ReactIcon} alt='React' />
          <p>React</p>
        </div>
        <div className='skill-container'>
          <img src={JestIcon} alt='Jest' />
          <p>Jest</p>
        </div>
        <div className='skill-container'>
          <img src={GitIcon} alt='Git' />
          <p>Git</p>
        </div>
        <div className='skill-container'>
          <img src={NextIcon} alt='Next.js' />
          <p>Next.js</p>
        </div>
        <div className='skill-container'>
          <img src={MuiIcon} alt='Material UI' />
          <p>MUI</p>
        </div>
        <div className='skill-container'>
          <img src={FigmaIcon} alt='Figma' />
          <p>Figma</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
