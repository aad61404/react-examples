import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

var element = React.createElement('h1', {className: 'greeting'}, 'Hello world!');
var array = [1,2,3,4,5,6,7,8];
for (let index = 0; index < array.length; index++) {
  const param = array[index];
  
}
var a = 123;
var b = 234;
var c = 567;

ReactDOM.render(element, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
