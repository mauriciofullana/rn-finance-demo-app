import { AsyncStorage } from 'react-native';
import { ThunkAction } from 'redux-thunk';
import { AxiosResponse } from 'axios';

import { MovementsActions, MOVEMENTS_FETCH, IMovement } from './types';
import restApi from '../../api/restApi';
import { RootState } from '../index';
import { SET_ERROR, SET_LOADING, CLEAR_LOADING } from '../common/types';

interface movementsOut {
	movements: IMovement[];
}

export const movements = (): ThunkAction<
	void,
	RootState,
	unknown,
	MovementsActions
> => async (dispatch) => {
	dispatch({ type: SET_LOADING });
	try {
		const response = await restApi.get<any, AxiosResponse<movementsOut>>(
			'/movements'
		);

		if (response.data) {
			dispatch({ type: MOVEMENTS_FETCH, payload: response.data.movements });
			dispatch({ type: CLEAR_LOADING });
		} else {
			dispatch({ type: SET_ERROR, payload: 'Ha ocurrido un error' });
		}
	} catch (error) {
		console.log(error);
		dispatch({ type: SET_ERROR, payload: 'Ha ocurrido un error' });
	}
};
