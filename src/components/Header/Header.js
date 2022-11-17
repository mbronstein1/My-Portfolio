import React from 'react';
import './Header.css';
import Navbar from '../Navigation/Navbar';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <div className="jumbotron jumbotron-fluid header">
            <div className="d-flex flex-row h-100 justify-content-between">
                <Link className='m-5 custom-header align-self-center'
                    to="/react-portfolio-challenge-20/">
                    <h1>Mbronstein</h1>
                </Link>
                <Navbar />
            </div>
        </div>
    )
};