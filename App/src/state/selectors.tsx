import { RootState } from '../state';

export const authSelector = (state: RootState) => state.auth;
export const movementsSelector = (state: RootState) => state.movements;
export const productsSelector = (state: RootState) => state.products;
export const commonSelector = (state: RootState) => state.common;
