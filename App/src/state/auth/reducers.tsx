import {
	IAuthState,
	AuthActions,
	AUTH_LOGIN,
	AUTH_LOGOUT,
	USER_UPDATE,
} from './types';

const initialState: IAuthState = {
	isSignedIn: false,
	user: undefined,
};

export default (state = initialState, action: AuthActions): IAuthState => {
	switch (action.type) {
		case AUTH_LOGIN:
			return { ...state, isSignedIn: true, user: action.payload };
		case AUTH_LOGOUT:
			return { ...state, isSignedIn: false, user: undefined };
		case USER_UPDATE:
			return { ...state, user: action.payload };
		default:
			return state;
	}
};
