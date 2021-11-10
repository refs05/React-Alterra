import React from 'react'
import { NavbarAbout } from './Navbar'

const About = () =>
{
    return (
        <div>
            <NavbarAbout/>
            <div className="container" style={{width: "800px", margin: "0 auto"}}>
                <p style={{textAlign: "center"}}>About</p> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolores maiores id quod unde nam, velit amet officiis necessitatibus, tenetur facilis! Minima iure fugit esse ex impedit velit dicta provident?</p>
            </div>
        </div>
    )
}

export default About