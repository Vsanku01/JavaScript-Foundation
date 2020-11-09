import React from 'react';
import '../styles/style.css';

const pgData = ['HTML', 'CSS', 'Javascript', 'SQL'];
const pgData2 = ['Python', 'Bootstrap', 'NodeJS', 'Flutter'];

const Skills = () => {
  return (
    <>
      <div className='profile'>
        <div className='profile-icon'>
          <i className='fa fa-flask' aria-hidden='true'></i>
        </div>
        <h2>Skills</h2>
      </div>

      <h2>Technical Skills</h2>

      <div className='skills-info'>
        <section id='skills'>
          <div className='myskills'>
            <div className='skillitem'>
              <div className='programming'>
                <ul>
                  {pgData.map((data) => {
                    return (
                      <>
                        <h3>{data}</h3>
                        <span className='bar'>
                          <span className={data.toLocaleLowerCase()}></span>
                        </span>
                      </>
                    );
                  })}
                </ul>
              </div>
              <div className='programming'>
                <ul>
                  {pgData2.map((data) => {
                    return (
                      <>
                        <h3>{data}</h3>
                        <span className='bar'>
                          <span className={data.toLocaleLowerCase()}></span>
                        </span>
                      </>
                    );
                  })}
                  {/* <h3>Python</h3>
                  <span className='bar'>
                    <span className='java'></span>
                  </span>
                  <h3>Bootstrap</h3>
                  <span className='bar'>
                    <span className='bootstrap'></span>
                  </span>
                  <h3>NodeJS</h3>
                  <span className='bar'>
                    <span className='nodejs'></span>
                  </span>
                  <h3>Flutter</h3>
                  <span className='bar'>
                    <span className='nodejs'></span>
                  </span> */}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
