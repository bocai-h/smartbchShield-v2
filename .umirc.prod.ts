import { defineConfig } from 'umi';
import define from './src/constants/constant_prod';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: false,
  hash: true,
  mountElementId: 'website__entrypoint',
  inlineLimit: 25000,
  define: define,
  history: {
    type: 'browser',
  },
  routes: [
    { exact: true, path: '/', redirect: '/app' },
    { path: '/app', component: '@/pages/app' },
    // { path: '/create_pool', component: '@/pages/pool' },
    { path: '/tutorial', exact: true, component: '@/pages/tutorial' },
    { path: '/stats', exact: true, component: '@/pages/dashboard' },
  ],
  proxy: {
    '/kucoin_api': {
      target: 'https://api.kucoin.com',
      pathRewrite: { '^/kucoin_api': '' },
      changeOrigin: true,
    },
    '/huobi_api': {
      target: 'https://api.huobi.pro',
      pathRewrite: { '^/huobi_api': '' },
      changeOrigin: true,
    },
    '/binance_api': {
      target: 'https://api.binance.com',
      pathRewrite: { '^/binance_api': '' },
      changeOrigin: true,
    },
    '/mxc_api': {
      target: 'https://www.mxc.com',
      pathRewrite: { '^/mxc_api': '' },
      changeOrigin: true,
    },
    '/data_platform_api': {
      target: 'https://data-platform.suterusu.io',
      pathRewrite: { '^/data_platform_api': '' },
      changeOrigin: true,
    },
    '/staging_data_platform_api': {
      target: 'https://data-platform.staging.suterusu.io',
      pathRewrite: { '^/staging_data_platform_api': '' },
      changeOrigin: true,
    },
  },
  theme: {
    'primary-color': '#6955C0',
    'link-color': '#6955C0',
    'btn-primary-color': '#6955C0',
    'btn-primary-bg': '#6955C0',
  },
});
