import * as api from './track.api';

export const getPopularTracks = () => {
  return dispatch => api.getPopularTracks()
    .then(payload => dispatch({ type: 'GET_POPULAR_TRACKS', payload }));
};

export const rateTrack = (trackId, trackRate) => {
  return dispatch => api.rateTrack(trackId, trackRate)
    .then(payload => dispatch({ type: 'RATE_TRACK', payload }));
};
