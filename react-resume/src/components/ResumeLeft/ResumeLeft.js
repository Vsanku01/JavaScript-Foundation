import React from 'react';
import About from '../About/About';
import Skills from '../Skills/Skills';
import WorkExperience from '../WorkExperience/WorkExperience';
import '../styles/style.css';

const ResumeLeft = () => {
  return (
    <>
      <div className='resume-left'>
        <About />
        <Skills />
        <WorkExperience />
      </div>
    </>
  );
};

export default ResumeLeft;
