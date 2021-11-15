import React from 'react'
import './Home.css'
import Timer from '../../components/Timer'
import Profile from '../../components/Profile'

const Home = () =>
{
    return (
        <div className="profile">
            <section className="project">
                <div className="container position-relative">
                    <div className='position-absolute top-0 end-0'>
                        <Timer />
                    </div>
                    <Profile />
                </div>
            </section>
        </div>
    )
}

export default Home
