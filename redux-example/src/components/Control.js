import React, { Component } from 'react'
import PropTypes from 'prop-types';

// const propTypes ={
//     onPlus: PropTypes.func,
//     onSubtract: PropTypes.func,
//     onRandomizeColor: PropTypes.func
// };

function createWarning(funcName){
    return () => console.warn(funcName + "is not defined")
}

// const defaultProps = {
//     onPlus: createWarning('onPlus'),
//     onSubtract: createWarning('onSubtract'),
//     onRandomizeColor: createWarning('onRandomizeColor')
// }

export default class Control extends Component {
    
  render() {
    return (
      <div>
        <button onClick={this.props.onPlus}>+</button>
        <button onClick={this.props.onSubtract}>-</button>
        <button onClick={this.props.onRandomizeColor}>Random Color</button>
      </div>
    )
  }
}
Control.propTypes ={
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func
};
Control.defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract'),
    onRandomizeColor: createWarning('onRandomizeColor')
};