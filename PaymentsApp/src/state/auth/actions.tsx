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
    username: string;
    password: string
}

interface loginOut {
	status: string;
	token: string;
	user: IUser;
	error: string
}

export const login = ({
	username,
	password
}: loginIn): ThunkAction<void, RootState, unknown, AuthActions> => async dispatch => {
	//dispatch({ type: SET_LOADING });
	try {
		const response = await restApi.post<loginIn, AxiosResponse<loginOut>>('/signin', {
			userName: username,
			password: password
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
