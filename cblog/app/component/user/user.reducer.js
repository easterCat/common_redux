/**
 * Created by easterCat on 2017/10/25.
 */
import {createReducer} from 'redux-create-reducer';
import {fromJS} from 'immutable';

import {
    REGISTER
} from './user.actions';

const initState = fromJS({
    user: {}
});

const handlers = {
    [REGISTER]: (user, action) => {
        return user;
    }
};

export default createReducer(initState, handlers);