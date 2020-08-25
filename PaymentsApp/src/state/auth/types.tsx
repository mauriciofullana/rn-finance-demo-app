import { CommonActions } from '../common/types';

export interface IUser {
	_id: string;
	name: string;
	lastName: string;
	userName: string;
	email: string;
	password: string;
}

// Describes authentication state
export interface IAuthState {
	isSignedIn: boolean;
	user?: IUser;
}

// Describes availables action names
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const USER_UPDATE = 'USER_UPDATE';

// Describes Action types
interface ILoginAction {
	type: typeof AUTH_LOGIN;
	payload: IUser;
}

interface ILogOutAction {
	type: typeof AUTH_LOGOUT;
}

interface IUpdateAction {
	type: typeof USER_UPDATE;
	payload: IUser;
}

export type AuthActions =
	| ILoginAction
	| ILogOutAction
	| IUpdateAction
	| CommonActions;
