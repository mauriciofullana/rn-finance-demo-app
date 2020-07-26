// Describes error state
export interface ICommonState {
	error: boolean;
	errorMessage: string;
	loading: boolean;
};

// Describes availables action names
export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const SET_LOADING = 'SET_LOADING';
export const CLEAR_LOADING = 'CLEAR_LOADING';

interface IErrorAction {
	type: typeof SET_ERROR;
	payload: string;
};

interface IClearErrorAction {
	type: typeof CLEAR_ERROR;
};

interface ISetLoadingAction {
	type: typeof SET_LOADING;
};

interface IClearLoadingAction {
	type: typeof CLEAR_LOADING;
};

export type CommonActions = IErrorAction | IClearErrorAction | ISetLoadingAction | IClearLoadingAction;
