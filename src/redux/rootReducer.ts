import { combineReducers } from "redux";

// reducers
import playersDataReducer from "./playersData/playersDataReducer";
import charactersReducer from "./characters/charactersReducer";
import passwordReducers from "./password/passwordReducers";
import languageReducer from "./language/languageReducers";
import playersReducer from "./players/playersReducer";
import filterReducer from "./filter/filterReducer";
import dayNightReducer from "./dayNight/dayNightReducer";

const rootReducer = combineReducers({
  languageState: languageReducer,
  playersState: playersReducer,
  filterState: filterReducer,
  charactersState: charactersReducer,
  playersDataState: playersDataReducer,
  passwordState: passwordReducers,
  dayNightState: dayNightReducer,
});

export default rootReducer;
