import fetchApi from 'services/fetch-api';
import config from 'resources/config';

const baseApi = fetchApi({
  baseApiUrl: config.apiUrl,
  defaultQueryStringObject: {},
});

export function signIn() {
  return baseApi
    .get('user/sign-in')
    .then((result) => {
      return result;
    });
}
