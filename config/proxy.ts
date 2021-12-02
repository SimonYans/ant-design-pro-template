/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    // localhost:8000/api/** -> https://preview.pro.ant.design/api/**
    '/proxyApi/': {
      // 要代理的地址
      target: 'https://lubantest.inceptio.cn',
      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: true,
      pathRewrite: { '^/proxyApi': '' },
    },
  },
  test: {
    '/proxyApi/': {
      target: 'https://lubantest.inceptio.cn',
      changeOrigin: true,
      pathRewrite: { '^/proxyApi': '' },
    },
  },
  pre: {
    '/proxyApi/': {
      target: 'https://luban.inceptio.cn',
      changeOrigin: true,
      pathRewrite: { '^/proxyApi': '' },
    },
  },
};