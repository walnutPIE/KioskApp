import React, { Component } from 'react';
import MyName from './MyName.js';

class withText extends Component {
  state = {
    name: ' ',
   
  };
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  render() {
    return (
      <div> </div>
    );
  }
}

export default withText;

