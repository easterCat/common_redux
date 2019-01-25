```
import ActionTypes from './utils/actionTypes'
import warning from './utils/warning'
import isPlainObject from './utils/isPlainObject'

function getUndefinedStateErrorMessage(key, action) {
  ...
}

function getUnexpectedStateShapeWarningMessage(
  inputState,
  reducers,
  action,
  unexpectedKeyCache
) {
  ...
}

function assertReducerShape(reducers) {
  ...
}

//注释
export default function combineReducers(reducers) {
  ...

  return function combination(state = {}, action) {
    ...
  }
}
```

[Redux 源码浅析系列(二)：`combineReducer`](https://blog.csdn.net/qq_26708777/article/details/79304216)
