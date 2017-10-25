/**
 * Created by easterCat on 2017/10/25.
 */
import {server} from '../../../app.config';
import {get, post, remove, update} from '../../util/netRequest';

export const REGISTER = 'REGISTER';


export function register(data) {
    return post(`${server}/user/register`, data, REGISTER);
}