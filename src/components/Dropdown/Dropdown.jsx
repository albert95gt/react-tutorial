import React, { Component } from 'react';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  // show = () => {
  //     this.setState({visible: true});
  // }

  // hide = () => {
  //     this.setState({visible: false});
  // }

  render() {
    return (
      <div>
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </button>

        {this.state.visible && <div>Выпадающее меню</div>}
      </div>
    );
  }
}

export default Dropdown;
