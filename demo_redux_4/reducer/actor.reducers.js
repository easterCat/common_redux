const actorState = {
  actor: [
    {
      name: "郭富城",
      desc: "一位歌手"
    }
  ]
};

export default actor_reducer;

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
