const monk = require('monk');
const db = require('db');

const trackCollection = db.get('track', {
  castIds: false,
});

module.exports.getTracksByIds = async function getTracksByIds(tracksIds) {
  const tracks = await trackCollection.find({ _id: { $in : tracksIds } });
  return tracks;
};