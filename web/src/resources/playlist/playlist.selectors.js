export function getPlaylists({ playlist }) {
  return playlist.playlists;
}

export function getCurrentPlaylist(playlistId, { playlist }) {
  const currentPlaylist = playlist.playlists.find((item) => {
    return item._id === playlistId;
  });
  return currentPlaylist;
}
