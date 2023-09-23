import Nav from "./Nav";

function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        <h1 className='logo-name'>
          <span className='logo-name__first'>
            J<span className='logo-name--underline'>im</span>
          </span>
          <span className='logo-name__last logo-name--underline'>
            Carpenter
          </span>
        </h1>
        <p className='logo-title'>JavaScript Web Developer</p>
        <a
          href='/_assets/JimCarpenterResume-20230901.pdf'
          className='resume__link'
          target='_blank'
          rel='noreferrer'
        >
          Résumé
        </a>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
