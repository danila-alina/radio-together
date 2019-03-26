const initialState = {
  playlists: [],
  currentPlaylist: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PLAYLISTS':
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    case 'GET_CURRENT_PLAYLIST':
      return {
        ...state,
        currentPlaylist: action.payload.playlist,
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
