import fetch from 'isomorphic-fetch';
import qs from 'querystring';

export default ({
  baseApiUrl,
  apiPrefix,
  defaultQueryStringObject,
  headers,
}) => {
  const prefix = apiPrefix ? `${apiPrefix}/` : '';
  const buildUrl = (path, queryStringObject = {}) => {
    const queryString = `${qs.stringify({ ...defaultQueryStringObject, ...queryStringObject })}`;
    if (queryString) {
      return `${baseApiUrl}/${prefix}${path}?${queryString}`;
    }
    return `${baseApiUrl}/${prefix}${path}`;
  };

  const responseHandler = (response) => {
    if (response.status >= 500) {
      return response.text()
        .then((text) => { throw new Error(text); });
    }

    if (response.status >= 400) {
      const isJSON = response.headers.get('Content-Type').includes('application/json');

      if (isJSON) {
        return response.json()
          .then((obj) => { throw new Error(JSON.stringify(obj)); });
      }

      return response.text()
        .then((text) => { throw new Error(text); });
    }

    return response.json()
      .then(obj => obj);
  };

  const getJsonHeaders = {
    Accept: 'application/json',
    ...headers,
  };

  const postJsonHeaders = {
    ...getJsonHeaders,
    'Content-Type': 'application/json',
    ...headers,
  };

  const postFileHeaders = {
    ...headers,
  };

  const get = (path, queryStringObject) => fetch(
    buildUrl(path, queryStringObject), { headers: getJsonHeaders },
  ).then(responseHandler);


  const post = (path, queryStringObject, body) => fetch(
    buildUrl(path, queryStringObject), {
      method: 'POST',
      headers: postJsonHeaders,
      body: JSON.stringify(body),
    },
  ).then(responseHandler);

  const postFormData = (path, queryStringObject, formData) => fetch(
    buildUrl(path, queryStringObject), {
      method: 'POST',
      headers,
      body: formData,
    },
  ).then(responseHandler);

  const put = (path, queryStringObject, body) => fetch(
    buildUrl(path, queryStringObject), {
      method: 'PUT',
      headers: postJsonHeaders,
      body: JSON.stringify(body),
    },
  ).then(responseHandler);

  const patch = (path, queryStringObject, body) => fetch(
    buildUrl(path, queryStringObject), {
      method: 'PATCH',
      headers: postJsonHeaders,
      body: JSON.stringify(body),
    },
  ).then(responseHandler);

  const del = (path, queryStringObject, body) => fetch(
    buildUrl(path, queryStringObject), {
      method: 'DELETE',
      headers: postJsonHeaders,
      body: JSON.stringify(body),
    },
  ).then(responseHandler);

  const postRaw = (path, queryStringObject, files) => {
    const body = new window.FormData(); //eslint-disable-line
    files.forEach((file, i) => {
      body.append(`file${i}`, file);
    });
    return fetch(buildUrl(path, queryStringObject), {
      method: 'POST',
      headers,
      body,
    })
      .then(responseHandler);
  };

  const postFile = (path, fileData) => {
    return fetch(buildUrl(path), {
      method: 'POST',
      headers: postFileHeaders,
      body: fileData,
    }).then(responseHandler);
  };

  return {
    get,
    post,
    put,
    patch,
    del,
    postRaw,
    postFile,
    postFormData,
  };
};
