import React from 'react';
import './assets/main.css';
import Card from './components/Card';

function App() {
  return (
    <div className='bg-gray-300 container max-w-full mx-auto h-screen flex items-center justify-items-center'>
      <div className='m-auto'>
        <Card />
      </div>
    </div>
  );
}

export default App;
