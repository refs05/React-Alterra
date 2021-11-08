import { NavLink } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import './Navbar.css'

const NavbarHome = ()=> {

    const [status, SetStatus] = useState(false);
    const showBar = ()=> {
        
    }

    return (
        <div className="Container">
            <div className="bars" onClick={()=> showBar()}><img src="https://img.icons8.com/ios/30/000000/menu--v1.png"/></div>
            <div className="link"><NavLink to="/">Home</NavLink></div>
            <div className="link"><NavLink to="/About">About</NavLink></div>
        </div>
    )
}

const NavbarAbout = ()=> {
    return (
        <div className="Container">
            <div className="bars"><img src="https://img.icons8.com/ios/30/000000/menu--v1.png"/></div>
            <div className="link"><NavLink to="/">Home</NavLink></div>
            <div className="link"><NavLink to="/About/App">About App</NavLink></div>
            <div className="link"><NavLink to="/About/Author">About Author</NavLink></div>
        </div>
    )
}

export {NavbarHome, NavbarAbout}