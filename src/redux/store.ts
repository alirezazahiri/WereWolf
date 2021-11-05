import { createStore } from "redux";

// Root Reducer
import rootReducer from "./rootReducer";

// type of Store
export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

// type of dispatch
export type AppDispatch = typeof store.dispatch

export default store;
