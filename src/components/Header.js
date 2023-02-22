import { useState } from 'react';
import HamburgerMenu from '../images/hamburger.svg';
import xIcon from '../images/x.svg';

const Header = () => {
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
          <h3>KP</h3>
        </div>
        <div className="navbar-links">
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a className='action-btn' href='mailto:kunal_patel200@hotmail.co.uk'>Say Hello 👋</a></li>
          </ul>
        </div>
        <button className='hamburger' type='button' onClick={toggleNav}><img src={navIcon} alt="Open hamburger menu" /></button>
      </nav>
    </header>
  );
};

export default Header;
