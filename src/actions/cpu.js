import { createAction } from 'redux-actions';

export const SELECT_CPU = 'SELECT_CPU';
export const CLEAR_CPU = 'CLEAR_CPU';

export const selectCpu = createAction(SELECT_CPU);
export const clearCpu = createAction(CLEAR_CPU);
