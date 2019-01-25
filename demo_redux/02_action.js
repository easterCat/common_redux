import { combineReducers, createStore } from "../redux/index";
import reducer from "./02_reducers";

const ADD_SINGER = "ADD_SINGER";
const ADD_ACTOR = "ADD_ACTOR";
const MINUS_ACTOR = "MINUS_ACTOR";

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

function minusActor_action(index) {
    return {
        type: MINUS_ACTOR,
        index
    };
}

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

bound_minus_actor_action(1);

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

function bound_minus_actor_action(index) {
    return store.dispatch(minusActor_action(index));
}
