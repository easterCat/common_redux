## redux

随着 javascript 单页应用的不断发展,javascript 需要管理比以往都要多的状态,管理不断变化的 state 非常困难,数据流动不断变的模糊不可预测,代码的开发与维护成为了变得越来越困难.redux 这类状态管理框架变出现了,通过限制更新发生的时间和方式,来使 state 的变化变得可以预测.

### 三大原则

1. 单一数据源 (整个应用的 state 存放在一个 object tree 中,这个 object tree 只存在与唯一的一个 store 中)
2. state 是只读的,唯一能够改变 state 的只有 action
3. 只能通过纯函数进行修改

### state

state 是数据的状态集合,一般为一个对象

```
let state = {
    singer: [
        {
            name: "刘德华",
            desc: "一位演员"
        }
    ],
    actor: [
        {
            name: "郭富城",
            desc: "一位歌手"
        }
    ]
};
```

### action

action 是一个普通的 javacript 对象,用来更新 state 并同时描述发生了什么.可以知道应用到底发生了什么,变化后可以知道为什么改变.

```
let action = {
    type: "ADD_SINGER",
    payload: {
        name: "黎明",
        desc: "一位很好的歌手"
    }
};

let action2 = {
    type: "ADD_ACTOR",
    payload: {
        name: "周润发",
        desc: "一位很好的演员"
    }
};
```

### reducer

reducer 是一个为了把 state 和 action 连接起来而诞生的纯函数,接收 state 和 action,然后返回一个新的 state

```
function add_singer(state, action) {
    if (action.type === "ADD_SINGER") {
        return state.concat([action.payload]);
    }

    return state;
}

function add_actor(state, action) {
    if (action.type === "ADD_ACTOR") {
        return state.concat([action.paylaod]);
    }

    return state;
}

function combineReducer(state, action) {
    return {
        add_singer: add_singer(state.singer, action),
        add_actor: add_actor(state.actor, action)
    };
}
```

[Redux 中文文档](http://cn.redux.js.org/)
