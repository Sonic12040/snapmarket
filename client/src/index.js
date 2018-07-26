import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import searchReducer from "./store/reducers/searchReducer";

// const composeEnhancers = process.env. NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
// const enhancer = composeEnhancers(applyMiddleware(thunk));

const enhancer = applyMiddleware(thunk);

const store = createStore(searchReducer, compose(

    enhancer,

    window.devToolsExtension ? window.devToolsExtension() : f => f

));

const wholeStore = () => {
    console.log("line 27 on index.js", store.getState())
    store.getState()
}

store.subscribe(wholeStore);

//   wholeStore();

const app = (
    <Provider store={store}>
    <App />
    </Provider>
)

// store.dispatch();
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
