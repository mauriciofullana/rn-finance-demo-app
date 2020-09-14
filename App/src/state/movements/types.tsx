import { CommonActions } from '../common/types';

export interface IMovement {
	_id: string;
	holder: string;
	reference: string;
	isDebit: boolean;
	date: Date;
	userId: string;
	amount: Number;
	productId: string;
}

export interface IMovementsState {
	movements: IMovement[];
}

export const MOVEMENTS_FETCH = 'MOVEMENTS_FETCH';

interface IGetMovementsAction {
	type: typeof MOVEMENTS_FETCH;
	payload: IMovement[];
}

export type MovementsActions = IGetMovementsAction | CommonActions;
