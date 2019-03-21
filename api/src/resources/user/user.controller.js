const fetch = require('isomorphic-fetch');

module.exports.signIn = async function signIn(ctx) {
  fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=ffd1d95d6ca512c851d7af98908cdcb4&format=json')
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      console.log(result.tracks.track[0]);
    })
  ctx.body = {
    token: 'alina',
  };
};
