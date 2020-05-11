import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Baby from './Baby'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Baby dad="Chang"/>
    </div>,
    document.getElementById('root')
);

serviceWorker.unregister();