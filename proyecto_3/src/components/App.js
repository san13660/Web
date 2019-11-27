import React, { Component } from 'react';
import './App.scss'
import Slide from './slide/Slide';
import Info from './info/Info';
import bof from '../img/bof.png'
import arnpg from '../img/arnpg3.png'
import tcom from '../img/tcom.jpg'
import spotify from '../img/spotify.png'
import bobomb from '../img/bobomb.png'
import lo from '../img/lo.png'
import Contact from './contact/Contact';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <Info />
        <div className='slides'>
          <Slide type={'Video Game'} title={'The Bork of Freedom'} img={bof} description={'This prototype game is a coop Third-Person Shooter with some puzzle elements.'} techs={['Unity 3D', 'Blender', 'Socket Communication', 'C#']} link={'https://san13660.itch.io/the-bork-of-freedom'}/>
          <Slide type={'Mobile App'} title={'ARNPG App'} img={arnpg} description={'IOs and Android App developed for a non-profit organization using Ionic and Firebase.'} techs={['Ionic', 'Firebase', 'Google Maps API', 'Open Layers API', 'Sass', 'Typescript']} link={'https://arnpg-ad4d0.web.app/'}/>
          <Slide type={'Video Game'} title={'This Cat of Mine'} img={tcom} description={'This prototype game is a 2D platformer with fun characters and a quirky story. Made during the Global Game Jam 2019.'} techs={['Unity 2D', 'C#']} link={'https://globalgamejam.org/2019/games/cat-mine'}/>
          <Slide type={'Web'} title={'Spotify Homepage Clone'} img={spotify} description={'A clone of the Spotify\'s homepage for Guatemala.'} techs={['React', 'Babel', 'Webpack', 'Sass', 'Javascript']} link={'http://msdeus.site/13660/proyecto_1/index.html'}/>
          <Slide type={'Video Game'} title={'Last Opportunity'} img={lo} description={'This prototype game is top-down survival game starring NASA\'s rover Opportunity.'} techs={['Unity 2D', 'C#']}/>
          <Slide type={'Web'} title={'CSS Art'} img={bobomb} description={'Mario\'s Bob-omb recreated using only css.'} techs={['CSS', 'HTML']} link={'http://msdeus.site/13660/lab_4/lab_4.html'}/>
        </div>
        <Contact />
      </div>
    );
  }
}

export default App;
