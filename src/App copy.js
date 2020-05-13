import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handler = this.handler.bind(this)
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('nextProps', nextProps);
  //   console.log('hi')
  // }
  componentDidMount() {
    console.log('hi')
  }

  handler() {
    this.setState({
      someVar: 'some value'
    })
  }

  render() {
    return <Child handler = {this.handler} />
  }
}

class Child extends React.Component {
  render() {
    return <button onClick = {this.props.handler}/ >
  }
}

export default App;
