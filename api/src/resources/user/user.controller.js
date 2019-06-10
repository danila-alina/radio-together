const securityUtil = require('security.util');
const authService = require('services/auth.service');
const playlistService = require('resources/playlist/playlist.service');
const trackService = require('resources/track/track.service');
const userService = require('./user.service');

module.exports.signIn = async (ctx) => {
  const { musicUserToken, userData } = ctx.request.body;
  const { login, password } = userData;

  const user = await userService.getUserByLogin(login);
  if (!user) {
    ctx.throw(401);
  }

  const verified = await securityUtil.verifyHash(password, user.passwordHash);
  if (!verified) {
    ctx.throw(401);
  }

  await userService.updateUser(user._id, { musicUserToken });
  const token = authService.generateToken(user._id);
  ctx.body = {
    token,
  };
};

module.exports.signUp = async (ctx) => {
  const { musicUserToken, userData } = ctx.request.body;
  const {
    login,
    firstName,
    lastName,
    password,
  } = userData;

  const hash = await securityUtil.getHash(password);

  const data = {
    login,
    firstName,
    lastName,
    musicUserToken,
    passwordHash: hash,
  };

  const user = await userService.createUser(data);
  const token = authService.generateToken(user._id);
  ctx.body = {
    token,
  };
};

module.exports.getUserInfo = async (ctx) => {
  const { userId } = ctx.state;
  const user = await userService.getUserById(userId);
  ctx.body = {
    user,
  };
};

module.exports.setPlaylistToRadiostation = async (ctx) => {
  const { userId } = ctx.state;
  const { playlistId } = ctx.request.body;
  const user = await userService.setPlaylistToRadiostation(userId, playlistId);
  ctx.body = {
    radiostation: user.radiostation,
  };
};

module.exports.unsetRadiostation = async (ctx) => {
  const { userId } = ctx.state;
  const user = await userService.unsetRadiostation(userId);
  ctx.body = {
    radiostation: user.radiostation,
  };
};

module.exports.getRadiostation = async (ctx) => {
  const { userId } = ctx.state;
  const user = await userService.getUserById(userId);
  const { radiostation } = user;

  if (!radiostation.playlistId) {
    ctx.body = {
      radiostation,
    };
  } else {
    const playlist = await playlistService.getPlaylistById(radiostation.playlistId);
    const tracks = await trackService.getTracksByIds(playlist.tracks);

    ctx.body = {
      radiostation: {
        ...radiostation,
        playlist: {
          ...playlist,
          tracks,
        },
      },
    };
  }
};

module.exports.getUserRadiostation = async (ctx) => {
  const { userId } = ctx.params;
  const user = await userService.getUserById(userId);
  const { radiostation } = user;

  if (!radiostation.playlistId) {
    ctx.body = {
      radiostation,
    };
  } else {
    const playlist = await playlistService.getPlaylistById(radiostation.playlistId);
    const tracks = await trackService.getTracksByIds(playlist.tracks);

    ctx.body = {
      radiostation: {
        ...radiostation,
        playlist: {
          ...playlist,
          tracks,
        },
      },
    };
  }
};