import { combineReducers } from "redux";
import { currentCityReducer } from "./reducers/currentCityReducer";

export const rootReducer = combineReducers({
    current: currentCityReducer
});

