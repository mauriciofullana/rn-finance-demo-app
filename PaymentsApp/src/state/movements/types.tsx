// Describes movements state

export interface IMovementsState {
    payload: [],
	loading: boolean;
	error: boolean;
	errorMessage: string;
}

export const MOVEMENTS_LOADING = 'MOVEMENTS_LOADING';
export const MOVEMENTS_GET = 'MOVEMENTS_GET';
export const MOVEMENTS_ERROR = 'MOVEMENTS_ERROR';
export const MOVEMENTS_CLEAR_ERROR = 'MOVEMENTS_CLEAR_ERROR';

// Describes Action types
interface IMovementsAction {
	type: typeof MOVEMENTS_GET;
	payload: []
}

interface IMovementsLoadingAction {
	type: typeof MOVEMENTS_LOADING;
}

interface IMovementsErrorAction {
	type: typeof MOVEMENTS_ERROR,
	payload: string
}

interface IMovementsClearErrorAction {
	type: typeof MOVEMENTS_CLEAR_ERROR
}

export type MovementsActions = IMovementsAction | IMovementsLoadingAction | IMovementsErrorAction | IMovementsClearErrorAction;
