import { CommonActions } from '../common/types';

export interface IProduct {
	_id: string;
	productNumber: string;
	alias: string;
	balance: Number;
	productType: string;
	currency: string;
	userId: string;
}

export interface IProductsState {
	products: IProduct[];
}

export const PRODUCTS_FETCH = 'PRODUCTS_FETCH';

interface IGetProductsAction {
	type: typeof PRODUCTS_FETCH;
	payload: IProduct[];
}

export type ProductsActions = IGetProductsAction | CommonActions;
