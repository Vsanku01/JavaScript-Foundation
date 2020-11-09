import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Resume from './components/Resume/Resume';
import './components/styles/style.css';

function App() {
  return (
    <div className='resume'>
      <Header />
      <Profile />
      <Resume />
    </div>
  );
}

export default App;
