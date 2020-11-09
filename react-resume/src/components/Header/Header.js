import React from 'react';
import '../styles/style.css';

const Header = () => {
  return (
    <div className='resume-header'>
      {/* <!-- 1. Profile Image --> */}
      <div className='profile-image'>
        <img
          src='https://media-exp1.licdn.com/dms/image/C5635AQHkJbKQlhinUg/profile-framedphoto-shrink_200_200/0?e=1605006000&v=beta&t=FEgBperw6e_8sjeIcOLUf3Jo69K7IQjbc6TZf5xb0Jk'
          alt='profile-image'
          id='profile-image'
        />
      </div>
      {/* <!-- 2. Profile Name --> */}
      <div className='profile-name-div'>
        <div className='profile-div'>
          <h1>Vishnu Darshan</h1>
        </div>
      </div>
      <div className='profile-banner'></div>
    </div>
  );
};

export default Header;
