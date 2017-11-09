import compose from './compose'

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
//作用是组合 多个 中间件，然后返回一个函数（enhancer）
//这个函数其实就是根据中间件和store的接口生成新的 dispatch 然后暴露给用户
export default function applyMiddleware(...middlewares) {
  // 这个返回的函数就是 enhancer，接受 createStore 函数，再返回一个函数，接受的其实只有 reducer 和 preloadedState；
  return (createStore) => {
    return (...args) => {
      const store = createStore(...args);
      let dispatch = store.dispatch;
      let chain = [];
      // 暴漏 getState 和 dispatch 给 第三方中间件使用
      const middlewareAPI = {
        getState: store.getState,
        dispatch: (...args) => dispatch(...args)
      };
      // 创造第三方中间件使用 middlewareAPI 后返回的函数组成的数组
      chain = middlewares.map(middleware => middleware(middlewareAPI));
      // 结合这一组函数 和 dispatch 组成的新的 dispatch，然后这个暴露给用户使用，而原有的 store.dispatch 是不变的，但是不暴露
      dispatch = compose(...chain)(store.dispatch);

      return {
        ...store,
        dispatch
      }
    }
  }
}
