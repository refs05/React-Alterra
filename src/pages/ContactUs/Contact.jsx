import React from 'react'
import './contact.css'
import logo from '../../img/logo-ALTA-v2@2x.png'
import bgLgo from '../../img/charles-rRWiVQzLm7k-unsplash.jpg'
import Forms from '../../components/Forms'
const Contact = () =>
{
    return (
        <div className="contact">
            <div className="container-fluid ms-0 ps-0 animate-bottom">
                <div className="row justify-content-between">
                    <div className="col kiri">
                        <img src={ bgLgo } className="bg-alta" alt="" />
                        <div className="bg-ungu position-absolute top-0 start-0">
                        </div>
                        <img src={ logo } className=" logo position-absolute start-0" alt="" />
                    </div>
                    <div className="col p-3 m-5">
                        <h1>Contact us</h1>
                        <Forms />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
