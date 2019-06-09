import * as api from './track.api';

export const getPopularTracks = () => async (dispatch) => {
  const payload = await api.getPopularTracks();
  dispatch({ type: 'GET_POPULAR_TRACKS', payload });
};

export const rateTrack = (trackId, trackRate) => async (dispatch) => {
  const payload = await api.rateTrack(trackId, trackRate);
  dispatch({ type: 'RATE_TRACK', payload });
};

export const searchTracks = searchValue => async (dispatch) => {
  const payload = await api.searchTracks(searchValue);
  dispatch({ type: 'SEARCH_TRACKS', payload });
};
