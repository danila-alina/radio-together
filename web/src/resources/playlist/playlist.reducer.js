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
      const playlists = !state.playlists.length
        ? [action.payload.playlist]
        : state.playlists.map((playlist) => {
          if (playlist._id === action.payload.playlist._id) {
            return action.payload.playlist;
          }
          return playlist;
        });
      return {
        ...state,
        playlists,
      };
    case 'ADD_PLAYLIST':
      return {
        ...state,
        playlists: [...state.playlists, action.payload.newPlaylist],
      };
    case 'UPDATE_PLAYLIST':
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          if (playlist._id === action.payload.playlistId) {
            return {
              ...playlist,
              ...action.payload.part,
            };
          }
          return playlist;
        }),
      };
    default:
      return state;
  }
};
