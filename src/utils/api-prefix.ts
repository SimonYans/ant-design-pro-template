interface ApiFunc {
  (url: string): string;
}

let proxy: string;
if (process.env.NODE_ENV === 'development') {
  proxy = '/proxyApi';
} else {
  proxy = '';
}

export const lubanApi: ApiFunc = function (uri) {
  const prefix: string = '/luban/license/manager/v1';
  if (uri) {
    return proxy + prefix + uri;
  }
  return proxy + prefix;
};
