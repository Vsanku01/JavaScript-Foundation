import React from 'react';
import '../styles/style.css';

const WorkExperience = () => {
  return (
    <>
      <div className='profile'>
        <div className='profile-icon'>
          <i className='fa fa-briefcase'></i>
        </div>
        <h2>Work Experience</h2>
      </div>

      <h3 style={{ textAlign: 'left', paddingLeft: '15px' }}>
        Software Developer Intern - PACT Software Services -
        <span style={{ fontWeight: 'bold' }}>( Dec 2019 - Mar 2020 ) </span>
      </h3>

      <div className='profile-text'>
        <p>
          Design and develop a Mobile Application that communicates with company
          ERP and generates production costs, quality standards, and completion
          dates.
        </p>
      </div>

      <h3 style={{ textAlign: 'left', paddingLeft: '15px' }}>
        SCSVMV Cse Lab, Flutter Developer -
        <span style={{ fontWeight: 'bold' }}>( Oct 2019 - Nov 2019 ) </span>
      </h3>

      <div className='profile-text'>
        <p>Designed and developed online digital library for CSE Department</p>
      </div>
    </>
  );
};

export default WorkExperience;
