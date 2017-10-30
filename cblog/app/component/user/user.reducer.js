/**
 * Created by easterCat on 2017/10/25.
 */
import {createReducer} from 'redux-create-reducer';
import {fromJS} from 'immutable';

import {
    REGISTER,
    LOGIN,
    LOGGED
} from './user.actions';

const initState = fromJS({
    user: null,
    logged: null
});

const handlers = {
    [REGISTER]: (user, action) => {
        return user;
    },
    [LOGIN]: (user, action) => {
        console.log(action.payload);
        return user.set('user', fromJS(action.payload));
    },
    [LOGGED]: (user, action) => {
        user = user.set('logged', action.payload.logged);
        return user.set('user', fromJS(action.payload.user));
    }
};

export default createReducer(initState, handlers);