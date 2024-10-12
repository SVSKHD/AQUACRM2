// src/store/index.ts

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import counterReducer from "./counterSlice";
import userReducer from "./authSlice";

// Create the root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

// Configure persist settings
const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: "root",
  storage,
  whitelist: ["counter"], // Specify which reducers to persist
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable checks for redux-persist
    }),
});

// Create a persistor
export const persistor = persistStore(store);

// Export types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
