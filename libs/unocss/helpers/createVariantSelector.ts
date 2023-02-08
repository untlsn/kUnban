import type { Variant } from 'unocss';

export const createVariantSelector = (select: string, cb: (state: string, s: string) => string): Variant => (
  (matcher) => {
    if (!matcher.startsWith(select)) return matcher;

    const [variant, ...rest] = matcher.split(':');

    const state = variant.replace(select, '');

    return {
      selector: (s) => cb(state, s),
      matcher: rest.join(':'),
    };
  }
);
