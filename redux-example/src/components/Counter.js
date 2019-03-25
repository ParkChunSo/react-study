import React, { Component } from 'react';
import Value from './Value';
import Control from './Control';

export default class Counter extends Component {
  render() {
    return (
      <div>
        <Value number ={1}/>
        <Control/>
      </div>
    )
  }
}
