// Describes error state
export interface ICommonState {
	error: boolean;
	showResult: boolean;
	loading: boolean;
	message?: string;
}

// Describes availables action names
export const SET_RESULT = 'SET_RESULT';
export const CLEAR_RESULT = 'CLEAR_RESULT';

export const SET_LOADING = 'SET_LOADING';
export const CLEAR_LOADING = 'CLEAR_LOADING';

interface IErrorAction {
	type: typeof SET_RESULT;
	payload: {
		showResult: boolean;
		error: boolean;
		message: string;
	};
}

interface IClearErrorAction {
	type: typeof CLEAR_RESULT;
}

interface ISetLoadingAction {
	type: typeof SET_LOADING;
}

interface IClearLoadingAction {
	type: typeof CLEAR_LOADING;
	payload?: string;
}

export type CommonActions =
	| IErrorAction
	| IClearErrorAction
	| ISetLoadingAction
	| IClearLoadingAction;
