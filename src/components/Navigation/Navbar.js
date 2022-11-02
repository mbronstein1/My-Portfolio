import React from 'react';
import './Navbar.css'



export default function Navbar({ currentPage, handlePageChange }) {
    const navLinks = [
        {
            name: 'About Me',
            link: 'about',
        },
        {
            name: 'Portfolio',
            link: 'portfolio',
        },
        {
            name: 'Contact Me',
            link: 'contact',
        },
        {
            name: 'Resume',
            link: 'resume'
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
                                <a className="nav-link nav-btn"
                                    href={`#${item.link}`}
                                    onClick={() => handlePageChange(`${item.link}`)}>
                                    {item.name}
                                </a>
                            </li>))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}


