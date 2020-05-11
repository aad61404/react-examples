import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Progress from './Progress'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Progress/>
    </div>,
    document.getElementById('root')
);

serviceWorker.unregister();
