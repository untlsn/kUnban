import { join as pathJoin } from 'path';

export const root = pathJoin(__dirname, '..');
export const fromRoot = (...path: string[]) => pathJoin(root, ...path);
