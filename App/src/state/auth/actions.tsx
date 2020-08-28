import { AsyncStorage } from 'react-native';
import { ThunkAction } from 'redux-thunk';
import { AxiosResponse } from 'axios';

import {
	AUTH_LOGIN,
	AUTH_LOGOUT,
	AuthActions,
	USER_UPDATE,
	IUser,
} from './types';
import restApi from '../../api/restApi';
import { RootState } from '../index';
import { SET_RESULT, SET_LOADING, CLEAR_LOADING } from '../common/types';

interface ILoginIn {
	userName: string;
	password: string;
}

interface ILoginOut {
	status: string;
	token: string;
	user: IUser;
	error: string;
}

export const login = ({
	userName,
	password,
}: ILoginIn): ThunkAction<void, RootState, unknown, AuthActions> => async (
	dispatch
) => {
	dispatch({ type: SET_LOADING });
	try {
		const response = await restApi.post<ILoginIn, AxiosResponse<ILoginOut>>(
			'/signin',
			{
				userName,
				password,
			}
		);
		if (response.data) {
			if (response.data.status === 'Success') {
				await AsyncStorage.setItem('userAccessToken', response.data.token);
				dispatch({ type: AUTH_LOGIN, payload: response.data.user });
				dispatch({ type: CLEAR_LOADING });
			} else {
				dispatch({
					type: SET_RESULT,
					payload: {
						error: true,
						message: response.data.error,
						showResult: true,
					},
				});
			}
		}
	} catch (error) {
		dispatch({
			type: SET_RESULT,
			payload: {
				error: true,
				message: 'Ha ocurrido un error',
				showResult: true,
			},
		});
	}
};

interface ISignupIn {
	name: string;
	lastName: string;
	email: string;
	userName: string;
	password: string;
}

interface ISignupOut {
	status: string;
	token: string;
	user: IUser;
	error: string;
}

export const signup = ({
	name,
	lastName,
	email,
	userName,
	password,
}: ISignupIn): ThunkAction<void, RootState, unknown, AuthActions> => async (
	dispatch
) => {
	dispatch({ type: SET_LOADING });
	try {
		const response = await restApi.post<ISignupIn, AxiosResponse<ISignupOut>>(
			'/signup',
			{
				name,
				lastName,
				email,
				userName,
				password,
			}
		);
		if (response.data) {
			if (response.data.status === 'Success') {
				await AsyncStorage.setItem('userAccessToken', response.data.token);
				dispatch({ type: AUTH_LOGIN, payload: response.data.user });
				dispatch({ type: CLEAR_LOADING });
			} else {
				dispatch({
					type: SET_RESULT,
					payload: {
						error: true,
						message: response.data.error,
						showResult: true,
					},
				});
			}
		}
	} catch (error) {
		console.log(error);
		dispatch({
			type: SET_RESULT,
			payload: {
				error: true,
				message: 'Ha ocurrido un error',
				showResult: true,
			},
		});
	}
};

export const logout = (): ThunkAction<
	void,
	RootState,
	unknown,
	AuthActions
> => async (dispatch) => {
	await AsyncStorage.removeItem('userAccessToken');
	dispatch({ type: AUTH_LOGOUT });
};

interface IUpdateUserIn {
	id: string;
	name: string;
	lastName: string;
	email: string;
	userName: string;
}

interface IUpdateUserOut {
	status: string;
	user: IUser;
	error: string;
}

export const updateUser = (
	updateUserIn: IUpdateUserIn
): ThunkAction<void, RootState, unknown, AuthActions> => async (dispatch) => {
	dispatch({ type: SET_LOADING });
	try {
		const response = await restApi.put<
			IUpdateUserIn,
			AxiosResponse<IUpdateUserOut>
		>(`/user/${updateUserIn.id}`, updateUserIn);

		if (response.data) {
			if (response.data.status == 'Success') {
				dispatch({ type: USER_UPDATE, payload: response.data.user });
				dispatch({
					type: SET_RESULT,
					payload: {
						error: false,
						message: 'Usuario actualizado correctamente',
						showResult: true,
					},
				});
			} else {
				dispatch({
					type: SET_RESULT,
					payload: {
						error: true,
						message: response.data.error,
						showResult: true,
					},
				});
			}
		}
	} catch (error) {
		dispatch({
			type: SET_RESULT,
			payload: {
				error: true,
				message: 'Ha ocurrido un error',
				showResult: true,
			},
		});
	}
};
