import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "redux-logger";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import localStorage from "redux-persist/es/storage";
import { rootReducer } from "./reducer";

const persistReducerConfiguration = {
  key: "rba-test",
  version: 1,
  storage: localStorage,
  whitelist: ["checkingAccount"],
};

const persistentReducer = persistReducer(
  persistReducerConfiguration,
  rootReducer
);

export const store = configureStore({
  reducer: persistentReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    loggerMiddleware,
  ],
});

export const persistor = persistStore(store);
