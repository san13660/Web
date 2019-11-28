/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import './Calculator.scss'
import Key from '../key/Key';
import Display from '../display/Display';

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentValue: 0,
      currentAction: '',
      storedValue: 0,
      decimalActivated: false
    }
  }

  render(){

    const operate = () =>{
      let {currentAction, currentValue, storedValue} = this.state 
  
      if(currentAction === '+'){
        currentValue += storedValue
      }
      if(currentAction === '-'){
        currentValue = storedValue - currentValue
      }
      if(currentAction === '*'){
        currentValue *= storedValue
      }
      if(currentAction === '/'){
        currentValue = storedValue / currentValue
      }
  
      storedValue = 0
      currentAction = ''
  
      return {
        currentAction,
        currentValue,
        storedValue
      }
    }

    const actionHandler = (value) => {
      let {currentAction, currentValue, storedValue, decimalActivated} = this.state 
  
      if(value === '+' || value === '-' || value === '*' || value === '/' || value === '%'){
        if(currentAction === ''){
          currentAction = value
          storedValue = currentValue
          currentValue = 0
        }else{
          const results = operate()
          currentAction = value
          storedValue = results.currentValue
          currentValue = 0
        }
        decimalActivated = false
      }else if(value === '.'){
        if(!currentValue.toString().includes('.')){
          decimalActivated = true
        }
      }else if(value === '='){
        const results = operate()
        currentAction = results.currentAction
        storedValue = results.storedValue
        currentValue = results.currentValue
        decimalActivated = false
      }else if(value === 'CE'){
        currentAction = ''
        storedValue = 0
        currentValue = 0
        decimalActivated = false
      }else if(value === 'C'){
        if(currentValue.toString().length > 1){
          currentValue = parseFloat(currentValue.toString().substring(0, currentValue.toString().length-1))
        }else{
          currentValue = 0
        }
        if(!currentValue.toString().includes('.')){
          decimalActivated = false
        }
      }else if(value === '!'){
        if(currentValue !== 0){
          if(currentValue.toString().includes('-')){
            currentValue = parseFloat(currentValue.toString().substring(1, currentValue.toString().length))
          }else{
            currentValue = parseFloat(`-${  currentValue.toString()}`)
          }
        }
      }else if(decimalActivated){
        currentValue = parseFloat(`${currentValue.toString()  }.${  value}`)
        decimalActivated = false
      }else{
        currentValue = parseFloat(currentValue.toString() + value)
      }

      currentValue = parseFloat(currentValue.toString().substring(0, 9));
  
      this.setState({
        currentValue,
        currentAction,
        storedValue,
        decimalActivated
      })

      console.log(currentAction)
    }
    
    return (
      <div>
        <div className='row'>
          <Display number={this.state.currentValue} />
        </div>
        <div className='row'>
          <Key className='key' keyWidth={1} value='C' actionHandler={actionHandler}/>
          <Key className='key' keyWidth={1} value='CE' actionHandler={actionHandler}/>
          <Key className='key' keyWidth={1} value='!' actionHandler={actionHandler}/>
          <Key className='key' keyWidth={1} value='/' actionHandler={actionHandler}/>
        </div>
        <div className='row'>
          <Key className='key' keyWidth={1} value='7' actionHandler={actionHandler}/>
          <Key className='key' keyWidth={1} value='8' actionHandler={actionHandler}/>
          <Key className='key' keyWidth={1} value='9' actionHandler={actionHandler}/>
          <Key className='key' keyWidth={1} value='*' actionHandler={actionHandler}/>
        </div>
        <div className='row'>
          <Key className='key' keyWidth={1} value='4' actionHandler={actionHandler}/>
          <Key className='key' keyWidth={1} value='5' actionHandler={actionHandler}/>
          <Key className='key' keyWidth={1} value='6' actionHandler={actionHandler}/>
          <Key className='key' keyWidth={1} value='-' actionHandler={actionHandler}/>
        </div>
        <div className='row'>
          <Key className='key' keyWidth={1} value='1' actionHandler={actionHandler}/>
          <Key className='key' keyWidth={1} value='2' actionHandler={actionHandler}/>
          <Key className='key' keyWidth={1} value='3' actionHandler={actionHandler}/>
          <Key className='key' keyWidth={1} value='+' actionHandler={actionHandler}/>
        </div>
        <div className='row'>
          <Key className='key' keyWidth={1} value='%' actionHandler={actionHandler}/>
          <Key className='key' keyWidth={1} value='0' actionHandler={actionHandler}/>
          <Key className='key' keyWidth={1} value='.' actionHandler={actionHandler}/>
          <Key className='key' keyWidth={1} value='=' actionHandler={actionHandler}/>
        </div>
        
      </div>
    )
  }
}

export default Calculator;
