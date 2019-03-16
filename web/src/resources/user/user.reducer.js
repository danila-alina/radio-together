const initialState = {
  isAuthorised: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return {
        ...state,
        isAuthorised: true,
      };
    default:
      return state;
  }
};
