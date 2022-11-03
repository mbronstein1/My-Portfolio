import React from "react";
import './About.css';
import ProfilePic from '../../assets/images/AXIOM_BRASS-6293.jpg'

export default function About() {
    return (
        <div className="container">
            <div className="card mx-auto my-5 custom-card" style={{ width: "60%", height: "32.5rem" }}>
                <div className="card-body">
                    <img src={ProfilePic} className='profile-pic mx-5 mt-4' alt='Profile Pic 2'/>
                    <div className="card-content">
                        <h2 className="card-title mt-4 mb-4"><u>About Me</u></h2>
                        <hr className='mx-5' style={{borderTop: "solid 2px rgb(255, 189, 131)"}}/>
                        <p className="card-text mx-5">
                            My name is Matthew Bronstein, and I am a web developer based in the Chicagoland area. 
                            Originally born and raised in a suburb of Los Angeles, California, I moved to Chicago in 2006
                            to earn my Bachelor's Degree in Music at Roosevelt University's Chicago College of
                            Performing Arts, with a focus in French Horn Performance. After a successful 16-year career in the music,
                            I decided to retire as a professional musician so I could pursue another interest of mine: <strong><em>web development</em></strong>.
                        </p>
                        <p className="card-text mx-5">
                            As a web developer, I am currently enrolled in the Full Stack Bootcamp through Northwestern University's School of Professional Studies.
                            Through this course, I have learned basic and advanced concepts of both front-end and back-end development. Feel free to check out my
                            recent projects in my portfolio or visit my GitHub or LinkedIn profiles below.
                        </p>
                        <p className="card-text mx-5">
                            Outside of coding, I enjoy music (obviously!), sports (baseball and hockey primarily), and all things movies and television!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}