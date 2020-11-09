import React from 'react';
import Publication from '../Publications/Publication';
import Education from '../Education/Education';
import '../styles/style.css';
import Projects from '../Projects/Projects';

const ResumeRight = () => {
  return (
    <>
      <div className='resume-right'>
        <Publication />
        <Education />
        <Projects />
      </div>
    </>
  );
};

export default ResumeRight;
