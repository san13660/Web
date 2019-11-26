import React, { Component } from 'react';
import './SplashScreen.scss'
//import img from './bg.png'
import BG from './bg.svg'
import Button from '../button/Button';

class SplashScreen extends Component {
  render() {
    return (
      <div id="splash_screen">
          <BG className='bg' />
          <div id="title">
            <h1>
                    Música para todos.
            </h1>
            <h2>
                    Millones de canciones. No necesitas tarjeta de crédito.
            </h2>
            <div className='button'>
              <Button />
            </div>
          </div>
      </div>
    );
  }
}

export default SplashScreen;