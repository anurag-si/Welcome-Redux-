import { combineReducers } from "redux";
import changeNameReducer from "./name";

const allReducers = combineReducers({
    changeName: changeNameReducer
})

export default allReducers;