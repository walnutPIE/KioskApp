import React, { Component, Fragment } from 'react';
import withText from './withText';
import Counter from './Counter.js';

class MyName extends Component {
  state = {
    name: ' ',
    quantity: 1,
    flag: 0
  };
  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleSubmit = e => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: ''
    });
  };
  handleQuantity = () => {
    this.setState({
      flag: this.state.flag + 1
    });
  };
  render() {
    return (
      <Fragment>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder=" "
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit" onClick={this.handleQuantity}>
              Order
            </button>
          </form>
        </div>
        {(() => {
          if (this.state.flag === 1)
            return (
              <div>
                <Counter name1={this.state.name} />
              </div>
            );
        })()}
      </Fragment>
    );
  }
}
export default MyName;
