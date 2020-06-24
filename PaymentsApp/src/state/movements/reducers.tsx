import {
	IMovementsState,
	MovementsActions,
	MOVEMENTS_LOADING,
	MOVEMENTS_GET,
	MOVEMENTS_ERROR,
	MOVEMENTS_CLEAR_ERROR
} from './types';

const initialState: IMovementsState = {
	payload: [],
	loading: false,
	error: false,
	errorMessage: ''
};

export default (state = initialState, action: MovementsActions): IMovementsState => {
	switch (action.type) {
		case MOVEMENTS_LOADING:
			return { ...state, loading: true, error: false };
		case MOVEMENTS_ERROR:
			return { ...state, loading: false, error: true, errorMessage: action.payload };
		case MOVEMENTS_CLEAR_ERROR:
			return { ...state, error: false, errorMessage: '' };
		case MOVEMENTS_GET:
			return { ...state,  loading: true, error: false, payload: action.payload };
		default:
			return state;
	}
};
