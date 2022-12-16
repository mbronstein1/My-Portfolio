import React from 'react';
import Project from '../../components/Projects/Projects';

export default function Portfolio() {
  return (
    <div className='custom-portfolio-container card'>
      <div className='px-4 py-3 mx-auto'>
        <h2 className='contact-header p-2'>Portfolio</h2>
        <hr style={{ borderTop: 'solid 2px rgb(255, 189, 131)' }} />
        <Project />
      </div>
    </div>
  );
}
