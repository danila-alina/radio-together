export const setCurrentTrack = (track) => {
  return dispatch => dispatch({ type: 'SET_CURRENT_PLAYLIST', track });
};
