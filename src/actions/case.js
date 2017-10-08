import { createAction } from 'redux-actions';

export const SELECT_CASE = 'SELECT_CASE';
export const CLEAR_CASE = 'CLEAR_CASE';

export const selectCase = createAction(SELECT_CASE);
export const clearCase = createAction(CLEAR_CASE);
