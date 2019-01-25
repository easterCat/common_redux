import { combineReducers } from "../redux/index";

const singerState = {
    singer: [
        {
            name: "刘德华",
            desc: "一位演员"
        }
    ]
}; //state初始状态

const actorState = {
    actor: [
        {
            name: "郭富城",
            desc: "一位歌手"
        }
    ]
}; //state初始状态

// 返回一个combination函数
const reducer = combineReducers({
    singer_reducer,
    actor_reducer
});

// const reducer = function(state = {}, action) {
//     return {
//         singerState: singer_reducer(state.singerState, action),
//         actorState: actor_reducer(state.actorState, action)
//     };
// };

// console.log(reducer);

export default reducer;

function singer_reducer(state = singerState, action) {
    if (action.type === "ADD_SINGER") {
        console.warn("发起了action=ADD_SINGER");
        state = Object.assign({}, state, {
            singer: state.singer.concat([action.payload])
        }); //Object.assgin会修改第一个参数的值,所以将state放到二号位
        return state;
    }
    return state; //遇到未知的 action 时,一定要返回旧的 state
}

function actor_reducer(state = actorState, action) {
    if (action.type === "ADD_ACTOR") {
        console.warn("发起了action=>ADD_ACTOR");
        state = Object.assign({}, state, {
            actor: state.actor.concat([action.payload])
        });
        return state;
    }
    if (action.type === "MINUS_ACTOR") {
        console.warn("发起了action=>MINUS_ACTOR");
        let actor = [].concat(state.actor);
        state = Object.assign({}, state, {
          actor: actor.splice(action.index, 1)
        });
        return state;
    }
    return state;
}
