const db = require('db');
const { generateId } = require('services/generateId');

const userCollection = db.get('user', {
  castIds: false,
});

exports.createUser = async (userData) => {
  const user = {
    _id: generateId(),
    login: userData.login,
    firstName: userData.firstName,
    lastName: userData.lastName,
    passwordHash: userData.passwordHash,
    musicUserToken: userData.musicUserToken,
  };
  await userCollection.insert(user);
  return user;
};

exports.getUserByLogin = (login) => {
  return userCollection.findOne({ login });
};

exports.getUserById = (userId) => {
  return userCollection.findOne({ _id: userId });
};

exports.updateUser = (id, fields) => {
  return userCollection.update({ _id: id }, { $set: fields });
};

exports.setPlaylistToRadiostation = (userId, playlistId) => {
  return userCollection.findOneAndUpdate({ _id: userId }, {
    $set: {
      'radiostation.playlistId': playlistId,
      'radiostation.listeners': [],
    },
  });
};

exports.unsetRadiostation = (userId) => {
  return userCollection.findOneAndUpdate({ _id: userId }, {
    $set: {
      'radiostation.playlistId': null,
      'radiostation.listeners': [],
    },
  });
};

exports.getUserById = (userId) => {
  return userCollection.findOne({ _id: userId });
};

exports.addPlaylist = (userId, playlistId) => {
  return userCollection.update(
    { _id: userId },
    { $push: { playlists: playlistId } },
  );
};

exports.deletePlaylist = (userId, playlistId) => {
  return userCollection.update(
    { _id: userId },
    { $pull: { playlists: playlistId } },
  );
};
