
const NavbarHome = () => {
    return (
        
        <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="wrapper">
                <div className="logo">
                    <a className="navbar-brand" href="home.html">
                        <img src={process.env.PUBLIC_URL + '/assets/logo-ALTA.png'} alt="" width="120"/>
                    </a>
                </div>
                <div className="navigat">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="home.html">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="exp.hmtl">EXPERIENCE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact_us.html">CONTACT</a>
                        </li>
                    </ul>
                    </div> 
                </div>
            </div>
        </nav>
        </div>
    );
}

export default NavbarHome;