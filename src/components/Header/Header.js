import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navbar';


export default function Header() {
    return (
        <div className="jumbotron jumbotron-fluid header">
            <div className="d-flex flex-row h-100 justify-content-between">
                <h1 className='m-5 custom-header'>Mbronstein</h1>
                <Navigation />
            </div>
        </div>
    )
}