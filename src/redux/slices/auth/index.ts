/* eslint-disable no-param-reassign */
import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";

/**
 * There will be stored auth related stuff
 */

interface AuthState {
	sessionToken: string | null;
}

const initialState: AuthState = {
	sessionToken: null,
};

type Reducer<P> = CaseReducer<AuthState, PayloadAction<P>>;

const setSessionToken: Reducer<AuthState["sessionToken"]> = (state, { payload }) => {
	state.sessionToken = payload;
};

const auth = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setSessionToken,
	},
});

export default auth;
