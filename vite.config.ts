import { defineConfig } from 'vite';
import { passVitePlugins } from './libs/vite';

export default defineConfig({
  server: {
    port: 3333,
  },
  resolve: {
    alias: {
      '@prisma/client': './src/types/prisma-client',
    },
  },
  plugins: [
    ...await passVitePlugins({
      adapter: 'static',
    }),
  ],
});
