import { combineReducers } from "redux";

// reducers
import languageReducer from "./language/languageReducers";
import playersReducer from "./players/playersReducer";

const rootReducer = combineReducers({
    languageState: languageReducer,
    playersState: playersReducer,
});

export default rootReducer;
