import Logo from '../images/logo.png';

const Header = () => {
  return (
    <header id='header'>
      <img src={Logo} alt="Logo for kportfolio" />
      <a href='mailto:kunal_patel200@hotmail.co.uk'>Say Hello 👋</a>
    </header>
  );
};

export default Header;
