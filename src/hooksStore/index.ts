import {
  createStore,
  combineReducers,
  Reducer
} from "redux";

import { IStoreState, IAction } from "./types";
import userReducer from "./module/user";

const reducers: Reducer<IStoreState, IAction<any>> = combineReducers<
  IStoreState
>({
  user: userReducer
});


function createMyStore() {
  const store = createStore(reducers);
  return store;
}

const store = createMyStore();
export default store;
