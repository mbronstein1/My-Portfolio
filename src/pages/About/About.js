import React from "react";
import './About.css';
import ProfilePic from '../../assets/images/AXIOM_BRASS-6293.jpg'

export default function About() {
    return (
        <div className="container-fluid custom-about-container pb-1">
            <div className="card mx-auto custom-card">
                <div className="card-body">
                    <img src={ProfilePic} className='profile-pic mx-4 mt-4' alt='Profile Pic 2'/>
                    <div className="card-content mx-4">
                        <h2 className="card-title mt-4 mb-4"><u>About Me</u></h2>
                        <hr style={{borderTop: "solid 2px rgb(255, 189, 131)"}}/>
                        <p className="card-text">
                            My name is Matthew Bronstein, and I am a web developer based in the Chicagoland area. 
                            Originally born and raised in a suburb of Los Angeles, California, I moved to Chicago in 2006
                            to earn my Bachelor's Degree in Music at Roosevelt University's Chicago College of
                            Performing Arts, with a focus in French Horn Performance. After a successful 16-year career in music,
                            I decided to retire as a professional musician so I could pursue another interest of mine: <strong><em>web development</em></strong>.
                        </p>
                        <p className="card-text">
                            As a web developer, I recently graduated with a certificate of completion from the Full Stack Bootcamp through Northwestern University's School of Professional Studies.
                            Through this course, I learned basic and advanced concepts of both front-end and back-end development.
                            As a former musician, I have a ton of transferable skills that are perfect for coding.
                            For example, I love the flexibility and creativity of front-end development and the structure and organization of the back-end.
                            Feel free to check out my recent projects in my portfolio or visit my GitHub or LinkedIn profiles below.
                        </p>
                        <p className="card-text">
                            Outside of coding, I enjoy music, sports, and all things movies, television, and gaming!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}