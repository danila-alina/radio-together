import * as api from './track.api';

export const getPopularTracks = () => {
  return dispatch => api.getPopularTracks()
    .then(payload => dispatch({ type: 'GET_POPULAR_TRACKS', payload }));
};
