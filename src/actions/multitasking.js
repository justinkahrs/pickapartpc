import { createAction } from 'redux-actions';

export const SELECT_MULTITASKING = 'SELECT_MULTITASKING';
export const CLEAR_MULTITASKING = 'CLEAR_MULTITASKING';

export const selectMultitasking = createAction(SELECT_MULTITASKING);
export const clearMultitaksing = createAction(CLEAR_MULTITASKING);
