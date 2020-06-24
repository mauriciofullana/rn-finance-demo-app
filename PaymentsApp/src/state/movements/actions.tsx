import {
	MOVEMENTS_LOADING,
	MOVEMENTS_GET,
	MOVEMENTS_ERROR,
	MOVEMENTS_CLEAR_ERROR,
    MovementsActions
} from './types';
import restApi from '../../api/restApi';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import { AsyncStorage } from 'react-native';

interface movementsProps {
    productBankIdentifier: string;
	dateFrom: Date,
	dateTo: Date
}

export const movements = ({
	productBankIdentifier,
	dateFrom,
	dateTo
}: movementsProps): ThunkAction<any, RootState, unknown, MovementsActions> => async dispatch => {
	dispatch({ type: MOVEMENTS_LOADING });
	try {
		const response = await restApi.post('/Accounts/Movements', {
			productBankIdentifier,
			dateFrom,
			dateTo
		});
		if (response.data) {
			if (response.data.result === 'success') {
				console.log(response.data)
				dispatch({ type: MOVEMENTS_GET, payload: response.data });
			} else {
				dispatch({ type: MOVEMENTS_ERROR, payload: 'Ha ocurrido un error' });
			}
		}
	} catch (error) {
		dispatch({ type: MOVEMENTS_ERROR, payload: 'Ha ocurrido un error' });
	}
};