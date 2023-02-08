import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import css from 'unocss/vite';
import autoImport from 'unplugin-auto-import/vite';
import adapter from 'solid-start-static';

export default defineConfig({
  server: {
    port: 3333,
  },
  plugins: [
    solid({ adapter: adapter() }),
    css(),
    autoImport({
      imports: [
        'solid-js',
        {
          'solid-start': ['A'],
        },
      ],
      dts: './src/auto-imports.d.ts',
    }),
  ],
});
