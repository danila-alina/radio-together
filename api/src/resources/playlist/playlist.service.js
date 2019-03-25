const monk = require('monk');
const db = require('db');

const playlistCollection = db.get('playlist');

module.exports.getPlaylists = async function getPlaylists() {
  const playlists = await playlistCollection.find({});
  return playlists;
};

module.exports.addPlaylist = async function addPlaylist(playlist) {
  const newPlaylist = await playlistCollection.insert({
    _id: monk.id().toHexString(),
    name: playlist.name,
    cover: playlist.cover || '',
  });
  return newPlaylist;
};

