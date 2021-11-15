import React from 'react'
import { NavLink } from 'react-router-dom'
import sideImg from '../img/logo-ALTA@2x.png'
import './module.css'

const Navbar = () =>
{
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-md-top">
                <div className="container">
                    <a className="navbar-brand d-flex navb-logo" href="/">
                        <img src={ sideImg } alt="" width={ 100 } />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto d-flex justify-content-start">
                            <li className="nav-item navb-item">
                                <NavLink exact className="nav-link" to="/">HOME</NavLink>
                            </li>
                            <li className="nav-item navb-item">
                                <NavLink className="nav-link" to="/about">ABOUT</NavLink>
                            </li>
                            <li className='nav-item navb-item'>
                                <NavLink className="nav-link" to="/news">NEWS</NavLink>
                            </li>
                            <li className="nav-item navb-item">
                                <NavLink className="nav-link" to="/contact">CONTACT
                                    US</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
