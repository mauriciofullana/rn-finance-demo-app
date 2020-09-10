import { IProductsState, ProductsActions, PRODUCTS_FETCH } from './types';

const initialState: IProductsState = {
	products: [],
};

export default (
	state = initialState,
	action: ProductsActions
): IProductsState => {
	switch (action.type) {
		case PRODUCTS_FETCH:
			return { ...state, products: action.payload };
		default:
			return state;
	}
};
