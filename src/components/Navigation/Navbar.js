import React from 'react';
import './Navbar.css'



export default function Navbar() {
    const navLinks = ["About Me", "Projects", "Contact Me", "Resume"];
    return (
        <nav className="navbar navbar-expand-lg align-self-end mb-2 custom-nav">
            <div className="container-fluid">
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {navLinks.map((item, index) => <li key={`${item}-${index}`} className="nav-item"><a className="nav-link nav-btn" href={`/${item}`}>{item}</a></li>)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}


