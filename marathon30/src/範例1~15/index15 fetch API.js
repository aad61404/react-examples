import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <App name="我是進度條">在index.js中轉換百分比</App>
    </div>,
    document.getElementById('root')
);
serviceWorker.unregister();
