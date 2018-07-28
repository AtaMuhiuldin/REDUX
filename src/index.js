import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



import rootReducer from './reducers';
import Provider from 'react-redux';
import { createStore } from 'redux';
import {addCharactorById} from './actions';

const store = createStore(rootReducer);
console.log( "Store", store.getState());

store.subscribe(() => console.log('store', store.getState()));



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
