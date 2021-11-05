import { combineReducers } from "redux";

// reducers 
import languageReducer from "./language/languageReducers";

const rootReducer = combineReducers({
    languageState: languageReducer
})

export default rootReducer