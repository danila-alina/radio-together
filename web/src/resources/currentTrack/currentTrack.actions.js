export const setTrack = track => (dispatch, getState) => {
  const { status } = getState();
  const music = window.MusicKit.getInstance();
  if (status === 'playing') {
    music.stop();
  }
  music.setQueue({ song: track.appleMusicId })
    .then((result) => {
      music.play();
    })
    .catch((error) => {
      console.log(error); // eslint-disable-line
    });
  dispatch({ type: 'SET_CURRENT_TRACK', track });
};

export const playTrack = () => (dispatch) => {
  const music = window.MusicKit.getInstance();
  music.play();
  dispatch({ type: 'PLAY_CURRENT_TRACK' });
};

export const pauseTrack = () => (dispatch) => {
  const music = window.MusicKit.getInstance();
  music.pause();
  dispatch({ type: 'PAUSE_CURRENT_TRACK' });
};

export const changeProgress = result => (dispatch) => {
  dispatch({ type: 'CHANGE_PROGRESS', result });
};

export const setCofiguredInstance = () => (dispatch) => {
  dispatch({ type: 'SET_CONFIGURED_INSTANCE' });
};

export const joinRadiostation = (track, trackProgress) => async (dispatch) => {
  const music = window.MusicKit.getInstance();
  music.setQueue({ song: track.appleMusicId })
    .then(() => {
      music.play()
        .then(() => {
          music.seekToTime(43);
        });
    });

  const payload = {
    track,
    progress: 43,
  };
  dispatch({ type: 'JOIN_RADIOSTATION', payload });
};

export const leaveRadiostation = () => async (dispatch) => {
  const music = window.MusicKit.getInstance();
  music.stop();

  dispatch({ type: 'LEAVE_RADIOSTATION' });
};
