import React from 'react';
import './style.css'



export default function Navigation() {
    const navLinks = ["About Me", "Projects", "Contact Me", "Resume"];
    return(
        <div className='align-self-end mb-2 custom-nav'>
            {navLinks.map((item) => <button type="button" className='nav-btn btn'>{item}</button>)}
        </div>
    )
}