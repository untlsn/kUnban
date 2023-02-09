import autoImportRoot from 'unplugin-auto-import/vite';
import { fromRoot } from '../_root';

export const autoImport = (imports?: Record<string, (string | [string, string])[]>) => (
  autoImportRoot({
    imports: [
      'solid-js',
      {
        'solid-start/server': ['createServerData$', 'createServerAction$', 'useRequest', 'createServerMultiAction$'],
        'solid-start': ['createCookie', 'createRouteAction', 'createRouteData', 'createSessionStorage', 'createCookieSessionStorage', 'createMemorySessionStorage', 'A', 'Link', 'Style', 'Title', 'useHref', 'useLocation', 'useNavigate', 'useMatch', 'useParams', 'useRoutes', 'useIsRouting', 'useRouteData', 'useServerContext', 'useSearchParams', 'useResolvedPath', 'Navigate'],
        clsx: ['clsx'],
        '@prisma/client': ['PrismaClient'],
        ...imports,
      },
    ],
    dts: fromRoot('./src/types/auto-imports.d.ts'),
  })
);
