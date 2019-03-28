import * as api from './playlist.api';

export const getPlaylists = () => {
  return dispatch => api.getPlaylists()
    .then(payload => dispatch({ type: 'GET_PLAYLISTS', payload }));
};

export const getPlaylistById = (playlistId) => {
  return dispatch => api.getPlaylistById(playlistId)
    .then(payload => dispatch({ type: 'GET_CURRENT_PLAYLIST', payload }));
};

export const addPlaylist = () => {
  return dispatch => api.addPlaylist()
    .then(payload => dispatch({ type: 'ADD_PLAYLIST', payload }));
};

export const uploadPlaylistCover = (imageData) => {
  return dispatch => api.uploadPlaylistCover(imageData)
    .then(payload => dispatch({ type: 'UPLOAD_COVER', payload }));
};

export const updatePlaylist = (playlistId, part) => {
  return dispatch => api.updatePlaylist(playlistId, part)
    .then(payload => dispatch({ type: 'UPDATE_PLAYLIST', payload }));
};
