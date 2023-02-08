import { defineConfig } from 'vite';
import { passVitePlugins } from './libs/vite';

export default defineConfig({
  server: {
    port: 3333,
  },
  plugins: [
    ...await passVitePlugins({
      adapter: 'static',
    }),
  ],
});
