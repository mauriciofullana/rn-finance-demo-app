import {
	IAuthState,
	AuthActions,
	AUTH_LOGIN,
	AUTH_LOGOUT,
	AUTH_ERROR,
	AUTH_CLEAR_ERROR,
	AUTH_LOADING
} from './types';

const initialState: IAuthState = {
	isSignedIn: false,
	loading: false,
	error: false,
	errorMessage: ''
};

export default (state = initialState, action: AuthActions): IAuthState => {
	switch (action.type) {
		case AUTH_LOADING:
			return { ...state, loading: true, error: false };
		case AUTH_ERROR:
			return { ...state, loading: false, error: true, errorMessage: action.payload };
		case AUTH_CLEAR_ERROR:
			return { ...state, error: false, errorMessage: '' };
		case AUTH_LOGIN:
			return { ...state, isSignedIn: true, loading: false };
		case AUTH_LOGOUT:
			return { ...state, isSignedIn: false };
		default:
			return state;
	}
};
