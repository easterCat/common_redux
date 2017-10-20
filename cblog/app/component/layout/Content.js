/**
 * Created by easterCat on 2017/10/10.
 */
import React from 'react';
import {Route} from 'react-router-dom';
import Content01 from '../content/content01';
import CreateArticle from '../content/createArticle';
import Articles from '../content/Articles';
import Article from '../content/Article';

class Content extends React.Component {
    render() {
        return (
            <div>
                <Route path="/home/Content01" component={Content01}/>
                <Route path="/home/createArticle" component={CreateArticle}/>
                <Route path="/home/articles" component={Articles}/>
                <Route path="/home/article/:id" component={Article}/>
            </div>
        )
    }
}
export default Content;