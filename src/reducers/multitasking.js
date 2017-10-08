import initialState from './initialState';

export default (state = initialState.multitasking, action) => {
  switch (action.type) {
    case 'SELECT_MULTITASKING':
      if (state !== action.payload) return action.payload;
      return state;
    case 'CLEAR_MULTITASKING':
      return '';
    default:
      return state;
  }
};
