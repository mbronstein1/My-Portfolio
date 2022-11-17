import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const navLinks = [
        {
            name: 'About Me',
            link: '/react-portfolio-challenge-20/about',
        },
        {
            name: 'Portfolio',
            link: '/react-portfolio-challenge-20/portfolio',
        },
        {
            name: 'Contact Me',
            link: '/react-portfolio-challenge-20/contact',
        },
        {
            name: 'Resume',
            link: '/react-portfolio-challenge-20/resume'
        }
    ];
    
    return (
        <nav className="navbar navbar-expand-lg align-self-end mb-2 custom-nav">
            <div className="container-fluid">
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                        {navLinks.map((item, index) => (
                            <li key={`${item.name}-${index}`} className="nav-item">
                                <NavLink  className='nav-link nav-btn'
                                    to={item.link}>
                                    {item.name}
                                </NavLink >
                            </li>))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}


