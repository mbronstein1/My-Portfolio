import React from 'react';
import webDevResume from '../../assets/Web-dev-resume_Final.pdf';
import './Resume.css';

export default function Resume() {
  const frontEndProf = ['HTML', 'CSS', 'JavaScript', 'JQuery', 'responsive design', 'React', 'Bootstrap'];
  const backEndProf = ['APIs', 'Node', 'Express', 'MySQL, Sequelize', 'MongoDB, Mongoose', 'REST', 'GraphQL'];
  return (
    <div className='container card pb-1 custom-resume-container px-4 py-3 mx-auto'>
      <h2 className='contact-header pb-2'>Resume</h2>
      <hr style={{ borderTop: 'solid 2px rgb(255, 189, 131)' }} />
      <p>
        Download my{' '}
        <a
          href={webDevResume}
          target='_blank'
          rel='noreferrer'
          className='resume-link'>
          resume
        </a>
        .
      </p>
      <div className='resume-content'>
        <h3>Front-end Proficiencies</h3>
        <ul>
          {frontEndProf.map(item => (
            <li>{item}</li>
          ))}
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul>
          {backEndProf.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
