const initialState = {
  isAuthorised: false,
  radiostation: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return {
        ...state,
        isAuthorised: true,
      };
    case 'GET_RADIOSTATION':
      return {
        ...state,
        radiostation: action.payload.radiostation,
      };
    case 'SET_RADIOSTATION':
      return {
        ...state,
        radiostation: action.payload.radiostation,
      };
    case 'UNSET_RADIOSTATION':
      return {
        ...state,
        radiostation: action.payload.radiostation,
      };
    default:
      return state;
  }
};
