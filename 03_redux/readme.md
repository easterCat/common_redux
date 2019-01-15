## redux

随着 javascript 单页应用的不断发展,javascript 需要管理比以往都要多的状态,管理不断变化的 state 非常困难,数据流动不断变的模糊不可预测,代码的开发与维护成为了变得越来越困难.redux 这类状态管理框架变出现了,通过限制更新发生的时间和方式,来使 state 的变化变得可以预测.

redux 是一个很有用的框架,但是并不是非用不可,而是当你自己觉得可能需要 redux 的时候,就会找到他,并且使用他(_还有其他同类框架_)

-   当你有大量的,随时间变化的数据
-   当你需要一个单一可靠的 state 数据源
-   当你把所有 state 放到顶部,或者父子兄弟之间的数据通信让你焦头烂额的时候

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

### action 生成器

用于 action 的复用,实际上是返回一个对象的函数

```
function addSinger_action(payload) {
    return {
        type: "ADD_SINGER",
        payload
    };
}

function addActor_action(payload) {
    return {
        type: "ADD_ACTOR",
        payload
    };
}
```

### reducer

reducer 是一个为了把 state 和 action 连接起来而诞生的纯函数,接收 state 和 action,然后返回一个新的 state

```
function add_singer(state, action) {
    if (action.type === "ADD_SINGER") {
        console.warn("发起了action=ADD_SINGER");
        state = Object.assign({}, state, {
            singer: state.singer.concat([action.payload])
        });
        return state;
    }
    return state;
}

function add_actor(state, action) {
    if (action.type === "ADD_ACTOR") {
        console.warn("发起了action=>ADD_ACTOR");
        state = Object.assign({}, state, {
            actor: state.actor.concat([action.payload])
        });
        return state;
    }
    return state;
}
```

改变state
```
state = add_actor(
    state,
    addActor_action({
        name: "周润发",
        desc: "一位很好的演员"
    })
);

console.log(state);

state = add_singer(
    state,
    addSinger_action({
        name: "黎明",
        desc: "一位很好的歌手"
    })
);

console.log(state);
```
![01]()


[Redux 中文文档](http://cn.redux.js.org/)
