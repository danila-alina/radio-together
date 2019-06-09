const initialState = {
  popularTracks: [],
  recommendedTracks: [],
  searchTracks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POPULAR_TRACKS':
      return {
        ...state,
        popularTracks: action.payload.tracks,
      };
    case 'SEARCH_TRACKS':
      return {
        ...state,
        searchTracks: action.payload.tracks,
      };
    default:
      return state;
  }
};
