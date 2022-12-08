import axios, { Method } from 'axios';

import { getSessionData, logout, saveSessionData } from './auth';

type RequestParams = {
  method?: Method;
  url: string;
  data?: object | string;
  params?: object;
  headers?: object;
}

const BASE_URL = "http://localhost:3333"/* ?? "https://copabackend.rsbarbosa.com.br"*/;

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    logout();
  }
  return Promise.reject(error);
});

export const makeRequest = ({ method = 'GET', url, data, params, headers }: RequestParams) => {
  return axios({
    method,
    url: `${BASE_URL}${url}`,
    data,
    params,
    headers
  });
};

export const makePrivateRequest = ({ method = 'GET', url, data, params }: RequestParams) => {
  const sessionData = getSessionData();

  const headers = {
    Authorization: `Bearer ${sessionData}`
  }

  return makeRequest({ method, url, data, params, headers });
}

export const makeLogin = async (access_token: string) => {
  const token = await makeRequest({ method: 'POST', url: "/users", data: { access_token } });
  saveSessionData(token.data.token);
};

