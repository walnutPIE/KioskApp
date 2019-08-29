import React, { Component, Fragment } from 'react';
import MyName from './MyName.js';

class Counter extends Component {
  state = {
    value: 1
  };

  static defaultProps = {
    name1: 'Nothing'
  };
  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }
  handleIncrease = () => {
    this.setState({
      value: this.state.value + 1
    });
  };
  handleDecrease = () => {
    this.setState({
      value: this.state.value - 1
    });
  };
  render() {
    return (
      <div>
        {this.state.name1}
        <p />
        <div>Quantity : {this.state.value}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        <p />

        <button>Payment</button>
        <button>Cancel</button>
      </div>
    );
  }
}

export default Counter;
