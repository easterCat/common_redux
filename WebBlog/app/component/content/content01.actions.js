/**
 * Created by easterCat on 2017/10/16.
 */
import {server} from '../../../app.config';
import {get, post, remove, update} from '../../util/netRequest';

export const ADD_ONE_USER = 'ADD_ONE_USER';
export const ADD_ONE_ARTICLE = 'ADD_ONE_ARTICLE';
export const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES';

export function addOneUser(value) {
    return dispatch => {
        return dispatch({
            type: 'ADD_ONE_USER',
            payload: value
        })
    }
}

export function addOneArticle(data) {
    return post(`${server}/home/content02`, data, ADD_ONE_ARTICLE);
}

export function getAllArticles() {
    return get(`${server}/home/content03`, GET_ALL_ARTICLES);
}

