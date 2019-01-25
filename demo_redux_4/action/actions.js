const ADD_SINGER = "ADD_SINGER";
const ADD_ACTOR = "ADD_ACTOR";
const MINUS_ACTOR = "MINUS_ACTOR";

export { bound_add_singer_action, bound_add_actor_action, bound_minus_actor_action };

function bound_add_singer_action(payload, store) {
  return store.dispatch(addSinger_action(payload));
}

function bound_add_actor_action(payload, store) {
  return store.dispatch(addActor_action(payload));
}

function bound_minus_actor_action(index, store) {
  return store.dispatch(minusActor_action(index));
}

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
