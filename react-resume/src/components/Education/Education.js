import React from 'react';
import '../styles/style.css';

const Education = () => {
  return (
    <>
      <div className='profile'>
        <div className='profile-icon'>
          <i className='fa fa-graduation-cap'></i>
        </div>
        <h2>Education</h2>
      </div>

      <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
        <h3>SCSVMV University</h3>
        <h4>Btech- Computer Science Engineering (2017 - 2021)</h4>
      </div>
    </>
  );
};

export default Education;
