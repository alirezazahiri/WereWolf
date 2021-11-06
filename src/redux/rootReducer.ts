import { combineReducers } from "redux";

// reducers
import charactersReducer from "./characters/charactersReducer";
import languageReducer from "./language/languageReducers";
import playersReducer from "./players/playersReducer";
import filterReducer from "./filter/filterReducer";

const rootReducer = combineReducers({
    languageState: languageReducer,
    playersState: playersReducer,
    filterState: filterReducer,
    charactersState: charactersReducer,
});

export default rootReducer;
