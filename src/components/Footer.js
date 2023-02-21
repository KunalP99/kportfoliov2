import UpArrow from '../images/footer/up-arrow.svg';
import GitHubIcon from '../images/footer/github-icon.svg';
import LinkedInIcon from '../images/footer/linkedin-icon.svg';
import YouTubeIcon from '../images/footer/youtube-icon.svg';

const Footer = () => {
  return (
    <footer>
      <div className='back-to-top'>
        <button type='button'>
          <img src={UpArrow} alt="Scroll back to the top" onClick={() => document.getElementById('header').scrollIntoView()}/>
        </button> 
        <p>Back to the top</p>
      </div>
      <div className='social-links-container'>
        <a href="https://github.com/KunalP99" target='_blank' rel="noreferrer"><img src={GitHubIcon} alt="Visit my GitHub profile" /></a>     
        <a href="https://www.linkedin.com/in/kunalpatel99/" target='_blank' rel="noreferrer"><img src={LinkedInIcon} alt="Visit my LinkedIn profile" /></a>
        <a href="https://www.youtube.com/@kproductions99" target='_blank' rel="noreferrer"><img src={YouTubeIcon} alt="Visit my YouTube channel" /></a>
      </div>
    </footer>
  );
};

export default Footer;