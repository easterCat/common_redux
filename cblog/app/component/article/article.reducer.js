/**
 * Created by easterCat on 2017/10/16.
 */
import {createReducer} from 'redux-create-reducer';
import {fromJS} from 'immutable';

import {
    ADD_ONE_USER,
    GET_ALL_ARTICLES,
    GET_ONE_ARTICLE,
    DELETE_ONE_ARTICLE
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
    article: {}
});

const handlers = {
    [ADD_ONE_USER]: (article, action) => {
        return article.set('data', article.get('data').push(fromJS(action.payload)));
    },
    [GET_ALL_ARTICLES]: (article, action) => {
        return article.set('articles', fromJS(action.payload));
    },
    [GET_ONE_ARTICLE]: (article, action) => {
        return article.set('article', fromJS(action.payload));
    },
    [DELETE_ONE_ARTICLE]: (article, action) => {
        console.log(action.payload);
        return article;
    }
};

export default createReducer(initState, handlers);
