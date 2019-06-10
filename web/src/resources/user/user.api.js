import fetchApi from 'services/fetch-api';
import config from 'resources/config';

const baseApi = fetchApi({
  baseApiUrl: config.apiUrl,
  defaultQueryStringObject: {},
});

export function signIn(musicUserToken, data) {
  return baseApi
    .post('user/sign-in', null, {
      musicUserToken,
      userData: data,
    });
}

export function signUp(musicUserToken, data) {
  return baseApi
    .post('user/sign-up', null, {
      musicUserToken,
      userData: data,
    });
}

export function getUserInfo() {
  return baseApi
    .get('user/');
}

export function setPlaylistToRadiostation(playlistId) {
  return baseApi
    .post('user/set-radiostation', null, { playlistId });
}

export function unsetRadiostation() {
  return baseApi
    .post('user/unset-radiostation');
}

export function getRadiostation() {
  return baseApi
    .get('user/radiostation');
}

export function getUserRadiostation(userId) {
  return baseApi
    .get(`user/${userId}/radiostation`);
}
