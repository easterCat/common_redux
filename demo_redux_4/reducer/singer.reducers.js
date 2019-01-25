const singerState = {
  singer: [
    {
      name: "刘德华",
      desc: "一位演员"
    }
  ]
};

export default singer_reducer;

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
