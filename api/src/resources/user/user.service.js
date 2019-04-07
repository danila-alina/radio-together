const db = require('db');

const userCollection = db.get('user', {
  castIds: false,
});

module.exports.setPlaylistToRadiostation = (userId, playlistId) => {
  return userCollection.findOneAndUpdate({ _id: userId }, {
    $set: {
      'radiostation.playlistId': playlistId,
      'radiostation.listeners': [],
    },
  });
};

module.exports.unsetRadiostation = (userId) => {
  return userCollection.findOneAndUpdate({ _id: userId }, {
    $set: {
      'radiostation.playlistId': null,
      'radiostation.listeners': [],
    },
  });
};

module.exports.getUserById = (userId) => {
  return userCollection.findOne({ _id: userId });
};
