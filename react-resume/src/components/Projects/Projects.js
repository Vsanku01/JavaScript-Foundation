import React from 'react';
import '../styles/style.css';

const projectData = [
  {
    id: 1,
    name: '1. Digital Library Mobile App',
    desc:
      'A Digital Library Application developed using Flutter and firebase cloud firestore where students can log in and find the needful e-books and handwritten notes of Faculty.',
  },
  {
    id: 2,
    name: '2. House Prices Predictor',
    desc:
      'Built a test-driven Machine Learning model to predict House Prices.Performed Data Wrangling operations and created a model with good accuracy. Later the model was optimized  by hyperparameter tuning and Xg boost.',
  },
  {
    id: 3,
    name: '3. CTS Club - Android App',
    desc:
      'Android App for maganing and posting CTS Club events of SCSVMV university',
  },
  {
    id: 4,
    name: '4. Kanchi Kamakoti App',
    desc: `An IOS App which gets the user's current location and suggests various temple hotspots near to his/her location in addition users can find the specialty of hotspots and can go through the story and can navigate to particular hotspots. Used Google Maps API, Distance Matrix API.`,
  },
];

const Projects = () => {
  return (
    <div>
      <div className='profile'>
        <div className='profile-icon'>
          <i className='fa fa-briefcase'></i>
        </div>
        <h2>Projects</h2>
      </div>

      <div className='programming-projects'>
        {projectData.map((project) => {
          const { id, name, desc } = project;
          return (
            <div className='profile-text' key={id}>
              <h4 style={{ fontWeight: 'bold', fontSize: '20px' }}>
                {name.toLocaleUpperCase()}
              </h4>
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
