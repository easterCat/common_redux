import { combineReducers } from "redux";
import actor from "./actor.reducers.js";
import singer from "./singer.reducers.js";

const reducer = combineReducers({
  singer,
  actor
});

export default reducer;
