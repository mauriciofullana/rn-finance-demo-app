import {
	IAuthState,
	AuthActions,
	AUTH_LOGIN,
	AUTH_LOGOUT
} from './types';

const initialState: IAuthState = {
	isSignedIn: false,
	loading: false,
	user: undefined
};

export default (state = initialState, action: AuthActions): IAuthState => {
	switch (action.type) {
		case AUTH_LOGIN:
			return { ...state, isSignedIn: true, user: action.payload};
		case AUTH_LOGOUT:
			return { ...state, isSignedIn: false, user: undefined };
		default:
			return state;
	}
};
