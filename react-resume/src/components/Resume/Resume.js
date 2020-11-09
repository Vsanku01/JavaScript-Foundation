import React from 'react';
import ResumeLeft from '../ResumeLeft/ResumeLeft';
import ResumeRight from '../ResumeRight/ResumeRight';
import '../styles/style.css';

const Resume = () => {
  return (
    <div className='resume-split'>
      <ResumeLeft />
      <hr />
      <ResumeRight />
    </div>
  );
};

export default Resume;
