import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const multiButton = () => {
  var output = [];
  for (let i = 0; i < 4; i++) {
    output.push(<button>我是第{i}個按件</button>);
  }
  return output;
};
const getValue = (event) => {
  console.log('event.target', event.target);
  console.log(event.target.value);
};
function App1(props) {
  return (
    <div>
      <button>大家好</button>
      <button>{props.name}</button>
    </div>
  );
}
function App2(props) {
  return (
    <button onClick={props.handleClick}>{props.name}</button>
  )
}

const printMessage = () => {
  document.getElementById('show-area').innerHTML = "我被按到了"
}

ReactDOM.render(
  <div>
    {multiButton()}
    <br />
    <button value onClick={getValue}>
      按下以取得數值
    </button>
    <br />
    <App1 name="我的名字1" />,
    <App2 name="我的名字2" handleClick={printMessage}/>
    <div id="show-area"></div>
  </div>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
