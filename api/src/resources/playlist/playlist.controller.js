const config = require('config/config');
const playlistService = require('./playlist.service');
const trackService = require('resources/track/track.service');

module.exports.getPlaylists = async (ctx) => {
  const playlists = await playlistService.getPlaylists();
  ctx.body = { playlists };
};

module.exports.getPlaylistById = async (ctx) => {
  const { playlistId } = ctx.params;
  const playlist = await playlistService.getPlaylistById(playlistId);
  const tracks = await trackService.getTracksByIds(playlist.tracks);
  
  ctx.body = {
    playlist: {
      _id: playlist._id,
      name: playlist.name,
      tracks: tracks,
      cover: playlist.cover,
    },
  };
};

module.exports.addPlaylist = async (ctx) => {
  const playlist = { name: 'New Playlist' };
  const newPlaylist = await playlistService.addPlaylist(playlist);
  ctx.body = { newPlaylist };
};

module.exports.uploadPlaylistCover = async (ctx) => {
  const cover = `${config.imageUrl}/${ctx.req.file.filename}`;
  ctx.body = { cover };
}

module.exports.updatePlaylist = async (ctx) => {
  const { playlistId } = ctx.params;
  const { cover, name } = ctx.request.body;
  const playlist = {};
  
  if (cover) {
    playlist.cover = cover
  }
  if (name) {
    playlist.name = name
  }

  await playlistService.updatePlaylist(playlistId, playlist);
  ctx.body = {
    playlistId,
    part: playlist,
  };
}

module.exports.deletePlaylist = async (ctx) => {
  const { playlistId } = ctx.params;
  await playlistService.deletePlaylist(playlistId);
  ctx.body = {
    playlistId,
  }
}
