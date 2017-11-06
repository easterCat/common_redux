/**
 * Created by easterCat on 2017/10/25.
 */
import {server} from '../../../app.config';
import {get, post, remove, update} from '../../util/netRequest';

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGGED = 'LOGGED';
export const LOGOUT = 'LOGOUT';
export const UPDATE_USER = 'UPDATE_USER';


export function register(data) {
    return post(`${server}/user/register`, data, REGISTER);
}
export function login(data) {
    return post(`${server}/user/login`, data, LOGIN);
}

export function logged() {
    return get(`${server}/user/logged`, LOGGED);
}

export function logout() {
    return get(`${server}/user/logout`, LOGOUT)
}

export function updateUser(data) {
    return post(`${server}/user/changeuser`, data, UPDATE_USER);
}