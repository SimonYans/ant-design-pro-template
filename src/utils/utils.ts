export const isProductionEnv = process.env.NODE_ENV === 'production';

/**
 * 获取cas登录返回的code值
 */
export function getLoginCode() {
  const url = new URL(window.location.href);
  return url.searchParams.getAll('code').pop();
}
