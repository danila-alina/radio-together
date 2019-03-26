const monk = require('monk');
const db = require('db');

const playlistCollection = db.get('playlist', {
  castIds: false,
});

module.exports.getPlaylists = async function getPlaylists() {
  const playlists = await playlistCollection.find({});
  return playlists;
};

module.exports.getPlaylistById = async function getTracksIds(playlistId) {
  const playlist = await playlistCollection.findOne({ _id: playlistId });
  return playlist;
};

module.exports.addPlaylist = async function addPlaylist(playlist) {
  const newPlaylist = await playlistCollection.insert({
    _id: monk.id().toHexString(),
    name: playlist.name,
    tracks: [],
    cover: playlist.cover || '',
  });
  return newPlaylist;
};

