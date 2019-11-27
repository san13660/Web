import React, { Component } from 'react';
import './Info.scss'

class Info extends Component {
  render() {
    return (
      <div className='info'>
        <h1>
            Portfolio
        </h1>
        <h2>
            Christopher Sandoval
        </h2>
        <h3>
            <u>About me:</u>
        </h3>
        <p>
            I'm 25 years old and persuing a degree in Computer Science. 
            My preferred programming areas are mobile app and videogame development.
            I'm currently working as a freelance web and mobile app developer. 
            The following are some of the proyects I've worked on in the past year.
        </p>
      </div>
    );
  }
}

export default Info;