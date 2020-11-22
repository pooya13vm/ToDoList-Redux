import { createStore, applyMiddleware, compose } from "redux";
import { Reduce } from "./../Reducers/index";
import thunk from "redux-thunk";

export const store = createStore(
  Reduce,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
store.subscribe(() => console.log(store.getState()));
