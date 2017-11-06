/**
 * Created by easterCat on 2017/10/25.
 */
import {createReducer} from 'redux-create-reducer';
import {fromJS} from 'immutable';

import {
    REGISTER,
    LOGIN,
    LOGGED,
    UPDATE_USER
} from './user.actions';

const initState = fromJS({
    user: null,
    logged: null
});

const handlers = {
    [REGISTER]: (session, action) => {
        return session;
    },
    [LOGIN]: (session, action) => {
        console.log(action.payload);
        return session.set('user', fromJS(action.payload));
    },
    [LOGGED]: (session, action) => {
        session = session.set('logged', action.payload.logged);
        return session.set('user', fromJS(action.payload.user));
    },
    [UPDATE_USER]: (session, action) => {
        return session.set('user', fromJS(action.payload));
    }
};

export default createReducer(initState, handlers);