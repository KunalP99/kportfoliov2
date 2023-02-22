import { useState } from 'react';
import HamburgerMenu from '../images/hamburger.svg';
import xIcon from '../images/x.svg';

const Header = ({scrollIntoViewOffset}) => {
  const [navIcon, setNavIcon] = useState(HamburgerMenu);

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
          </ul>
        </div>
        <button className='hamburger' type='button' onClick={toggleNav}><img src={navIcon} alt="Open hamburger menu" /></button>
      </nav>
    </header>
  );
};

export default Header;
