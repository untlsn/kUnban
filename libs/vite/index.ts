import solid from 'solid-start/vite';
import css from 'unocss/vite';
import { autoImport } from './autoImport';

const adapters = {
  static: () => import('solid-start-static' as string),
  node: () => import('solid-start-node' as string),
  none: () => undefined,
};

type PresetOptions = {
  imports?: Record<string, (string | [string, string])[]>,
  adapter?: keyof typeof adapters
}

export const passVitePlugins = async (options: PresetOptions) => [
  solid({ adapter: options.adapter ? await adapters[options.adapter]() : undefined }),
  css(),
  autoImport(options.imports),
];
