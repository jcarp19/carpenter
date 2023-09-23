function Nav() {
  return (
    <nav className='nav'>
      <div className='header__contactInfo'>
        <p className='header__emailAddress'>
          <a href='mailto:jim@carpenteronline.us'>jim@carpenteronline.us</a>
        </p>
        <p className='header__telephoneNumber'>
          <a href='tel:2489534315'>248.953.4315</a>
        </p>
        <p className='header__linkedIn'>
          <a
            href='https://www.linkedin.com/in/jcarp19/'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
        </p>
      </div>
    </nav>
  );
}
export default Nav;
