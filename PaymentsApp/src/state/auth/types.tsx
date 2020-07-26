import { CommonActions } from "../common/types";

export interface IUser {
	_id: string;
	name: string;
	lastName: string;
	userName: string;
	email: string;
	password: string;
};

// Describes authentication state
export interface IAuthState {
	isSignedIn: boolean;
	loading: boolean;
	user?: IUser
};

// Describes availables action names
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

// Describes Action types
interface ILoginAction {
	type: typeof AUTH_LOGIN;
	payload: IUser
};

interface ILogOutAction {
	type: typeof AUTH_LOGOUT;
};

export type AuthActions = ILoginAction | ILogOutAction | CommonActions;
