import React from "react";
import './Projects.css';
import couchPotato from '../../assets/images/Couch-Potato-screenshot.png';
import cocktailConcierge from '../../assets/images/Cocktail-concierge-screenshot.jpg';
import weatherDashboard from '../../assets/images/Weather-dashboard-screenshot.jpg';
import codingQuiz from '../../assets/images/code-quiz-screenshot.jpg';
import passwordGenerator from '../../assets/images/Password-Generator.jpg';
import backgroundGenerator from '../../assets/images/Background-generator-screenshot.png';

export default function Projects() {
    const projectData = [
        {
            id: 1,
            title: 'Couch Potato',
            type: 'HTML/CSS/JS/Node/MySQL',
            img: couchPotato,
            liveLink: "https://infinite-river-93616.herokuapp.com/",
            gitHubLink: "https://github.com/mbronstein1/Couch-Potato"
        },
        {
            id: 2,
            title: 'Cocktail Concierge',
            type: 'HTML/CSS/JS/APIs',
            img: cocktailConcierge,
            liveLink: "https://tyleresselman.github.io/cocktail-concierge-project-1/index.html",
            gitHubLink: "https://github.com/tyleresselman/cocktail-concierge-project-1"
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            type: 'HTML/CSS/JS/OpenWeather API',
            img: weatherDashboard,
            liveLink: "https://mbronstein1.github.io/Weather-Dashboard-Challenge-6/",
            gitHubLink: "https://github.com/mbronstein1/Weather-Dashboard-Challenge-6"
        },
        {
            id: 4,
            title: 'Coding Quiz',
            type: 'HTML/CSS/JS',
            img: codingQuiz,
            liveLink: "https://mbronstein1.github.io/Code-Quiz-Challenge-4/",
            gitHubLink: "https://github.com/mbronstein1/Code-Quiz-Challenge-4"
        },
        {
            id: 5,
            title: 'Random Password Generator',
            type: 'JavaScript',
            img: passwordGenerator,
            liveLink: "https://mbronstein1.github.io/Password-Generator-Challenge-3/",
            gitHubLink: "https://github.com/mbronstein1/Password-Generator-Challenge-3"
        },
        {
            id: 6,
            title: 'Background Generator',
            type: 'HTML/CSS/JS',
            img: backgroundGenerator,
            liveLink: "https://background-generator-1-git-main-mbronstein1.vercel.app/",
            gitHubLink: "https://github.com/mbronstein1/background-generator-1"
        }
    ];
    return (
        <div className='d-flex justify-content-around flex-wrap'>
            {projectData.map(project => {
                return (
                    <div className='projects' style={{ backgroundImage: `url(${project.img})`}} key={`${project.title}-${project.id}`}>
                        <div className='d-flex justify-content-center text-container'>
                            <a href={project.liveLink} target='_blank' rel="noreferrer"><h4>{project.title}</h4></a>
                            <a href={project.gitHubLink} target='_blank' rel="noreferrer"><i className="fa-brands fa-github fa-2xl"></i></a>
                        </div>
                        <div>
                            <p className='project-type-text'>{project.type}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}