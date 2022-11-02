import React from "react";
import ProfilePic from '../assets/images/Profile-Pic.jpg';
import './Home.css'

export default function Home() {
    return (
        <div className="card mb-3 custom-card" style={{ maxWidth: "540px" }}>
            <img src={ProfilePic} className="card-img-top" alt="Profile Pic" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    )
}