/**
 * Created by easterCat on 2017/10/9.
 */
import './index.html';

import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store/store';

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);