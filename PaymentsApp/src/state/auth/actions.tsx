import {
	AUTH_LOGIN,
	AUTH_LOGOUT,
	AUTH_ERROR,
	AUTH_LOADING,
	AuthActions
} from './types';
import restApi from '../../api/restApi';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import { AsyncStorage } from 'react-native';

interface loginProps {
    username: string;
    password: string
}

export const login = ({
	username,
	password
}: loginProps): ThunkAction<void, RootState, unknown, AuthActions> => async dispatch => {
	dispatch({ type: AUTH_LOADING });
	try {
		const response = await restApi.post('/Authentication/SignIn', {
			username,
			password
		});
		if (response.data) {
			if (response.data.signInResult === 'success') {
				await AsyncStorage.setItem(
					'userAccessToken',
					response.data.userAccessToken
				);
				dispatch({ type: AUTH_LOGIN });
			} else {
				dispatch({ type: AUTH_ERROR, payload: 'Ha ocurrido un error' });
			}
		}
	} catch (error) {
		dispatch({ type: AUTH_ERROR, payload: 'Ha ocurrido un error' });
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
