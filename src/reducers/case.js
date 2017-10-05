import initialState from './initialState';

export default (state = initialState.case, action) => {
  switch (action.type) {
    case 'SELECT_CASE':
      if (state !== action.payload) return action.payload;
      return state;
    default:
      return state;
  }
};
