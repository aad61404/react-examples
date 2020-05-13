import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggle : true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState( prevState => ({
      isToggle: !prevState.isToggle
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggle ? "ON" : "OFF"}
      </button>
    )
  }
}

export default App;
