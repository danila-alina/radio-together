export const getPlaylists = ({ playlist }) => {
  return playlist.playlists;
};

export const getCurrentPlaylist = (playlistId, { playlist }) => {
  const currentPlaylist = playlist.playlists.find((item) => {
    return item._id === playlistId;
  });
  return currentPlaylist;
};
