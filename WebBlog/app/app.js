/**
 * Created by easterCat on 2017/10/9.
 */
import './index.html';

import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDom.render(
    <BrowserRouter>
        <Route path="/" component={App}/>
    </BrowserRouter>
    ,
    document.getElementById('root')
);