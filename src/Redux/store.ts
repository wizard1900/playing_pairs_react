
import { combineReducers, createStore } from "redux";
import { startReducer } from "./start-reducer";
import { fieldReducer } from "./field-reducer";

const reducers = combineReducers({ startPage: startReducer, fieldPage: fieldReducer })
export const store = createStore(reducers);


