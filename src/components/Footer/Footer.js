import React from "react";
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer d-flex">
            <div>
                <a href='https://github.com/mbronstein1' target='_blank' rel="noreferrer"><i className="fa-brands fa-github fa-xl px-3"></i></a>
                <a href='https://www.linkedin.com/in/matthew-bronstein-a9230462' target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin fa-xl"></i></a>
                <a href='https://www.facebook.com/bronstein007' target='_blank' rel="noreferrer"><i className="fa-brands fa-square-facebook fa-xl px-3"></i></a>
            </div>
            <div className='footer-copyright'>
                <p>&copy; {new Date().getFullYear()} - mbronstein</p>
            </div>
        </footer>
    )
}