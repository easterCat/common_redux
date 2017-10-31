/**
 * Created by easterCat on 2017/10/10.
 */
import React from 'react';
import {Route} from 'react-router-dom';
import Audio from '../audio/Audio';
import CreateArticle from '../article/createArticle';
import Articles from '../article/Articles';
import Article from '../article/Article';

class Content extends React.Component {
    render() {
        return (
            <div>
                <Route path="/home/audio" component={Audio}/>
                <Route path="/home/createArticle" component={CreateArticle}/>
                <Route path="/home/articles" component={Articles}/>
                <Route path="/home/article/:id" component={Article}/>
            </div>
        )
    }
}
export default Content;