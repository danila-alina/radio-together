const initialState = {
  track: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_TRACK':
      return {
        ...state,
        track: action.track,
        progress: 0,
        status: 'playing',
      };
    case 'PAUSE_CURRENT_TRACK':
      return {
        ...state,
        status: 'paused',
      };
    case 'PLAY_CURRENT_TRACK':
      return {
        ...state,
        status: 'playing',
      };
    case 'CHANGE_PROGRESS':
      return {
        ...state,
        progress: action.result.currentPlaybackTime,
      };
    case 'SET_CONFIGURED_INSTANCE':
      return {
        ...state,
        isConfiguredInstance: true,
      };
    default:
      return state;
  }
};
