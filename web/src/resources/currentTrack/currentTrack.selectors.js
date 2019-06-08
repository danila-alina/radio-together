export function getTrackInfo({ currentTrack }) {
  return currentTrack.track;
}

export function getPlayedTime({ currentTrack }) {
  return currentTrack.progress;
}

export function getStatus({ currentTrack }) {
  return currentTrack.status;
}

export function getTrackId({ currentTrack }) {
  return currentTrack.track._id;
}

export function isInstanceConfigured({ currentTrack }) {
  return currentTrack.isConfiguredInstance;
}
