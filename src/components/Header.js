import Logo from '../images/logo.png';

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo for kportfolio" />
      <button>Say Hello 👋</button>
    </header>
  );
};

export default Header;
