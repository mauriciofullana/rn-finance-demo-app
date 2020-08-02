import { RootState } from '../state';

export const authSelector = (state: RootState) => state.auth;
export const movementsSelector = (state: RootState) => state.movements;
export const commonSelector = (state: RootState) => state.common;
