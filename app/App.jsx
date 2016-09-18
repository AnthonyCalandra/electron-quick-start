require('../less/main.less');

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickCount: 0
    };
  }

  render() {
    return (
      <div>
        <a onClick={this.handleClick.bind(this)}>Click me! [{this.state.clickCount}]</a>
      </div>
    );
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      clickCount: this.state.clickCount + 1,
    });
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
