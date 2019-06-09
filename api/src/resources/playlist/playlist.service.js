const monk = require('monk');
const db = require('db');

const playlistCollection = db.get('playlist', {
  castIds: false,
});

module.exports.getPlaylists = async (playlistsIds) => {
  const playlists = await playlistCollection.find({ _id: { $in: playlistsIds } });
  return playlists;
};

module.exports.getPlaylistById = (playlistId) => {
  return playlistCollection.findOne({ _id: playlistId });
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

module.exports.updatePlaylist = (playlistId, playlist) => {
  playlistCollection.update({ _id: playlistId }, { $set: playlist });
};

module.exports.deletePlaylist = (playlistId) => {
  playlistCollection.remove({ _id: playlistId });
};

module.exports.addTrackToPlaylist = (playlistId, trackId) => {
  return playlistCollection.findOneAndUpdate(
    { _id: playlistId },
    { $push: { tracks: trackId } },
  );
};
