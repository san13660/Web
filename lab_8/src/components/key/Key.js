import React, { Component } from 'react';
import './Key.scss'

class Key extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {

    const width = `${this.props.keyWidth * (100 + ((this.props.keyWidth - 1) * 4))  }px`
    const {backgroundColor} = this.props

    return (
      <div type='button' style={{width, backgroundColor}} className="key" onClick={this.props.actionHandler.bind(null, this.props.value)} role='button' tabIndex={0}>
        {this.props.value}
      </div>
    );
  }
}

export default Key;
