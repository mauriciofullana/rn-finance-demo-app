// Describes authentication state
export interface IAuthState {
	isSignedIn: boolean;
	loading: boolean;
	error: boolean;
	errorMessage: string;
}

// Describes availables action names
export const AUTH_LOADING = 'AUTH_LOADING';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_CLEAR_ERROR = 'AUTH_CLEAR_ERROR';

// Describes Action types
interface ILoginAction {
	type: typeof AUTH_LOGIN;
}

interface ILogOutAction {
	type: typeof AUTH_LOGOUT;
}

interface ILoadingAction {
	type: typeof AUTH_LOADING;
}

interface IErrorAction {
	type: typeof AUTH_ERROR;
	payload: string
}

interface IClearErrorAction {
	type: typeof AUTH_CLEAR_ERROR
}

export type AuthActions = ILoginAction | ILogOutAction | ILoadingAction | IErrorAction | IClearErrorAction;
