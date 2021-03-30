import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import counterReducer from "./counter";

const reducers = combineReducers({
  counter: counterReducer,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
let persistor = persistStore(store);

export { store, persistor };
