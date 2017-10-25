/**
 * Created by easterCat on 2017/10/25.
 */
import {createReducer} from 'redux-create-reducer';
import {fromJS} from 'immutable';

import {
    REGISTER,
    LOGIN
} from './user.actions';

const initState = fromJS({
    user: null
});

const handlers = {
    [REGISTER]: (user, action) => {
        return user;
    },
    [LOGIN]: (user, action) => {
        console.log(action.payload);
        return user.set('user', fromJS(action.payload));
    }
};

export default createReducer(initState, handlers);