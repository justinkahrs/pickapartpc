import initialState from './initialState';

export default (state = initialState.caseSize, action) => {
  switch (action.type) {
    case 'SELECT_CASE':
      if (state !== action.payload) return action.payload;
      return state;
    case 'CLEAR_CASE':
      return '';
    default:
      return state;
  }
};
