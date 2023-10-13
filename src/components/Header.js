import { useContext, useState } from 'react';
import { ThemeContext } from '../App';
import HamburgerMenu from '../images/hamburger.svg';
import xIcon from '../images/x.svg';
import DarkMode from '../images/darklightmode/dark-mode.svg';
import LightMode from '../images/darklightmode/light-mode.svg';

const Header = ({scrollIntoViewOffset, toggleTheme}) => {
  const [navIcon, setNavIcon] = useState(HamburgerMenu);
  const darkTheme = useContext(ThemeContext);
  const [themeImg, setThemeImg] = useState(DarkMode);
  
  // Toggle navbar and change hamburger icon to xIcon and vice versa
  const toggleNav = () => {
    // Change hamburger menu to x icon and vice versa
    if (navIcon !== HamburgerMenu) {
      setNavIcon(HamburgerMenu);
    } else {
      setNavIcon(xIcon);
    }

    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
  };

  // Toggles between dark mode and light mode
  const toggleDarkMode = () => {
    const html = document.querySelector('html');
    if (darkTheme){
      html.style.background = '#1A1A1A';
      html.style.color = 'white';
      toggleTheme(true);
      setThemeImg(LightMode);
    }  else {
      html.style.background = 'white';
      html.style.color = 'black';
      toggleTheme(false);
      setThemeImg(DarkMode);
    }
  };

  return (
    <header id='header'>
      <nav>
        <div className="logo">
          <a href="#"><h3>KP</h3></a> 
        </div>
        <div className="navbar-links">
          <ul>
            <li><button type='button' onClick={() => scrollIntoViewOffset('#projects', 100)}>Projects</button></li>
            <li><button type='button' onClick={() => scrollIntoViewOffset('#skills', 100)}>Skills</button></li>
            <li><button type='button' onClick={() => scrollIntoViewOffset('#about', 100)}>About</button></li>
            <li><a className='cv-btn' href='https://drive.google.com/file/d/1ek998FQO7x48Y3quTnatlltxRFLMMiA0/view' target='_blank' rel='noreferrer'>CV</a></li>
            <li><a className='action-btn' href='mailto:kunal_patel200@hotmail.co.uk'>Say Hello 👋</a></li>
            <li><button onClick={toggleDarkMode}><img src={themeImg} alt="Click to change theme of website" /></button></li>
          </ul>
        </div>
        <button className='hamburger' type='button' onClick={toggleNav}><img src={navIcon} alt="Open hamburger menu" /></button>
      </nav>
    </header>
  );
};

export default Header;
