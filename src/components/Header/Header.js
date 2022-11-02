import React from 'react';
import './Header.css';
import Navbar from '../Navigation/Navbar';


export default function Header({ currentPage, handlePageChange }) {
    return (
        <div className="jumbotron jumbotron-fluid header">
            <div className="d-flex flex-row h-100 justify-content-between">
                <a className='m-5 custom-header align-self-center'
                    href="/"
                    onClick={() => handlePageChange('/')}>
                    <h1>Mbronstein</h1>
                </a>
                <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
        </div>
    )
}