import { authApi } from '@/utils/api-prefix';
// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 登录接口 POST /user/login */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/user/login', {
    method: 'POST',
    requestType: 'form',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取账户信息 POST /user/queryUserInfo */
export async function queryUserInfo(options?: { [key: string]: any }) {
  return request<{
    result: API.UserInfo;
  }>('/api/user/queryUserInfo', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/user/invalid  */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/user/invalid', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 通过code获取token GET /token/cas/oauthToken */
export async function getTokenByCode(params: {}, options?: { [key: string]: any }) {
  return request<API.GetTokenByCode>(authApi('/token/cas/oauthToken'), {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
