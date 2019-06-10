const initialState = {
  isAuthorised: false,
  firstName: '',
  lastName: '',
  followers: [],
  following: [],
  radiostation: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return {
        ...state,
        isAuthorised: true,
      };
    case 'GET_USER':
      return {
        ...state,
        ...action.payload.user,
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
    case 'GET_USER_RADIOSTATION':
      return {
        ...state,
        userRadiostation: action.payload.radiostation,
      };
    default:
      return state;
  }
};
