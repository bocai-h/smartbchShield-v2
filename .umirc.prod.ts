import { defineConfig } from 'umi';
import define from './src/constants/constant_prod';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: false,
  hash: false,
  mountElementId: 'website__entrypoint',
  inlineLimit: 25000,
  define: define,
  history: {
    type: 'browser',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/qa', exact: true, component: '@/pages/qa' },
    { path: '/tutorial', exact: true, component: '@/pages/tutorial' },
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
  },
  theme: {
    'primary-color': '#6955C0',
    'link-color': '#6955C0',
    'btn-primary-color': '#6955C0',
    'btn-primary-bg': '#6955C0',
  },
});
