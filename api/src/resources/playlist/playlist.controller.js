const playlistService = require('./playlist.service');

module.exports.getPlaylists = async function getPlaylists(ctx) {
  const playlists = await playlistService.getPlaylists();
  ctx.body = { playlists };
};

module.exports.addPlaylist = async function addPlaylist(ctx) {
  const playlist = { name: 'New Playlist' };
  
  const newPlaylist = await playlistService.addPlaylist(playlist);
  
  console.log(newPlaylist);

  ctx.body = { newPlaylist };
};
