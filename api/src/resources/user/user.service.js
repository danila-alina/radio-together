const monk = require('monk');
const db = require('db');

const userCollection = db.get('user', {
  castIds: false,
});

module.exports.setPlaylistToRadiostation = (userId, playlistId) => {
  return userCollection.findOneAndUpdate({ _id: userId }, {
    $set: {
      "radiostation.playlist": playlistId,
      "radiostation.listeners": [],
    },
  });
}

module.exports.unsetRadiostation = (userId) => {
  return userCollection.findOneAndUpdate({ _id: userId }, {
    $set: {
      "radiostation.playlist": null,
      "radiostation.listeners": [],
    },
  });
}