/**
 * Created by easterCat on 2017/10/16.
 */
import {server} from '../../../app.config';
import {get, post, remove, update} from '../../util/netRequest';

export const ADD_ONE_USER = 'ADD_ONE_USER';
export const CREATE_ONE_ARTICLE = 'CREATE_ONE_ARTICLE';
export const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES';
export const GET_ONE_ARTICLE = 'GET_ONE_ARTICLE';

export function addOneUser(value) {
    return dispatch => {
        return dispatch({
            type: 'ADD_ONE_USER',
            payload: value
        })
    }
}

export function createOneArticle(data) {
    return post(`${server}/home/createArticle`, data, CREATE_ONE_ARTICLE);
}

export function getAllArticles() {
    return get(`${server}/home/articles`, GET_ALL_ARTICLES);
}

export function getOneArticle(id) {
    return get(`${server}/home/article/${id}`, GET_ONE_ARTICLE);
}

