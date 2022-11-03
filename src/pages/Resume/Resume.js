import React from "react";
import './Resume.css'

export default function Resume() {
    const frontEndProf = ['HTML', 'CSS', 'JavaScript', 'JQuery', 'responsive design', 'React', 'Bootstrap']
    const backEndProf = ['APIs', 'Node', 'Express', 'MySQL, Sequelize', 'MongoDB, Mongoose', 'REST', 'GraphQL']
    return (
        <div className='container'>
            <div className='custom-container px-4 py-3 my-4 mx-auto' style={{ width: "70%", height: "32.5rem" }}>
                <h2 className='contact-header pb-2'>Resume</h2>
                <hr style={{ borderTop: "solid 2px rgb(255, 189, 131)" }} />
                <p>Download my <a href='#' className='resume-link'>resume</a>.</p>
                <div className='resume-content'>
                    <h3>Front-end Proficiencies</h3>
                    <ul>
                        {frontEndProf.map(item => <li>{item}</li>)}
                    </ul>
                    <h3>Back-end Proficiencies</h3>
                    <ul>
                        {backEndProf.map(item => <li>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}