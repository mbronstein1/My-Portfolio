import React from 'react';
import './Header.css';
import Navbar from '../Navigation/Navbar';


export default function Header() {
    return (
        <div className="jumbotron jumbotron-fluid header">
            <div className="d-flex flex-row h-100 justify-content-between">
                <h1 className='mx-5 custom-header align-self-center'>Mbronstein</h1>
                <Navbar />
            </div>
        </div>
    )
}