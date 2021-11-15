import React from 'react'
import profileImg from '../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'
const Profile = () =>
{
    return (
        <div className="row vh-100 justify-content-center text-center align-items-center">
            <div className="col">
                <img src={ profileImg } width="355px" className="rounded-circle profile pt-3" alt="" />
            </div>
            <div className="col kanan position-relative">
                <div className="position-absolute top-0 end-0 mb-20">
                </div>
                <div className="content mb-5 mt-3">
                    <h5 className="s-p">Hi My Name is</h5>
                    <h1 className="names">Anne Sullivan</h1>
                    <h4 className="desc">I Build things for the web</h4>
                    <a href="contact"><button className="btn text-white mt-4">Get In Touch</button></a>
                </div>
            </div>
        </div>
    )
}

export default Profile
