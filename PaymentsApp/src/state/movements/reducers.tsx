import { IMovementsState, MovementsActions, MOVEMENTS_FETCH } from './types';

const initialState: IMovementsState = {
	movements: [],
};

export default (
	state = initialState,
	action: MovementsActions
): IMovementsState => {
	switch (action.type) {
		case MOVEMENTS_FETCH:
			return { ...state, movements: action.payload };
		default:
			return state;
	}
};
