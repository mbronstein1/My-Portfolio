import React from "react";
import ProfilePic from '../../assets/images/Profile-Pic.jpg';
import './Home.css'

export default function Home({ handlePageChange }) {
    return (
        <div className="container-fluid d-flex justify-content-center custom-home-container">
            <div className="polaroid">
                <img src={ProfilePic} title="Profile Pic" alt="Profile Pic" />
            </div>
            <div className="text-content d-flex flex-column justify-content-center">
                <h2 className="mb-2">Hey there!</h2>
                <p>My name is Matthew Bronstein.</p>
                <p>I am a Chicago-based web developer.</p>
                <p>Click below to learn more about me!</p>
                <a href="#about"
                    onClick={() => handlePageChange('about')}>
                    <button type='button' className='btn custom-btn'>Learn more!</button>
                </a>
            </div>
        </div>
    )
}