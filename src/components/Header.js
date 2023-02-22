import { useState } from 'react';
import HamburgerMenu from '../images/hamburger.svg';
import xIcon from '../images/x.svg';
import DarkMode from '../images/darklightmode/dark-mode.svg';
import LightMode from '../images/darklightmode/light-mode.svg';

const Header = ({scrollIntoViewOffset}) => {
  const [navIcon, setNavIcon] = useState(HamburgerMenu);
  const [theme, setTheme] = useState(DarkMode);

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

  // * TODO: Add dark mode icon and switch between moon and sun or similiar
  const toggleDarkMode = () => {
    const html = document.querySelector('html');
    if (html.style.background === 'white'){
      html.style.background = '#1A1A1A';
      html.style.color = 'white';
      setTheme(LightMode);
    }  else {
      html.style.background = 'white';
      html.style.color = 'black';
      setTheme(DarkMode);
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
            <li><button type='button' onClick={() => scrollIntoViewOffset('#about', 100)}>About</button></li>
            <li><button type='button'>Contact</button></li>
            <li><a className='action-btn' href='mailto:kunal_patel200@hotmail.co.uk'>Say Hello 👋</a></li>
            <li><button onClick={toggleDarkMode}><img src={theme} alt="Click to change colour of website" /></button></li>
          </ul>
        </div>
        <button className='hamburger' type='button' onClick={toggleNav}><img src={navIcon} alt="Open hamburger menu" /></button>
      </nav>
    </header>
  );
};

export default Header;
