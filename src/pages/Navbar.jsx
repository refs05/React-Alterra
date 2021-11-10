import { NavLink } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import './Navbar.css'
import off from '../components/close.png'

const NavbarHome = ()=> {

    const [status, SetStatus] = useState(false);
    const showBar = ()=> {
        SetStatus((prev) => !prev)
        
    }
    // console.log(status)
    return (
       
        // <div className="wrapper">
        <div  className={status ? "ContainerOn" : "ContainerOff"}>
        <div className={status ? "barsOn" : "barsOff"} onClick={()=> showBar()}>{}</div>
            <div className="link-wrapper">
                <div className="link"><NavLink to="/">Home</NavLink></div>
                <div className="link"><NavLink to="/About">About</NavLink></div>
            </div>
        </div>
        // </div> 
    )
}

const NavbarAbout = ()=> {
    const [status, SetStatus] = useState(false);
    const showBar = ()=> {
        SetStatus((prev) => !prev)
    }
    
    return (
        <div  className={status ? "ContainerOn" : "ContainerOff"}>
            <div className={status ? "barsOn" : "barsOff"} onClick={()=> showBar()}>{}</div>
            <div className="link-wrapper">
                <div className="link"><NavLink to="/">Home</NavLink></div>
                <div className="link"><NavLink to="/About/App">About App</NavLink></div>
                <div className="link"><NavLink to="/About/Author">About Author</NavLink></div>
            </div>
        </div>
        
    )
}

export {NavbarHome, NavbarAbout}