import React from 'react';
class Child1 extends React.Component {
  valueToParent(value) {
    this.props.onValue(value);
  }
  render() {
    return (
      <div>
        <h2>子组件</h2>
        <div>
          <button onClick={this.valueToParent.bind(this, 123)}>向父组件传值123</button>
        </div>
      </div>
    );
  }
}
export default Child1;
