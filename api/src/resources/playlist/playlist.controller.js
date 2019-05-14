const config = require('config/config');
const trackService = require('resources/track/track.service');
const userService = require('resources/user/user.service');
const playlistService = require('./playlist.service');

module.exports.getPlaylists = async (ctx) => {
  const { userId } = ctx.state;
  const user = await userService.getUserById(userId);
  const playlistsIds = user.playlists;
  const playlists = await playlistService.getPlaylists(playlistsIds);
  ctx.body = {
    playlists,
  };
};

module.exports.getPlaylistById = async (ctx) => {
  const { playlistId } = ctx.params;
  const playlist = await playlistService.getPlaylistById(playlistId);
  const tracks = await trackService.getTracksByIds(playlist.tracks);

  ctx.body = {
    playlist: {
      _id: playlist._id,
      name: playlist.name,
      tracks,
      cover: playlist.cover,
    },
  };
};

module.exports.addPlaylist = async (ctx) => {
  const { userId } = ctx.state;
  const playlist = { name: 'New Playlist' };
  const newPlaylist = await playlistService.addPlaylist(playlist);
  const playlistId = newPlaylist._id;
  await userService.addPlaylist(userId, playlistId);
  ctx.body = { newPlaylist };
};

module.exports.uploadPlaylistCover = async (ctx) => {
  const cover = `${config.imageUrl}/${ctx.req.file.filename}`;
  ctx.body = { cover };
};

module.exports.updatePlaylist = async (ctx) => {
  const { playlistId } = ctx.params;
  const { cover, name } = ctx.request.body;
  const playlist = {};

  if (cover) {
    playlist.cover = cover;
  }
  if (name) {
    playlist.name = name;
  }

  await playlistService.updatePlaylist(playlistId, playlist);
  ctx.body = {
    playlistId,
    part: playlist,
  };
};

module.exports.deletePlaylist = async (ctx) => {
  const { userId } = ctx.state;
  const { playlistId } = ctx.params;
  await playlistService.deletePlaylist(playlistId);
  await userService.deletePlaylist(userId, playlistId);
  ctx.body = {
    playlistId,
  };
};

module.exports.addTrackToPlaylist = async (ctx) => {
  const { userId } = ctx.state;
  const { trackId, playlistId } = ctx.request.body;
  console.log('--------------------');
  console.log(trackId, playlistId);
  ctx.body = {
  };
};
