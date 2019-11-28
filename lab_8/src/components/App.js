import React from 'react';
import './App.scss';
import Calculator from './calculator/Calculator';
import pattern from '../img/pattern.png'

function App() {

  const style = {
    backgroundImage: `url(${  pattern  })`
  }

  return (
    <div className='bg' style={style}>
      <div className='main'>
        <Calculator />
      </div>
    </div>
  )
}

export default App;
