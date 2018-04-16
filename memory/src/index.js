import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import {Bonjour} from './Bonjour';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Bonjour nom="Thomas" nbrMess={10} />, document.getElementById('root'));
registerServiceWorker();
