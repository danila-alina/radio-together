const initialState = {
  playlists: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PLAYLISTS':
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    case 'ADD_PLAYLIST':
      return {
        ...state,
        playlists: [...state.playlists, action.payload.newPlaylist],
      };
    default:
      return state;
  }
};
