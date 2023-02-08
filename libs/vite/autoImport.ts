import autoImportRoot from 'unplugin-auto-import/vite';
import { fromRoot } from '../_root';

export const autoImport = (imports?: Record<string, (string | [string, string])[]>) => (
  autoImportRoot({
    imports: [
      'solid-js',
      {
        'solid-start': ['A'],
        clsx: ['clsx'],
        ...imports,
      },
    ],
    dts: fromRoot('./src/auto-imports.d.ts'),
  })
);
