const fetch = require('isomorphic-fetch');
const playlistService = require('resources/playlist/playlist.service');
const trackService = require('resources/track/track.service');
const userService = require('./user.service');

module.exports.signIn = async function signIn(ctx) {
  fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=ffd1d95d6ca512c851d7af98908cdcb4&format=json')
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      console.log(result.tracks.track[0]);
    });
  ctx.body = {
    token: 'alina',
  };
};

module.exports.setPlaylistToRadiostation = async (ctx) => {
  const { playlistId } = ctx.request.body;
  const userId = '5ca92ad73257a82200bb0f84';
  const user = await userService.setPlaylistToRadiostation(userId, playlistId);
  ctx.body = {
    radiostation: user.radiostation,
  };
};

module.exports.unsetRadiostation = async (ctx) => {
  const userId = '5ca92ad73257a82200bb0f84';
  const user = await userService.unsetRadiostation(userId);
  ctx.body = {
    radiostation: user.radiostation,
  };
};

module.exports.getRadiostation = async (ctx) => {
  const userId = '5ca92ad73257a82200bb0f84';
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
