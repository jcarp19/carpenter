function Nav() {
  return (
    <>
      <nav className='nav'>
        <a className='nav__link-text' href='mailto:jim@carpenteronline.us'>
          Email
        </a>
        <a className='nav__link-text' href='tel:2489534315'>
          Phone
        </a>
        <a
          className='nav__link-text'
          href='https://www.linkedin.com/in/jcarp19/'
          target='_blank'
          rel='noreferrer'
        >
          LinkedIn
        </a>
        <a
          href='/_assets/JimCarpenterResume-20230901.pdf'
          className='nav__link-text nav__link-btn'
          target='_blank'
          rel='noreferrer'
        >
          Résumé
        </a>
      </nav>
      <div className='navigation'>
        <input
          type='checkbox'
          className='navigation__checkbox'
          id='navi-toggle'
        />
        <label for='navi-toggle' className='navigation__button'>
          <span className='navigation__icon'>&nbsp;</span>
        </label>
        <div className='navigation__background'>&nbsp;</div>
        <nav className='navigation__nav'>
          <ul className='navigation__list'>
            <li className='navigation__item'>
              <a
                className='nav__link-text'
                href='mailto:jim@carpenteronline.us'
              >
                Email
              </a>
            </li>
            <li className='navigation__item'>
              <a className='nav__link-text' href='tel:2489534315'>
                Phone
              </a>
            </li>
            <li className='navigation__item'>
              <a
                className='nav__link-text'
                href='https://www.linkedin.com/in/jcarp19/'
                target='_blank'
                rel='noreferrer'
              >
                LinkedIn
              </a>
            </li>
            <li className='navigation__item'>
              <a
                href='/_assets/JimCarpenterResume-20230901.pdf'
                className='nav__link-text nav__link-btn'
                target='_blank'
                rel='noreferrer'
              >
                Résumé
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Nav;
