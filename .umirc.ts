import { defineConfig } from 'umi';
export default defineConfig({
  plugins: ['@alitajs/sentry'],
  sentry: {
    dsn:
      'https://59921cab1b5647149982449aaed5ca6d@o923417.ingest.sentry.io/5871355',
    development: false,
  },
});
