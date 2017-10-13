/**
 * Created by easterCat on 2017/10/10.
 */
import React from 'react';
import {Route} from 'react-router-dom';
import Content01 from '../content/content01';
import Content02 from '../content/content02';
import Content03 from '../content/content03';

class Content extends React.Component {
    render() {
        return (
            <div>
                <Route path="/home/Content01" component={Content01}/>
                <Route path="/home/Content02" component={Content02}/>
                <Route path="/home/Content03" component={Content03}/>
            </div>
        )
    }
}
export default Content;