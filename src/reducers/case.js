import initialState from './initialState';

export default (state = initialState.case, payload) => {
  switch (payload.type) {
    case 'add':
      return [...state, payload.item];
    default:
      return state;
  }
};
