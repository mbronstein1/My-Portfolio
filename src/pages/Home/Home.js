import React from "react";
import { NavLink } from 'react-router-dom';
import ProfilePic from '../../assets/images/Profile-Pic.jpg';
import './Home.css';

export default function Home() {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center custom-home-container">
            <div className="polaroid">
                <img src={ProfilePic} title="Profile Pic" alt="Profile Pic" />
            </div>
            <div className="text-content d-flex flex-column justify-content-center">
                <h2 className="mb-2">Hey there!</h2>
                <p>My name is Matthew Bronstein.</p>
                <p>I am a Chicago-based web developer.</p>
                <p>Click below to learn more about me!</p>
                <NavLink to='/about'>
                    <button type='button' className='btn custom-btn'>Learn more!</button>
                </NavLink>
            </div>
        </div>
    )
}