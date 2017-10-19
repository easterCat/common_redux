/**
 * Created by easterCat on 2017/10/16.
 */
import axios from 'axios';
import $ from 'jquery';
import config from '../../../app.config';

export const ADD_ONE_USER = 'ADD_ONE_USER';
export const ADD_ONE_ARTICLE = 'ADD_ONE_ARTICLE';

export function addOneUser(value) {
    return dispatch => {
        return dispatch({
            type: 'ADD_ONE_USER',
            payload: value
        })
    }
}

export function addOneArticle(data) {
    console.log(data);
    return dispatch => {
        return axios.post(`${config.server}/home/content02`, data)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })
    }
}