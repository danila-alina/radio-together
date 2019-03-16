import * as api from './user.api';

export const signIn = () => {
  return () => api.signIn();
};

export const setAuth = () => {
  return dispatch => dispatch({ type: 'SET_AUTH' });
};
