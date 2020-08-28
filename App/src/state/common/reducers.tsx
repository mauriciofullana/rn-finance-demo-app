import {
	CommonActions,
	SET_RESULT,
	CLEAR_RESULT,
	ICommonState,
	SET_LOADING,
	CLEAR_LOADING,
} from './types';

const initialState: ICommonState = {
	error: false,
	showResult: false,
	loading: false,
	message: '',
};

export default (state = initialState, action: CommonActions): ICommonState => {
	switch (action.type) {
		case SET_RESULT:
			return {
				...state,
				showResult: true,
				error: action.payload.error,
				message: action.payload.message,
			};
		case CLEAR_RESULT:
			return {
				...state,
				showResult: false,
				error: false,
				message: '',
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case CLEAR_LOADING:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
};
