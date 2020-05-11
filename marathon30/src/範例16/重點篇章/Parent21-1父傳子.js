import React from 'react';
import Child1 from './Child1.js';
class Parent extends React.Component {
  render() {
    return (
      <div>
        <h1>父组件</h1>
        <Child1 content={'我是父级过来的内容'} />
      </div>
    );
  }
}
export default Parent;
