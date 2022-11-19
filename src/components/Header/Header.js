import React from 'react';
import './Header.css';
import Navbar from '../Navigation/Navbar';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <div className="jumbotron jumbotron-fluid header">
            <div className="d-flex flex-row h-100 justify-content-between">
                <Link className='custom-header'
                    to="/">
                    <h1>Mbronstein</h1>
                </Link>
                <Navbar />
            </div>
        </div>
    )
};