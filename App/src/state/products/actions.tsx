import { ThunkAction } from 'redux-thunk';
import { AxiosResponse } from 'axios';

import { ProductsActions, PRODUCTS_FETCH, IProduct } from './types';
import restApi from '../../api/restApi';
import { RootState } from '../index';
import { SET_RESULT, SET_LOADING, CLEAR_LOADING } from '../common/types';

interface IProductsOut {
	products: IProduct[];
	error: string;
	status: string;
}

export const products = (): ThunkAction<
	void,
	RootState,
	unknown,
	ProductsActions
> => async (dispatch) => {
	dispatch({ type: SET_LOADING });
	try {
		const response = await restApi.get<any, AxiosResponse<IProductsOut>>(
			'/products'
		);

		if (response.data.status == 'Success') {
			dispatch({ type: PRODUCTS_FETCH, payload: response.data.products });
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
