const config = require('config/config');
const fetch = require('isomorphic-fetch');

const appleService = {};

const defaultHeaders = {
  Authorization: `Bearer ${config.appleToken}`,
};

appleService.getPopularTracks = () => {
  return fetch(`${config.appleUrl}/catalog/by/charts?types=songs`, {
    headers: defaultHeaders,
  }).then(res => res.json());
};

module.exports = appleService;
