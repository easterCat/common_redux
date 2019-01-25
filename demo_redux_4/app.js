import store from "./store/store";
import { bound_add_actor_action, bound_minus_actor_action, bound_add_singer_action } from "./action/actions";

const unsubscribe = store.subscribe(listener);

bound_add_singer_action(
  {
    name: "周华健",
    desc: "一位大帅哥"
  },
  store
);

bound_add_actor_action(
  {
    name: "谢安琪",
    desc: "位小美女"
  },
  store
);

bound_minus_actor_action(1, store);

unsubscribe();

bound_add_singer_action(
  {
    name: "周杰伦",
    desc: "歌手一枚"
  },
  store
);

bound_add_actor_action(
  {
    name: "周星驰",
    desc: "笑了"
  },
  store
);

function listener() {
  console.log(store.getState());
}
