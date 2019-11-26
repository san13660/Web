import React, { Component } from 'react';
import Menu from '../menu/Menu'
import './TopBar.scss'
import logo from './logo2.png'

class TopBar extends Component {
  render() {
    return (
      <div id='top_bar'>
        <div id='top_bar_span'>
          <img src={logo}></img>
          <div id='menu'>
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;