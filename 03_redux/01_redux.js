let state = {
  todos: [
      {
          name: "刘德华",
          desc: "一位演员"
      },
      {
          name: "郭富城",
          desc: "一位歌手"
      }
  ]
};

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
      add_singer: add_singer(state.todos, action),
      add_actor: add_actor(state.todos, action)
  };
}

let reducer = combineReducer(state, action);

export default reducer;
