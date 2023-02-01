function Header() {
    return (
        <header className="header">
            <h1 className="logo"><span className="logo__first">J<span className="logo__underline">im</span></span><span className="logo__last logo__underline">Carpenter</span></h1>
            <p className="title">JavaScript Web Developer</p>
            <div className="header__contactInfo">
                <p className="header__emailAddress"><a href="mailto:jim@carpenteronline.us">jim@carpenteronline.us</a></p>
                <p className="header__telephoneNumber"><a href="tel:2489534315">(248)953-4315</a></p>
                <p className="header__linkedIn"><a href="https://www.linkedin.com/in/jcarp19/" target="_blank" rel="noreferrer">LinkedIn</a></p>
            </div>
        {/* <h1 className="title">Jim Carpenter</h1>
        <a className="App-link" href="/natours/index.html" target="_blank" rel="noopener noreferrer">Natours</a>
        <a className='App-link' href="/nexter/index.html" target="_blank" rel="noopener noreferrer">Nexter</a>
        <a className='App-link' href="/trillo/index.html" target="_blank" rel="noopener noreferrer">Trillo</a> */}
      </header>

    )
}

export default Header;