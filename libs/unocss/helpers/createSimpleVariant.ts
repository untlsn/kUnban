import type { Variant } from 'unocss';

export const createSimpleVariant = (select: string, selector: (s: string) => string): Variant => (
  (matcher) => {
    if (!matcher.startsWith(select)) return matcher;

    return {
      matcher: matcher.slice(select.length),
      selector,
    };
  }
);
