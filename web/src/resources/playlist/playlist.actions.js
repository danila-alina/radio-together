import * as api from './playlist.api';

export const getPlaylists = () => {
  return dispatch => api.getPlaylists()
    .then(payload => dispatch({ type: 'GET_PLAYLISTS', payload }));
};

export const addPlaylist = () => {
  return dispatch => api.addPlaylist()
    .then(payload => dispatch({ type: 'ADD_PLAYLIST', payload }));
};
