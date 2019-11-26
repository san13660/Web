import React, { Component } from 'react';
import TopBar from './top_bar/TopBar'
import SplashScreen from './splash_screen/SplashScreen'
import Footer from './footer/Footer';
import './App.scss'

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <SplashScreen />
        <Footer />
      </div>
    );
  }
}

export default App;
