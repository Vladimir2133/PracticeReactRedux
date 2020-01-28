
import * as serviceWorker from './serviceWorker';
import {store} from "./redux/reduxStore"
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter> , document.getElementById('root'));
}


rerenderEntireTree(store.getState());


serviceWorker.unregister();