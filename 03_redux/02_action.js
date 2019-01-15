import { combineReducers, createStore } from "../redux/index";

const singerState = {
    singer: [
        {
            name: "刘德华",
            desc: "一位演员"
        }
    ]
};

const actorState = {
    actor: [
        {
            name: "郭富城",
            desc: "一位歌手"
        }
    ]
};

const ADD_SINGER = "ADD_SINGER";
const ADD_ACTOR = "ADD_ACTOR";

function addSinger_action(payload) {
    return {
        type: ADD_SINGER,
        payload
    };
}
function addActor_action(payload) {
    return {
        type: ADD_ACTOR,
        payload
    };
}

// 返回一个combination函数
const reducer = combineReducers({
    singer_reducer,
    actor_reducer
});

// console.log(reducer);

const store = createStore(reducer);

// console.log(store);
// console.log(store.getState());

bound_add_singer_action({
    name: "周华健",
    desc: "一位大帅哥"
});

bound_add_actor_action({
    name: "谢安琪",
    desc: "位小美女"
});

// store.dispatch(
//     addSinger_action({
//         name: "周华健",
//         desc: "一位大帅哥"
//     })
// );

// store.dispatch(
//     addActor_action({
//         name: "谢安琪",
//         desc: "一位小美女"
//     })
// );

console.log(store.getState());

function bound_add_singer_action(payload) {
    return store.dispatch(addSinger_action(payload));
}

function bound_add_actor_action(payload) {
    return store.dispatch(addActor_action(payload));
}

function singer_reducer(state = singerState, action) {
    if (action.type === "ADD_SINGER") {
        console.warn("发起了action=ADD_SINGER");
        state = Object.assign({}, state, {
            singer: state.singer.concat([action.payload])
        });
        return state;
    }
    return state;
}

function actor_reducer(state = actorState, action) {
    if (action.type === "ADD_ACTOR") {
        console.warn("发起了action=>ADD_ACTOR");
        state = Object.assign({}, state, {
            actor: state.actor.concat([action.payload])
        });
        return state;
    }
    return state;
}
