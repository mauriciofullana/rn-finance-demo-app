import { RootState } from '../state';

export const authSelector = (state: RootState) => state.auth;
export const commonSelector = (state: RootState) => state.common;
