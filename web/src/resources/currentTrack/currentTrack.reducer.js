const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PLAYLIST':
      return {
        ...action.track,
        progress: 0,
      };
    default:
      return state;
  }
};
