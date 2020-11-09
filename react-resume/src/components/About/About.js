import React from 'react';
import '../styles/style.css';

const About = () => {
  return (
    <>
      <div className='profile'>
        <div className='profile-icon'>
          <i className='fa fa-user'></i>
        </div>
        <h2>Profile</h2>
      </div>

      <div className='profile-text'>
        <p>
          Extremely motivated to constantly develop my skills and grow
          professionally. I am confident in my ability to come up with
          interesting ideas.
        </p>
      </div>
    </>
  );
};

export default About;
