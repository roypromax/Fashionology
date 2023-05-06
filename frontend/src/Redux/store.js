import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as loginReducer } from "./loginReducer/reducer";
import { reducer as registerReducer } from "./registerReducer/reducer"

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
