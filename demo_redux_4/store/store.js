import { createStore } from "redux";
import reducer from "../reducer/reducers";

const store = createStore(reducer);

export default store;

