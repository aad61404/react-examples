import React from 'react';
import Child1 from './Child1.js';
class Parent extends React.Component {
  state = {
    getChildValue: '',
  };
  getChildValue(value) {
    this.setState({
      getChildValue: value,
    });
  }
  render() {
    return (
      <div>
        <h1>父组件</h1>
        <div>子组件过来的值为：{this.state.getChildValue}</div>
        <Child1 onValue={this.getChildValue.bind(this)} />
      </div>
    );
  }
}
export default Parent;
