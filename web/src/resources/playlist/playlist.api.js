import fetchApi from 'services/fetch-api';
import config from 'resources/config';

const baseApi = fetchApi({
  baseApiUrl: config.apiUrl,
  defaultQueryStringObject: {},
});

export function getPlaylists() {
  return baseApi
    .get('playlist');
}

export function getPlaylistById(playlistId) {
  return baseApi
    .get(`playlist/${playlistId}`);
}

export function addPlaylist() {
  return baseApi
    .post('playlist/add');
}

export function uploadPlaylistCover(imageData) {
  return baseApi
    .postFile('playlist/cover', imageData);
}

export function updatePlaylistCover(playlistId, cover) {
  return baseApi
    .put('playlist/cover', null, {
      playlistId,
      cover,
    });
}
