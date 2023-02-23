import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistSlice from "./features/persistSlice";
import todosSlice from "./features/todosSlice";

const persistConfig = {
  key: "root",
  storage,
  timeout: 500,
  whitelist: ["persist"],
};

const reducers = combineReducers({
  persist: persistSlice,
  todos: todosSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
