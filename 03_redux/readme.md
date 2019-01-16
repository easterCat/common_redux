## redux 的概述

随着 javascript 单页应用的不断发展,javascript 需要管理比以往都要多的状态,管理不断变化的 state 非常困难,数据流动不断变的模糊不可预测,代码的开发与维护成为了变得越来越困难.redux 这类状态管理框架变出现了,通过限制更新发生的时间和方式,来使 state 的变化变得可以预测.

redux 是一个很有用的框架,但是并不是非用不可,而是当你自己觉得可能需要 redux 的时候,就会找到他,并且使用他(_还有其他同类框架_)

-   当你有大量的,随时间变化的数据
-   当你需要一个单一可靠的 state 数据源
-   当你把所有 state 放到顶部,或者父子兄弟之间的数据通信让你焦头烂额的时候

### 三大原则

1. 单一数据源 (整个应用的 state 存放在一个 object tree 中,这个 object tree 只存在与唯一的一个 store 中)
2. state 是只读的,唯一能够改变 state 的只有 action
3. 只能通过纯函数进行修改

### state 基本概念

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

### action 基本概念

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

> (action 是一个对象,action 生成器是一个函数,两个不同的概念)

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

### reducer 基本概念

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

改变 state

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

![01](https://github.com/easterCat/common_react/blob/master/03_redux/01.png?raw=true)

> 上面就是 state,action 以及 reducer 连接二者的方式,redux 里面提供了更多的便捷操作

### redux 基础

1. **redux 中的 action**

    action 主要是把数据从应用传到 store 的有效载荷,它是 store 的唯一来源,通过 reducer 定义的 state 是初始化,一般写法中多设置为 null,undefined,{},[]等.通过 store.dispatch()将 action 传到 store.为了使用方便,一般会用 action 生成器来生成 action.

    redux 只用把 action 生成器的结果传给 dispatch()就可以发起 dispatch

```
import { createStore } from "../redux/index";
import reducer from './reducer';

const ADD_SINGER = "ADD_SINGER";
const ADD_ACTOR = "ADD_ACTOR";

const store = createStore(reducer);

store.dispatch(
    addSinger_action({
        name: "周华健",
        desc: "一位大帅哥"
    })
);

store.dispatch(
    addActor_action({
        name: "谢安琪",
        desc: "一位小美女"
    })
);

console.log(store.getState());

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
```

![02](https://github.com/easterCat/common_react/blob/master/03_redux/02.png?raw=true)

    我们也可以创建一个函数用于返回 dispatch 触发器

```
bound_add_singer_action({
    name: "周华健",
    desc: "一位大帅哥"
});

bound_add_actor_action({
    name: "谢安琪",
    desc: "位小美女"
});

function bound_add_singer_action(payload) {
    return store.dispatch(addSinger_action(payload));
}

function bound_add_actor_action(payload) {
    return store.dispatch(addActor_action(payload));
}

console.log(store.getState());
```

action 主要包含 action 对象,action_creater()生成器,bound_action_creater()绑定函数

```
//我是action
{type:"我是type",payload:"我是数据"}

//我是action生成器,我是来返回action对象
function action_creater(){
    return {type:"我是type",payload:"我是数据"}
}

//我是bound_action_creater绑定函数,我是获取action生成器的返回值去触发dispatch()
function bound_action_creater(){
    store.dispatch(action_creater());
}
```

2. **redux 中 reducer**

(oldState,action)=> newState 这种就是一个最简单的 reducer.
禁止事项

1. 修改传入的参数
2. 执行有副作用的操作,如 api 请求,变量修改,路由跳转
3. 调用非纯函数,如 Date.now()或 Math.random()

```
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

const reducer = function(state = {}, action) {
    return {
        singerState: singer_reducer(state.singerState, action),
        actorState: actor_reducer(state.actorState, action)
    };
};
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
        state.actor = state.actor.splice(action.index, 1);
        return state;
    }
    return state;
}

```

redux 当然提供了的便捷方法 combineReducers().combineReducers()只是生成一个函数 combination,这个函数将调用所有的 reducer,每个 reducer 根据 key 值筛选出 state 的一部分数据进行处理.这个函数再将所有的 reducer 结果合成一个大对象.

```
import { combineReducers } from "../redux/index";

// 返回一个combination函数
const reducer = combineReducers({
    singer_reducer,
    actor_reducer
});

// console.log(reducer);
```

此时在 store 中,数据的 key 值会变为 singer_reducer 和 actor_reducer,我们可以通过设置不同 key 来更改在 store 中存放的 key

```
{
    singerState:singer_reducer,
    actorState:actor_reducer
}
//或者将函数名更改
```

3. store

-   store 维护应用的 state
-   提供 getState()方法获取 state
-   提供 dispatch()方法触发 action,更新 state (action->reducer->newState)
-   subscribe()注册监听器
-   subscribe()返回一个函数用来注销监听器
    ![03](https://github.com/easterCat/common_react/blob/master/03_redux/03.png?raw=true)

```
const store = createStore(reducer);

const unsubscribe = store.subscribe(listener);

bound_add_singer_action({
    name: "周华健",
    desc: "一位大帅哥"
});

bound_add_actor_action({
    name: "谢安琪",
    desc: "位小美女"
});

bound_minus_actor_action(1);

unsubscribe();

bound_add_singer_action({
    name: "周杰伦",
    desc: "歌手一枚"
});

bound_add_actor_action({
    name: "周星驰",
    desc: "笑了"
});

function listener() {
    console.log(store.getState());
}

function bound_add_singer_action(payload) {
    return store.dispatch(addSinger_action(payload));
}

function bound_add_actor_action(payload) {
    return store.dispatch(addActor_action(payload));
}

function bound_minus_actor_action(index) {
    return store.dispatch(minusActor_action(index));
}
```

![04](https://github.com/easterCat/common_react/blob/master/03_redux/04.png?raw=true)

当我们 shore.dispatch()之后返回的值就是一个用来注销该监听器的 unsubscribe 函数,源码:

```
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.')
    }

    let isSubscribed = true

    ensureCanMutateNextListeners()
    <!-- 将listener推入到执行队列中去 -->
    nextListeners.push(listener)

    return function unsubscribe() {
      if (!isSubscribed) {
        return
      }

      isSubscribed = false

      ensureCanMutateNextListeners()
      <!-- 找到监听的listener,并将函数从队列中删除 -->
      const index = nextListeners.indexOf(listener)
      nextListeners.splice(index, 1)
    }
  }
```

[Redux 中文文档](http://cn.redux.js.org/)

[Redux 中文文档](https://www.redux.org.cn/)

[Redux 官方文档](https://redux.js.org/)

[Redux 简明教程](https://github.com/kenberkeley/redux-simple-tutorial)

[Understand Redux](https://kylewh.gitbooks.io/understand-redux/content/)

[Redux 入门教程（三）：React-Redux 的用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)
