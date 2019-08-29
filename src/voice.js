import React, { Component } from 'react';

class voice extends Component {
  static defaultProps = {
    name1: 'Seoul',
    name2: 'South Korea'
  };
  render() {
    return (
      <div>
        You've ordered{' '}
        <b>
          <h2>{this.props.name1}.</h2>
        </b>
      </div>
    );
  }
}

export default voice;
