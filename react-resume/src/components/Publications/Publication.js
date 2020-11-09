import React from 'react';
import '../styles/style.css';

const Publication = () => {
  return (
    <>
      <div className='profile'>
        <div className='profile-icon'>
          <i className='fa fa-briefcase'></i>
        </div>
        <h2>Publications</h2>
      </div>

      <h4>
        Automated Diagnosis and Cataloguing of Foliar Diseases in Apple Trees
        using Ensemble of Deep Neural Networks
      </h4>

      <div className='profile-text'>
        <p>
          Prior detection and identification of diseases in trees help to
          eradicate the misuse of chemical fertilizers and improved production.
          This paper proposes the usage of Deep Ensembled Neural Networks and
          automation of foliar disease identification in Apple trees by a single
          picture of the Apple tree leaves.
        </p>
      </div>
    </>
  );
};

export default Publication;
