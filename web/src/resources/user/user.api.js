import fetchApi from 'services/fetch-api';
import config from 'resources/config';

const baseApi = fetchApi({
  baseApiUrl: config.apiUrl,
  defaultQueryStringObject: {},
});

export function signIn() {
  return baseApi
    .get('user/sign-in');
}

export function setPlaylistToRadiostation(playlistId) {
  return baseApi
    .post('user/set-radiostation', null, { playlistId });
}

export function unsetRadiostation() {
  return baseApi
    .post('user/unset-radiostation');
}
