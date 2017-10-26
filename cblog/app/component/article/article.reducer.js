/**
 * Created by easterCat on 2017/10/16.
 */
import {createReducer} from 'redux-create-reducer';
import {fromJS} from 'immutable';

import {
    ADD_ONE_USER,
    GET_ALL_ARTICLES,
    GET_ONE_ARTICLE,
    DELETE_ONE_ARTICLE,
    GET_COMMENTS,
    CREATE_ONE_COMMENT,
    DELETE_COMMNENT_BY_ID
} from './article.actions';

const initState = fromJS({
    data: [{
        name: 'doudou',
        age: 32,
        phone: 123456789,
        email: '123456789@163.com',
        key: 1,
    }],
    articles: [],
    articles_count: null,
    article: {},
    comments: {}
});

const handlers = {
    [ADD_ONE_USER]: (article, action) => {
        return article.set('data', article.get('data').push(fromJS(action.payload)));
    },
    [GET_ALL_ARTICLES]: (article, action) => {
        article = article.set('articles_count', fromJS(action.payload.count));
        return article.set('articles', fromJS(action.payload.articles));
    },
    [GET_ONE_ARTICLE]: (article, action) => {
        return article.set('article', fromJS(action.payload));
    },
    [DELETE_ONE_ARTICLE]: (article, action) => {
        let as = article.get('articles');
        let a = action.payload;
        let index = as.findIndex(i => i.get('_id') === a._id);
        if (index === -1) return article;
        return article.set('articles', as.delete(index));
    },
    [GET_COMMENTS]: (article, action) => {
        console.log(action.payload);
        return article.set('comments', fromJS(action.payload));
    },
    [CREATE_ONE_COMMENT]: (article, action) => {
        console.log(action.payload);
        let comments = article.get('comments');
        return article.set('comments', comments.push(fromJS(action.payload)));
    },
    [DELETE_COMMNENT_BY_ID]: (article, action) => {
        let comments = article.get('comments');
        let com = fromJS(action.payload);
        let index = comments.findIndex(i => {
            return i.get('_id') === com.get('_id');
        });
        if (index === -1) return article;
        return article.set('comments', comments.delete(index));
    }
};

export default createReducer(initState, handlers);
