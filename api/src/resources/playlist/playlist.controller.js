const playlistService = require('./playlist.service');
const trackService = require('resources/track/track.service');

module.exports.getPlaylists = async function getPlaylists(ctx) {
  const playlists = await playlistService.getPlaylists();
  ctx.body = { playlists };
};

module.exports.getPlaylistById = async function getPlaylistById(ctx) {
  const { playlistId } = ctx.params;
  const playlist = await playlistService.getPlaylistById(playlistId);
  const tracks = await trackService.getTracksByIds(playlist.tracks);
  
  ctx.body = {
    playlist: {
      _id: playlist._id,
      name: playlist.name,
      tracks: tracks,
      cover: playlist.cover,
    }
  };
};

module.exports.addPlaylist = async function addPlaylist(ctx) {
  const playlist = { name: 'New Playlist' };
  
  const newPlaylist = await playlistService.addPlaylist(playlist);
  
  console.log(newPlaylist);

  ctx.body = { newPlaylist };
};
