import React from 'react';
import './ProjectDesc.css';

const ProjectDesc = ({ description }) => {
  return (
    <div className='project-desc-container'>
      <p className='project-desc'>{description}</p>
    </div>
  );
};

export default ProjectDesc;
