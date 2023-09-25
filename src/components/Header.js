import Nav from "./Nav";
import logo from "../_assets/logo.svg";

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={logo} alt='Jim Carpenter - Web Developer' />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
