import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = ( process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null ) || compose;

const rootReducer = combineReducers({
    //reducers
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  //rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

//sagaMiddleware.run( watchContainer );

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

render(app, document.getElementById('root'));
serviceWorker.register();
