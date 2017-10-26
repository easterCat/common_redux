/**
 * Created by easterCat on 2017/10/25.
 */
import {server} from '../../../app.config';
import {get, post, remove, update} from '../../util/netRequest';

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGGOD = 'LOGGOD';


export function register(data) {
    return post(`${server}/user/register`, data, REGISTER);
}
export function login(data) {
    return post(`${server}/user/login`, data, LOGIN);
}

export function loggod() {
    return get(`${server}/user/loggod`, LOGGOD);
}