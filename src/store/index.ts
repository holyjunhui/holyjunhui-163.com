import { createStore, combineReducers, applyMiddleware,compose, Middleware, Reducer	} from 'redux'

import reduxThunk from "redux-thunk"
import reduxLogger from 'redux-logger'
import { IStoreState, IAction } from "./types"
import userReducer from "./module/user"

const reducers: Reducer<IStoreState, IAction<any>> = combineReducers<IStoreState>({
	user:userReducer
});

const middleware: Middleware[] = [reduxThunk];

if(process.env.NODE_ENV=== 'development') {
	middleware.push(reduxLogger)
}

function createMyStore() {
	const store = createStore(reducers, applyMiddleware(...middleware))
	return store;
}

const store = createMyStore();
export default store;