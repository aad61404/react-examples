import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Layout from "./Layout";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App>在index.js中設定文字</App>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
