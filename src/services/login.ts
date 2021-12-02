import { lubanApi } from '@/utils/api-prefix';
// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 登录 POST /user/login/in */
export async function login(
  data: {
    // query
    /** 用户名 */
    username: string;
    /** 密码 */
    password: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.LoginResult>(lubanApi('/user/login/in'), {
    method: 'POST',
    data: {
      ...data,
    },
    ...(options || {}),
  });
}

/** 获取用户信息 GET /user/info */
export async function getUserInfo(params: {}, options?: { [key: string]: any }) {
  return request<API.FakeCaptcha>(lubanApi('/user/info'), {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
