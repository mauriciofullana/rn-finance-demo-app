import {
	AUTH_LOGIN,
	AUTH_LOGOUT,
	AuthActions,
	IUser
} from './types';
import restApi from '../../api/restApi';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import { AsyncStorage } from 'react-native';
import { SET_ERROR, SET_LOADING } from '../common/types';
import { AxiosResponse } from 'axios';

interface loginIn {
    userName: string;
    password: string
};

interface loginOut {
	status: string;
	token: string;
	user: IUser;
	error: string
};

export const login = ({
	userName,
	password
}: loginIn): ThunkAction<void, RootState, unknown, AuthActions> => async dispatch => {
	//dispatch({ type: SET_LOADING });
	try {
		const response = await restApi.post<loginIn, AxiosResponse<loginOut>>('/signin', {
			userName,
			password
		});
		if (response.data) {
			if (response.data.status === "Success") {
				await AsyncStorage.setItem(
					'userAccessToken',
					response.data.token
				);
				dispatch({ type: AUTH_LOGIN, payload: response.data.user });
			} else {
				dispatch({ type: SET_ERROR, payload: response.data.error });
			}
		}
	} catch (error) {
		console.log(error);
		dispatch({ type: SET_ERROR, payload: 'Ha ocurrido un error' });
	}
};

interface signupIn {
	name: string;
	lastName: string;
	email: string;
	userName: string;
	password: string;
};

interface signupOut {
	status: string;
	token: string;
	user: IUser;
	error: string
};

export const signup = ({
	name,
	lastName,
	email,
	userName,
	password
}: signupIn): ThunkAction<void, RootState, unknown, AuthActions> => async dispatch => {
	//dispatch({ type: SET_LOADING });
	try {
		const response = await restApi.post<signupIn, AxiosResponse<signupOut>>('/signup', {
			name,
			lastName,
			email,
			userName,
			password
		});
		if (response.data) {
			if (response.data.status === "Success") {
				await AsyncStorage.setItem(
					'userAccessToken',
					response.data.token
				);
				dispatch({ type: AUTH_LOGIN, payload: response.data.user });
			} else {
				dispatch({ type: SET_ERROR, payload: response.data.error });
			}
		}
	} catch (error) {
		console.log(error);
		dispatch({ type: SET_ERROR, payload: 'Ha ocurrido un error' });
	}
};

export const logout = (): ThunkAction<
	void,
	RootState,
	unknown,
	AuthActions
> => async dispatch => {
	await AsyncStorage.removeItem('userAccessToken');
	dispatch({ type: AUTH_LOGOUT });
};
