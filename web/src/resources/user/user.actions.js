import * as api from './user.api';

export const signIn = (musicUserToken, data) => {
  return () => api.signIn(musicUserToken, data);
};

export const signUp = (musicUserToken, data) => {
  return () => api.signUp(musicUserToken, data);
};

export const setAuth = () => {
  return dispatch => dispatch({ type: 'SET_AUTH' });
};

export const getUserInfo = () => {
  return dispatch => api.getUserInfo()
    .then(payload => dispatch({ type: 'GET_USER', payload }));
};

export const setPlaylistToRadiostation = (playlistId) => {
  return dispatch => api.setPlaylistToRadiostation(playlistId)
    .then(payload => dispatch({ type: 'SET_RADIOSTATION', payload }));
};

export const unsetRadiostation = () => {
  return dispatch => api.unsetRadiostation()
    .then(payload => dispatch({ type: 'UNSET_RADIOSTATION', payload }));
};

export const getRadiostation = () => {
  return dispatch => api.getRadiostation()
    .then(payload => dispatch({ type: 'GET_RADIOSTATION', payload }));
};
