import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import reducer from "./store/reducers/reducer";


const enhancer = applyMiddleware(thunk);

const store = createStore(reducer, compose(
    enhancer,
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

const wholeStore = () => {
    store.getState()
}

store.subscribe(wholeStore);


const app = (
    <Provider store={store}>
    <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
