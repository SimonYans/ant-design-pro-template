import Cookies from 'js-cookie';

const TOKEN = 'token';
export function setToken(token: string) {
  Cookies.set(TOKEN, token, { path: '/', expires: 1 });
}
export function removeToken() {
  Cookies.remove(TOKEN, { path: '/' });
}
export function getToken() {
  return Cookies.get(TOKEN);
}
