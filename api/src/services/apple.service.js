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

appleService.getTrack = () => {
  return fetch(`${config.appleUrl}/catalog/us/search?term=breezeblocks&limit=2&types=songs`, {
    headers: defaultHeaders,
  }).then(res => res.json());
};

appleService.searchTracks = (searchValue) => {
  return fetch(`${config.appleUrl}/catalog/by/search?term=${searchValue}&limit=15&types=songs,artists`, {
    headers: defaultHeaders,
  }).then(res => res.json());
};

module.exports = appleService;
