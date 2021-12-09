/** 用于生成 uuid */
export const getUuid = () => {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};

export const getGuid = () => {
  return (
    getUuid() +
    getUuid() +
    '-' +
    getUuid() +
    '-' +
    getUuid() +
    '-' +
    getUuid() +
    '-' +
    getUuid() +
    getUuid() +
    getUuid()
  );
};

/** 用于处理图片地址 */
export const getImageUrl = (url: string) => {
  return process.env.IMAGE_URL ? process.env.IMAGE_URL + url : url;
};

/** 用于格式化时间 */
export const dateFormat = (d: Date | string, fmt: string = 'yyyy-MM-dd HH:mm:ss') => {
  if (!d) return;
  // eslint-disable-next-line no-param-reassign
  d = new Date(d);
  const o: any = {
    'M+': d.getMonth() + 1,
    'd+': d.getDate(),
    'H+': d.getHours(),
    'm+': d.getMinutes(),
    's+': d.getSeconds(),
    'q+': Math.floor((d.getMonth() + 3) / 3),
    S: d.getMilliseconds(),
  };
  if (/(y+)/.test(fmt)) {
    // eslint-disable-next-line no-param-reassign
    fmt = fmt.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      // eslint-disable-next-line no-param-reassign
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length),
      );
    }
  }
  return fmt;
};
