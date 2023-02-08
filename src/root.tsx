// @refresh reload
import { Suspense } from 'solid-js';
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  Link,
} from 'solid-start';

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>App</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
