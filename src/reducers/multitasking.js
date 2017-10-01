import initialState from './initialState';

export default (state = initialState.multitasking, action) => {
  switch (action.type) {
    case 'SELECT_MULTITASKING':
      if (state !== action.payload) return action.payload;
    default:
      return state;
  }
};
