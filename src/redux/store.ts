import { createStore } from "redux";

// Root Reducer
import rootReducer from "./rootReducer";

// Persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// type of Store
export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(persistedReducer);
const persistor = persistStore(store);

// type of dispatch
export type AppDispatch = typeof store.dispatch;

export { store as default, persistor };
