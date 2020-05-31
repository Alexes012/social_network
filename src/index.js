import React from "react";
import store from './redux/redux-store'
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"


let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </BrowserRouter>,
        document.getElementById('root'));
};


reRenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    reRenderEntireTree(state);
});

serviceWorker.unregister();

