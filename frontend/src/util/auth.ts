import jwtDecode from 'jwt-decode';

export type AccessToken = {
  exp: number;
  name: string;
  avatarUrl: string;
  sub: string;
}

export const saveSessionData = (loginResponse: string) => {
  localStorage.setItem('authData', JSON.stringify(loginResponse));
}

export const getSessionData = () => {
  const sessionData = localStorage.getItem('authData') ?? '[]';
  const parsedSessionData = JSON.parse(sessionData);
  return parsedSessionData as string;
}

export const getAccessTokenDecode = () => {
  const sessionData = getSessionData();

  try {
    const tokenDecoded = jwtDecode(sessionData);
    return tokenDecoded as AccessToken;
  } catch (error) {
    return {} as AccessToken;
  }

}

export const isTokenValid = () => {
  const accessToken = getAccessTokenDecode();

  return Date.now() <= accessToken.exp * 1000;
}

export function isAuthenticated() {
  const sessionData = getSessionData();

  return sessionData && isTokenValid();
}

export const logout = () => {
  localStorage.removeItem('authData');
}