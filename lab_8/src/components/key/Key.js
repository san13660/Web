/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import './Key.scss'

class Key extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {

    const width = `${this.props.keyWidth * (50 + ((this.props.keyWidth - 1) * 4))  }px`

    return (
      <div type='button' style={{width}} className="key" onClick={this.props.actionHandler.bind(null, this.props.value)} role='button' tabIndex={0}>
        {this.props.value}
      </div>
    );
  }
}

export default Key;
