const initialState = {
  popularTracks: [],
  recommendedTracks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POPULAR_TRACKS':
      return {
        ...state,
        popularTracks: action.payload.tracks,
      };
    default:
      return state;
  }
};
