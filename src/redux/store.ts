import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";

import auth from "./slices/auth";

const persistedReducer = persistReducer(
	{
		key: "root",
		storage,
		whitelist: ["auth", "test"],
	},
	combineReducers({
		auth: auth.reducer,
	}),
);

export const store = configureStore({
	reducer: persistedReducer,
	// middleware: [thunk],
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useTypedDispatch = () => useDispatch<RootDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
