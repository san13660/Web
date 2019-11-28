/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import './Display.scss';

class Display extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }
   
  render(){
    return (
      <div className='display'>
        {this.props.number} 
      </div>
    )
  }
}

export default Display;
