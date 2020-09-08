import { ThunkAction } from 'redux-thunk';
import { AxiosResponse } from 'axios';

import { MovementsActions, MOVEMENTS_FETCH, IMovement } from './types';
import restApi from '../../api/restApi';
import { RootState } from '../index';
import { SET_RESULT, SET_LOADING, CLEAR_LOADING } from '../common/types';

interface IMovementsOut {
	movements: IMovement[];
	error: string;
	status: string;
}

export const movements = (): ThunkAction<
	void,
	RootState,
	unknown,
	MovementsActions
> => async (dispatch) => {
	dispatch({ type: SET_LOADING });
	try {
		const response = await restApi.get<any, AxiosResponse<IMovementsOut>>(
			'/movements'
		);

		if (response.data.status == 'Success') {
			dispatch({ type: MOVEMENTS_FETCH, payload: response.data.movements });
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
