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

// let action = {
//   type: "ADD_SINGER",
//   payload: {
//       name: "黎明",
//       desc: "一位很好的歌手"
//   }
// };
function addSinger_action(payload) {
  return {
      type: "ADD_SINGER",
      payload
  };
}

// let action2 = {
//   type: "ADD_ACTOR",
//   payload: {
//       name: "周润发",
//       desc: "一位很好的演员"
//   }
// };
function addActor_action(payload) {
  return {
      type: "ADD_ACTOR",
      payload
  };
}

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

// function combineReducer(state, action) {
//     return {
//         add_singer: add_singer(state.todos, action),
//         add_actor: add_actor(state.todos, action)
//     };
// }

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
