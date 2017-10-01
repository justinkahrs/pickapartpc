import initialState from './initialState';

export default (state = initialState.cpu, action) => {
  switch (action.type) {
    case 'SELECT_CPU':
      if (state !== action.payload) return action.payload;
    default:
      return state;
  }
};
