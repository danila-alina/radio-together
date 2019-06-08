const monk = require('monk');
const db = require('db');

const trackCollection = db.get('track', {
  castIds: false,
});

module.exports.getTracksByIds = async (tracksIds) => {
  const tracks = await trackCollection.find({ _id: { $in: tracksIds } });
  return tracks;
};

module.exports.addPopularTracks = async (tracks) => {
  const results = Promise.all(tracks.map(async (track) => {
    const result = await trackCollection.findOneAndUpdate({
      appleMusicId: track.appleMusicId,
    }, {
      $setOnInsert: {
        _id: monk.id().toHexString(),
        ...track,
      },
    }, {
      upsert: true,
    });
    return result;
  }));
  return results;
};
