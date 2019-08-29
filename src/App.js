import React, { Component, Fragment } from 'react';
import './App.css';
import MyName from './MyName.js';
import Counter from './Counter.js';
import { BrowserRouter } from 'react-router-dom';
import './base.css';
import withText from './withText.js';
import voice from './voice.js';

class App extends Component {
  state = {
    yourChoice: 0,
    text: ''
  };
  constructor(props) {
    super(props);
    console.log('Contructor');
  }
  handleChoiceText = () => {
    this.setState({
      yourChoice: this.state.yourChoice + 1
    });
  };
  handleChoiceVoice = () => {
    this.setState({
      yourChoice: this.state.yourChoice + 2
    });
  };
  handleCreate = data => {
    console.log(data);
  };
  render() {
    const name = 'J';
    const value = 2;
    const style1 = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: 12 + value + 'px'
    };
    return (
      <Fragment>
        <div style={style1}>
          <h1>Easy Kiosk ver1.0</h1>
        </div>
        <div>
          <button >
            <img src="abc-icon-13.jpg.png" onClick={this.handleChoiceText} />
          </button>
          <button >
            <img src="voice-icon-1.png" onClick={this.handleChoiceVoice} />
          </button>
         
        </div>
        <div>
          {(() => {
            if (this.state.yourChoice === 1)
              return (
                <div>
                  
                  <MyName onCreate={this.handleCreate} />
                </div>
              );
            if (this.state.yourChoice === 2)
              return (
                <div>
                  <h3>
                    <voice name1="BigMac" />
                  </h3>
                </div>
              );
          })()}
        </div>
      </Fragment>
    );
  }
}

export default App;
