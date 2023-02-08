import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  presetWind, transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import { theme } from '../../tailwind.config.cjs';
import { createVariantSelector } from './helpers/createVariantSelector';
import { createSimpleVariant } from './helpers/createSimpleVariant';
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';
import { fromRoot } from '../_root';

type CreateUnocssProps = {
  /**
   * Set fonts for unocss
   * @link https://www.npmjs.com/package/@unocss/preset-web-fonts
   */
  fonts: Record<string, string | string[]>;
  /**
   * Directory where you custom icons placed
   * @default no local icons, only those from iconfiy
   */
  iconsDir?: string
}

export const createUnocss = (options: CreateUnocssProps) => (
  defineConfig({
    // WebStorm don't support unocss config, so theme put in tailwind.config.cjs
    theme: theme.extend,
    rules: [
      ['c', { content: '""' }],
      ['c_', { content: '"\xa0"' }],
      [/^((min|max)-)?size-(\d+)(.+)?$/, ([matcher]) => {
        const [type, sizePart] = matcher.split('size-');
        const sizeNum = Number(sizePart);
        const createRes = (width: string, height?: string) => ({ [`${type}width`]: width, [`${type}height`]: height ?? width });

        if (sizeNum > 0) return createRes(`${sizeNum / 4}rem`);
        if (sizePart.endsWith('v')) return createRes(`${sizePart}w`, `${sizePart}h`);
        if (sizePart.includes('/')) {
          const [prev, suf] = sizePart.split('/');
          const percent = 100 * Number(prev) / Number(suf);
          return createRes(`${percent}%`);
        }

        return createRes(sizePart);
      }],
    ],
    variants: [
      createVariantSelector('deep-of-',  (state, s) => `${s} ${state}`),
      createVariantSelector('of-',  (state, s) => `${s}>${state}`),
      createSimpleVariant('hocus:', (s) => `${s}:hover, ${s}:focus`),
      createSimpleVariant('deep-children:', (s) => `${s} *`),

      // Match data and aria values
      (matcher) => {
        if (!['aria-', 'data-'].some((v) => matcher.startsWith(v))) return matcher;

        const [variant, ...rest] = matcher.split(':');

        const index = matcher.indexOf('[');
        const value = index != -1 ? matcher.slice(index + 1, matcher.indexOf(']')) : 'true';
        const selector = variant.replace(/-\[.+]$/, '');


        return {
          selector: (s) => `${s}[${selector}="${value}"]`,
          matcher: rest.join(':'),
        };
      },
      (matcher) => {
        if (!matcher.startsWith('max-')) return matcher;

        const [variant, ...rest] = matcher.split(':');

        const mediaPx = {
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          '2xl': 1536,
        }[variant.replace('max-', '')];

        if (!mediaPx) return matcher;

        return {
          matcher: rest.join(':'),
          parent: `@media (max-width: ${mediaPx}px)`,
        };
      },
    ],
    presets: [
      presetUno(),
      presetWind(),
      presetWebFonts({
        fonts: options.fonts,
      }),
      presetIcons({
        extraProperties: {
          display: 'inline-block',
          height: 'auto',
          'min-height': '1em',
          'white-space': 'nowrap',
        },
        cdn: 'https://esm.sh/',
        collections: options.iconsDir ? {
          my: FileSystemIconLoader(fromRoot(options.iconsDir)),
        } : undefined,
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
      transformerCompileClass(),
    ],
  })
);
