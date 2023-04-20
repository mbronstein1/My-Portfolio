import React from 'react';
import './About.css';
import ProfilePic from '../../assets/images/headshot2.jpeg';

export default function About() {
  return (
    <div className='container-fluid custom-about-container pb-1'>
      <div className='card mx-auto custom-card'>
        <div className='card-body'>
          <img src={ProfilePic} className='profile-pic mx-4 mt-4' alt='Profile Pic 2' />
          <div className='card-content mx-4'>
            <h2 className='card-title mt-4 mb-4'>
              <u>About Me</u>
            </h2>
            <hr style={{ borderTop: 'solid 2px rgb(255, 189, 131)' }} />
            <p className='card-text'>
              I am an ambitious, detail-oriented full-stack web developer in the Chicago-land area. A recent graduate of the full-stack web development bootcamp at Northwestern
              University, I am equally proficient in and have an affinity for both front-end and back-end development. Front-end proficiencies include React, JavaScript, CSS,
              Bootstrap, jQuery, HTML, APIs, responsive design, Git; back-end proficiencies include Node, Express, MySQL/Sequelize, MongoDB/Mongoose, REST, and GraphQL. I am also
              currently working towards obtaining my AWS certification.
            </p>
            <p className='card-text'>
              I thrive in environments that promote critical thinking, problem-solving, and clear communication, am committed to excellence and resilience through extensive
              training and experience as a professional classical musician, and am highly motivated to learn new skills and technologies within the ever-evolving tech world. My
              training as a musician has provided me with a number of transferable skills for web development including learning and developing a language-based skill that focuses
              on pattern-matching and non-verbal communication, evaluating outcomes and learning from both successes and failures, and adapting while performing at an elite level
              in high-leverage, high-stress situations on a nightly basis regardless of countless changing variables and distractions.
            </p>
            <p className='card-text'>
              As mentioned above, prior to my web development career, I was a professional classical musician for 16 years, specializing in French Horn. I received my Bachelor's
              Degree of Music from Roosevelt University's Chicago College of Performing Arts, studying with Horn legend, Dale Clevenger. I performed with the symphony orchestras of
              Chicago, Milwaukee, Montreal, North Carolina, Richmond as well as the Lyric Opera and the Grant Park Symphony Orchestra. I was also a member of the award-winning
              Chicago-based brass quintet, Axiom Brass, touring the world while performing concerts of music by living composers and hosting education events for students from
              elementary schools through universities.
            </p>
            <p className='card-text'>
              Outside of coding, I am one of only 0.3% of the U.S. population to have achieved the coveted rank of Eagle Scout, earned my Bachelor's with a 3.96 GPA, and have
              played competitive baseball my entire life, even to this day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
