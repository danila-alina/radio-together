export const getTrackInfo = ({ currentTrack }) => {
  return currentTrack.track;
};

export const getPlayedTime = ({ currentTrack }) => {
  return currentTrack.progress;
};

export const getStatus = ({ currentTrack }) => {
  return currentTrack.status;
};

export const getTrackId = ({ currentTrack }) => {
  return currentTrack.track._id;
};

export const isInstanceConfigured = ({ currentTrack }) => {
  return currentTrack.isConfiguredInstance;
};
