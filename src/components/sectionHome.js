
const SectionHome = () => {
    return (
        <div className="section">
        <img src={process.env.PUBLIC_URL + '/assets/bg-img.png'} alt=""/>
        <div className="home">
            <div className="profile"></div>
            <div className="desc-prof">
                <h4>Hi, my name is</h4>
                <h1>Anne Sullivan</h1>
                <p>I build things for the web</p>
                <a href="contact_us.html"><button>Get In Touch</button></a>
            </div>
        </div>
    </div>
    )
}

export default SectionHome;