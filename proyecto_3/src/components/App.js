import React, { Component } from 'react';
import './App.scss'
import Slide from './slide/Slide';
import Info from './info/Info';
import bof from '../img/bof.png'
import arnpg from '../img/arnpg.png'

class App extends Component {
  render() {
    return (
      <div className='main'>
        <Info />
        <div className='slides'>
          <Slide type={'Video Game'} title={'The Bork of Freedom'} img={bof} description={'This game is a coop Third-Person Shooter with some puzzle elements.'} techs={['Unity 3D', 'Blender', 'C#', 'Socket Communication']}/>
          <Slide type={'App'} title={'ARNPG App'} img={arnpg} description={'This is an app designed to '} techs={['Ionic', 'Firebase', 'Open Layers (Map API)', 'Typescript']}/>
          <Slide type={'App'} title={'ARNPG App'} img={bof} description={'This is an app designed to '} techs={['Ionic', 'Firebase', 'Open Layers (Map API)', 'Typescript']}/>
        </div>
      </div>
    );
  }
}

export default App;
