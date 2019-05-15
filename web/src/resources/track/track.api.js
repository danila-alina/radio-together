import fetchApi from 'services/fetch-api';
import config from 'resources/config';

const baseApi = fetchApi({
  baseApiUrl: config.apiUrl,
  defaultQueryStringObject: {},
});

export function getPopularTracks() {
  return baseApi
    .get('track/popular');
}

export function rateTrack(trackId, trackRate) {
  return baseApi
    .post(`track/${trackId}/rate`, null, { trackRate });
}
