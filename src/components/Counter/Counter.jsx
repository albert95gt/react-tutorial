import React, { Component } from 'react';
import { Controls } from './Controls';

class Counter extends Component {
  static defaultProps = {
    initialValue: 100,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  handleDecrement = () => {
    this.setState(({ value }) => {
      return {
        value: value - 1,
      };
    });
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        {/* <div>
                    <button type='button' onClick={this.handleIncrement}>Увеличить на 1</button>
                    <button type='button' onClick={this.handleDecrement}>Уменшить на 1</button>
                </div> */}
      </div>
    );
  }
}

export default Counter;
