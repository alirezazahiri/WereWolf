import { combineReducers } from "redux";

// reducers
import languageReducer from "./language/languageReducers";
import playersReducer from "./players/playersReducer";
import filterReducer from "./filter/filterReducer";

const rootReducer = combineReducers({
    languageState: languageReducer,
    playersState: playersReducer,
    filterState: filterReducer,
});

export default rootReducer;
